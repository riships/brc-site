# Stage 1: Build static assets
FROM node:20-alpine AS builder

WORKDIR /app

# Install libc6-compat for Alpine compatibility
RUN apk add --no-cache libc6-compat

# Copy package descriptors first for Docker layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files
COPY . .

# Build static output (serves at root domain / on OCI)
ENV NODE_ENV=production
RUN npm run build

# Stage 2: Production Nginx runtime
FROM nginx:1.27-alpine AS runner

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built static export from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Copy custom production nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Healthcheck to verify container is responsive
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
