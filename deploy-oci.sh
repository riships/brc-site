#!/usr/bin/env bash
# ==============================================================================
# BRC Website — OCI (Oracle Cloud Infrastructure) Production Deployment Script
# ==============================================================================
set -euo pipefail

echo "========================================================"
echo "🚀 BRC Site — Automated OCI Deployment"
echo "========================================================"

# 1. Check for .env file or prompt for domain and email
if [ ! -f .env ]; then
  if [ -f .env.example ]; then
    cp .env.example .env
  fi
  echo "⚠️  .env file not found. Created from .env.example."
  read -rp "Enter your primary domain name (e.g., brc-tech.com): " DOMAIN_NAME
  read -rp "Enter your admin email for SSL certificates: " SSL_EMAIL
  sed -i "s/DOMAIN_NAME=.*/DOMAIN_NAME=${DOMAIN_NAME}/" .env
  sed -i "s/SSL_EMAIL=.*/SSL_EMAIL=${SSL_EMAIL}/" .env
else
  # shellcheck disable=SC1091
  source .env
fi

DOMAIN="${DOMAIN_NAME:-brc-tech.com}"
EMAIL="${SSL_EMAIL:-admin@${DOMAIN}}"

echo "Target Domain : ${DOMAIN}"
echo "SSL Contact   : ${EMAIL}"

# 2. Host Firewall Configuration (Crucial for OCI VMs)
echo "🛡️  Configuring host firewall for HTTP (80) & HTTPS (443)..."

if command -v firewall-cmd &> /dev/null && sudo systemctl is-active --quiet firewalld; then
  echo "→ Opening ports in firewalld..."
  sudo firewall-cmd --permanent --add-service=http || true
  sudo firewall-cmd --permanent --add-service=https || true
  sudo firewall-cmd --reload || true
fi

if command -v ufw &> /dev/null && sudo ufw status | grep -q "Status: active"; then
  echo "→ Opening ports in ufw..."
  sudo ufw allow 80/tcp || true
  sudo ufw allow 443/tcp || true
fi

# Oracle Linux default iptables check
if sudo iptables -L -n 2>/dev/null | grep -q "REJECT"; then
  echo "→ Adjusting Oracle Linux default iptables rules..."
  sudo iptables -I INPUT 1 -p tcp --dport 80 -j ACCEPT || true
  sudo iptables -I INPUT 1 -p tcp --dport 443 -j ACCEPT || true
fi

# 3. Verify Docker & Docker Compose installation
if ! command -v docker &> /dev/null; then
  echo "📦 Installing Docker..."
  if [ -f /etc/oracle-release ] || [ -f /etc/redhat-release ]; then
    sudo dnf install -y dnf-utils
    sudo dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
    sudo dnf install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
    sudo systemctl enable --now docker
  else
    curl -fsSL https://get.docker.com | sh
    sudo systemctl enable --now docker
  fi
  sudo usermod -aG docker "$USER" || true
fi

# Compose command detection (docker compose vs docker-compose)
if docker compose version &> /dev/null; then
  DOCKER_COMPOSE="docker compose"
elif command -v docker-compose &> /dev/null; then
  DOCKER_COMPOSE="docker-compose"
else
  echo "❌ Docker Compose not found. Please install docker-compose-plugin."
  exit 1
fi

# 4. Create required directories for Certbot volumes
mkdir -p certbot/conf certbot/www

# 5. Build and start initial HTTP container
echo "🔨 Building Docker image and starting HTTP service..."
$DOCKER_COMPOSE down --remove-orphans || true
$DOCKER_COMPOSE up -d --build web

# Wait for container to be ready
echo "⏳ Waiting for Nginx to start..."
sleep 5

# 6. Check if SSL certificate already exists
CERT_PATH="certbot/conf/live/${DOMAIN}/fullchain.pem"
if [ ! -f "${CERT_PATH}" ]; then
  echo "🔐 Requesting Let's Encrypt SSL certificate for ${DOMAIN} and www.${DOMAIN}..."
  
  # Run certbot to obtain certificate
  $DOCKER_COMPOSE run --rm --entrypoint "\
    certbot certonly --webroot -w /var/www/certbot \
    --email ${EMAIL} \
    -d ${DOMAIN} -d www.${DOMAIN} \
    --agree-tos \
    --no-eff-email \
    --force-renewal" certbot || {
      echo "⚠️ Could not issue certificate for www.${DOMAIN}, attempting apex domain only..."
      $DOCKER_COMPOSE run --rm --entrypoint "\
        certbot certonly --webroot -w /var/www/certbot \
        --email ${EMAIL} \
        -d ${DOMAIN} \
        --agree-tos \
        --no-eff-email \
        --force-renewal" certbot
    }

  # 7. Apply SSL Nginx configuration template
  if [ -f "${CERT_PATH}" ]; then
    echo "✅ SSL certificate obtained successfully."
    echo "🔒 Applying SSL Nginx configuration..."
    sed "s/\${DOMAIN_NAME}/${DOMAIN}/g" nginx.ssl.conf.template > nginx.conf
    $DOCKER_COMPOSE exec web nginx -s reload
  else
    echo "⚠️ SSL certificate generation failed. The site is running on HTTP (port 80)."
    echo "   Ensure your domain DNS A records point to this OCI VM's Public IP and ports 80/443 are open in OCI Security List."
  fi
else
  echo "✅ SSL certificate already exists."
  sed "s/\${DOMAIN_NAME}/${DOMAIN}/g" nginx.ssl.conf.template > nginx.conf
  $DOCKER_COMPOSE exec web nginx -s reload
fi

# 8. Start certbot background daemon for auto-renewals
echo "🔄 Starting Certbot background auto-renewal service..."
$DOCKER_COMPOSE up -d certbot

echo "========================================================"
echo "🎉 Deployment Complete!"
echo "Site URL : https://${DOMAIN}"
echo "========================================================"
