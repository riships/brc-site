# Oracle Cloud Infrastructure (OCI) Deployment Guide

This guide details how to deploy the BRC website to an **Oracle Cloud Infrastructure (OCI)** Compute Instance with a custom domain, automated Let's Encrypt SSL/TLS certificates, and high-performance Nginx static caching.

---

## Architecture Overview

```
[User Browser]
      │
      ▼  (HTTPS / 443)
[DNS Provider: A Record → OCI Reserved Public IP]
      │
      ▼
[OCI Virtual Cloud Network (VCN) Ingress Rules: 80, 443]
      │
      ▼
[OCI Compute VM: Oracle Linux / Ubuntu]
      ├── Host Firewall: firewalld / iptables / ufw
      │
      └── [Docker Compose]
            ├── [Nginx Container (port 80/443)]
            │     ├── Serves Next.js Static Export
            │     ├── Gzip Compression & Security Headers
            │     ├── Immutable 1-Year Asset Caching
            │     └── Automatic HTTP → HTTPS 301 Redirect
            │
            └── [Certbot Container]
                  └── Automated Let's Encrypt SSL Issuance & 12h Renewal Loop
```

---

## Step 1: Provision OCI Compute Instance

1. Log into your **Oracle Cloud Console**.
2. Navigate to **Compute** &rarr; **Instances** &rarr; **Create Instance**.
3. Choose your configuration:
   - **Name**: `brc-site-web`
   - **Image**: **Oracle Linux 8/9** (or **Ubuntu 22.04/24.04 LTS**)
   - **Shape**:
     - *Always Free Eligible*: **VM.Standard.A1.Flex** (Ampere Arm - 1 to 4 OCPUs, 6 to 24 GB RAM) or **VM.Standard.E2.1.Micro** (AMD).
4. Under **Networking**:
   - Assign a **Public IPv4 address**.
5. Under **Add SSH keys**:
   - Save your private key and upload your public SSH key.
6. Click **Create**.

> [!TIP]
> **Reserve a Static Public IP in OCI:**
> Go to **Networking** &rarr; **IP Management** &rarr; **Reserved Public IPs** &rarr; **Reserve Public IP Address**, then attach it to your instance's VNIC. This ensures your server IP never changes when rebooted.

---

## Step 2: Configure OCI VCN Ingress Rules (Security List)

By default, OCI blocks all incoming traffic except port 22 (SSH). You must allow ports **80** and **443**:

1. In the OCI Console, navigate to **Networking** &rarr; **Virtual Cloud Networks**.
2. Click your VCN &rarr; Click **Security Lists** &rarr; Select **Default Security List for `<your-vcn>`**.
3. Click **Add Ingress Rules**:

| Field | HTTP Rule | HTTPS Rule |
|---|---|---|
| **Stateless** | Unchecked (Stateful) | Unchecked (Stateful) |
| **Source Type** | CIDR | CIDR |
| **Source CIDR** | `0.0.0.0/0` | `0.0.0.0/0` |
| **IP Protocol** | TCP | TCP |
| **Source Port Range** | All | All |
| **Destination Port Range** | `80` | `443` |
| **Description** | Allow HTTP traffic | Allow HTTPS traffic |

4. Click **Add Ingress Rules**.

---

## Step 3: Configure DNS Records at Your Domain Registrar

Go to your DNS provider (e.g., Cloudflare, GoDaddy, Namecheap, Route 53):

| Type | Name / Host | Value | TTL | Proxy Status |
|---|---|---|---|---|
| **A** | `@` (apex) | `<Your-OCI-Reserved-Public-IP>` | Auto / 300 | DNS Only (Gray Cloud if Cloudflare)* |
| **CNAME** | `www` | `yourdomain.com.` (or apex IP) | Auto / 300 | DNS Only |

*\*Note: If using Cloudflare, temporarily set proxy status to "DNS Only" during initial SSL certificate issuance so Let's Encrypt can verify the domain directly.*

---

## Step 4: Deploy the Application on the OCI VM

1. Connect to your OCI instance via SSH:
   ```bash
   # For Oracle Linux: default user is opc
   ssh -i /path/to/private_key.key opc@<YOUR_OCI_PUBLIC_IP>

   # For Ubuntu: default user is ubuntu
   # ssh -i /path/to/private_key.key ubuntu@<YOUR_OCI_PUBLIC_IP>
   ```

2. Clone the repository:
   ```bash
   sudo mkdir -p /opt/brc-site
   sudo chown -R $USER:$USER /opt/brc-site
   git clone https://github.com/riships/brc-site.git /opt/brc-site
   cd /opt/brc-site
   ```

3. Create your `.env` configuration:
   ```bash
   cp .env.example .env
   nano .env
   ```
   Set your actual domain and admin email:
   ```env
   DOMAIN_NAME=yourdomain.com
   SSL_EMAIL=admin@yourdomain.com
   ```

4. Run the automated deployment script:
   ```bash
   chmod +x deploy-oci.sh
   ./deploy-oci.sh
   ```

The script will automatically:
- Configure local VM firewall rules (`firewalld`, `iptables`, or `ufw`) for ports 80 & 443
- Install Docker and Docker Compose (if not already installed)
- Build the multi-stage Next.js static production Docker image
- Obtain Let's Encrypt SSL/TLS certificates for `yourdomain.com` and `www.yourdomain.com`
- Configure Nginx with HTTP/2, HSTS, compression, and security headers
- Launch the Certbot background service for automated 12-hour SSL renewal checks

---

## Step 5: Verify Deployment & SSL

1. Check container status:
   ```bash
   docker compose ps
   ```
   You should see:
   - `brc-site-web` (Up, ports 0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp)
   - `brc-site-certbot` (Up, running renewal loop)

2. Visit your site in any browser:
   - `https://yourdomain.com`
   - Test that `http://yourdomain.com` automatically redirects to `https://yourdomain.com`.

---

## Step 6: Setting Up Auto-Start on VM Reboot

To ensure the website always starts automatically if the OCI instance is rebooted:

```bash
sudo tee /etc/systemd/system/brc-site.service << 'EOF'
[Unit]
Description=BRC Website Docker Compose Service
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/opt/brc-site
ExecStart=/usr/bin/docker compose up -d
ExecStop=/usr/bin/docker compose down
TimeoutStartSec=0

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable brc-site.service
```

---

## Step 7: Continuous Deployment via GitHub Actions (Optional)

If you want pushes to `main` to automatically redeploy to your OCI VM:

1. In your GitHub repository, go to **Settings** &rarr; **Secrets and variables** &rarr; **Actions**.
2. Add the following repository secrets:
   - `OCI_HOST`: Your OCI instance's Reserved Public IP
   - `OCI_USERNAME`: `opc` (for Oracle Linux) or `ubuntu` (for Ubuntu)
   - `OCI_SSH_KEY`: Content of your private SSH key (OpenSSH format)
3. Navigate to **Actions** &rarr; Select **Deploy to OCI (Oracle Cloud Infrastructure)** &rarr; Click **Run workflow**.

---

## Troubleshooting

### Issue 1: Connection Timed Out on Port 80/443
- **Check OCI VCN Security List**: Ensure Ingress Rules allow TCP ports 80 and 443 from `0.0.0.0/0`.
- **Check Oracle Linux Host Firewall**: Oracle Linux images have built-in iptables that block ports. Run:
  ```bash
  sudo iptables -I INPUT 1 -p tcp --dport 80 -j ACCEPT
  sudo iptables -I INPUT 1 -p tcp --dport 443 -j ACCEPT
  ```

### Issue 2: Certbot Fails During SSL Issuance
- Verify that your domain's DNS `A` record has propagated and points to the exact public IP:
  ```bash
  dig +short yourdomain.com
  ```
- Make sure ports 80 and 443 are reachable before running Certbot.

### Issue 3: Redeploying After Code Updates
To deploy updates manually anytime:
```bash
cd /opt/brc-site
git pull origin main
docker compose up -d --build web
```
