# Docker Service Restart Guide

This document provides instructions for restarting all Docker Compose services in case of service disruption for the MathCom web application.

## Overview

The MathCom application consists of multiple Docker Compose services across different environments:

- **Local Development**: `docker/local/`
- **Production Main**: `docker/production/main/`
- **Production Archive**: `docker/production/archive/`

## Prerequisites

Before restarting services, ensure you have:

1. Docker and Docker Compose installed
2. Access to the project directory
3. Proper environment variables configured
4. Required Docker networks created
5. **Sudo privileges** for system-level operations

**Note**: Many Docker commands require `sudo` privileges, especially on Linux systems. If you're in the `docker` group, some commands may work without `sudo`, but it's safer to use `sudo` for system operations.

**Sudo Usage Guidelines:**

- **Always use `sudo`** for system-level operations (systemctl, netstat, lsof)
- **Use `sudo`** for Docker daemon operations (network create/rm, volume prune)
- **Use `sudo`** for emergency operations (force remove containers)
- **Optional `sudo`** for regular Docker Compose operations (if in docker group)
- **Test without `sudo` first** for Docker Compose commands, add if permission denied

## Quick Restart Commands

### 1. Stop All Services (Emergency Stop)

```bash
# Stop all running containers immediately
# This command stops all containers regardless of their project
# Note: Requires sudo for system-level container operations
sudo docker stop $(sudo docker ps -q)

# Or stop specific project containers gracefully
# The 'down' command stops and removes containers, networks, and volumes (if specified)
# Note: Docker Compose commands may work without sudo if user is in docker group
docker compose -f docker/local/docker-compose.yml down
docker compose -f docker/production/main/proxy/docker-compose.yml down
docker compose -f docker/production/main/wordpress/docker-compose.yml down
docker compose -f docker/production/main/astro/docker-compose.yml down
docker compose -f docker/production/archive/docker-compose.yml down
```

### 2. Restart All Services

```bash
# Restart in order of dependency to ensure proper startup sequence
# The '-d' flag runs containers in detached mode (background)
# The 'up' command creates and starts containers, networks, and volumes

# 1. Start proxy (Traefik) first - handles routing and SSL termination
docker compose -f docker/production/main/proxy/docker-compose.yml up -d

# 2. Start WordPress services - includes database, Redis, and WordPress application
docker compose -f docker/production/main/wordpress/docker-compose.yml up -d

# 3. Start Astro services - the main web application
docker compose -f docker/production/main/astro/docker-compose.yml up -d

# 4. Start archive services (if needed) - legacy or archived applications
docker compose -f docker/production/archive/docker-compose.yml up -d

# 5. Start local development (if needed) - for development environment
docker compose -f docker/local/docker-compose.yml up -d
```

## Detailed Restart Procedures

### Production Environment Restart

#### Step 1: Verify Current Status

```bash
# Check all running containers and their status
# Shows container names, status, ports, and other details
# Note: May require sudo depending on Docker group membership
sudo docker ps

# Check service status for each project
# The 'ps' command shows the status of services defined in the compose file
docker compose -f docker/production/main/proxy/docker-compose.yml ps
docker compose -f docker/production/main/wordpress/docker-compose.yml ps
docker compose -f docker/production/main/astro/docker-compose.yml ps
```

#### Step 2: Graceful Shutdown

```bash
# Stop services gracefully in reverse dependency order
# The 'down' command stops and removes containers, networks, and volumes
# This ensures clean shutdown without leaving orphaned resources

docker compose -f docker/production/main/proxy/docker-compose.yml down
docker compose -f docker/production/main/wordpress/docker-compose.yml down
docker compose -f docker/production/main/astro/docker-compose.yml down
```

#### Step 3: Verify Networks

```bash
# Check if required networks exist
# Networks are essential for container communication
# Note: Network operations typically require sudo privileges
sudo docker network ls | grep -E "(traefik|wordpress|astro)"

# Create networks if missing
# These networks enable communication between different service stacks
# Note: Network creation requires sudo privileges
sudo docker network create traefik
sudo docker network create wordpress
sudo docker network create astro
```

#### Step 4: Restart Services

```bash
# Start proxy first (Traefik) - handles routing and SSL certificates
# Traefik must be running before other services that depend on it
docker compose -f docker/production/main/proxy/docker-compose.yml up -d

# Wait for proxy to be ready
# This ensures Traefik is fully initialized before starting dependent services
sleep 10

# Start WordPress stack - includes database, Redis, and WordPress application
# The database needs time to initialize and become healthy
docker compose -f docker/production/main/wordpress/docker-compose.yml up -d

# Wait for database to be healthy
# This ensures the database is ready to accept connections
sleep 30

# Start Astro application - the main web application
# Astro can now connect to WordPress API and other services
docker compose -f docker/production/main/astro/docker-compose.yml up -d
```

#### Step 5: Verify Services

```bash
# Check all services are running
# Verify that all containers are in 'Up' status
sudo docker ps

# Check service logs for errors
# The 'logs' command shows recent log output from all services in the stack
docker compose -f docker/production/main/proxy/docker-compose.yml logs
docker compose -f docker/production/main/wordpress/docker-compose.yml logs
docker compose -f docker/production/main/astro/docker-compose.yml logs
```

### Local Development Environment Restart

```bash
# Stop existing services
# Clean shutdown of development stack
docker compose -f docker/local/docker-compose.yml down

# Start services
# Start development environment with hot-reload capabilities
docker compose -f docker/local/docker-compose.yml up -d

# Check status
# Verify development services are running correctly
docker compose -f docker/local/docker-compose.yml ps
```

### Archive Services Restart

```bash
# Stop existing services
# Graceful shutdown of archive services
docker compose -f docker/production/archive/docker-compose.yml down

# Start services
# Restart archive applications if needed
docker compose -f docker/production/archive/docker-compose.yml up -d

# Check status
# Verify archive services are operational
docker compose -f docker/production/archive/docker-compose.yml ps
```

## Docker Daemon Management

### Check and Manage Docker Service

```bash
# Check Docker daemon status
sudo systemctl status docker

# Start Docker daemon if not running
sudo systemctl start docker

# Enable Docker daemon to start on boot
sudo systemctl enable docker

# Stop Docker daemon (use with caution)
sudo systemctl stop docker

# Restart Docker daemon
sudo systemctl restart docker

# Check if user is in docker group (alternative to sudo)
groups $USER | grep docker

## Sudo and Permission Troubleshooting

### Understanding Sudo Requirements

```bash
# Check if user is in docker group (allows Docker commands without sudo)
groups $USER | grep docker

# Add user to docker group (requires logout/login to take effect)
sudo usermod -aG docker $USER

# Check Docker daemon permissions
ls -la /var/run/docker.sock

# Verify sudo access
sudo -l

# Test Docker access without sudo
docker ps

# If permission denied, use sudo
sudo docker ps
```

### Common Permission Issues

```bash
# Error: "Got permission denied while trying to connect to the Docker daemon socket"
# Solution: Use sudo or add user to docker group
sudo docker ps

# Error: "Cannot connect to the Docker daemon"
# Solution: Check if Docker daemon is running
sudo systemctl status docker

# Error: "Permission denied" on volume operations
# Solution: Use sudo for volume management
sudo docker volume ls
```

## Troubleshooting

### Common Issues and Solutions

#### 1. Port Conflicts

```bash
# Check for port conflicts
# This shows which processes are using the required ports
# Note: System-level network operations require sudo
sudo netstat -tulpn | grep -E "(80|443|8080|4321)"

# Kill processes using ports if needed
# Force terminate processes that are blocking required ports
# Note: Process termination always requires sudo privileges
sudo lsof -ti:80 | xargs sudo kill -9
sudo lsof -ti:443 | xargs sudo kill -9
```

#### 2. Network Issues

```bash
# Remove and recreate networks
# This resolves network conflicts and ensures clean network state
# Note: Network management operations require sudo privileges
sudo docker network rm traefik wordpress astro
sudo docker network create traefik
sudo docker network create wordpress
sudo docker network create astro
```

#### 3. Volume Issues

```bash
# Check volume status
# List all Docker volumes to identify potential issues
# Note: Volume operations typically require sudo privileges
sudo docker volume ls

# Clean up unused volumes (be careful!)
# This removes volumes not used by any containers - may delete data
# Note: Volume pruning requires sudo and will permanently delete data
sudo docker volume prune
```

#### 4. Container Stuck in Restart Loop

```bash
# Force remove stuck containers
# The '-f' flag forces removal even if containers are running
# Note: Force removal operations require sudo privileges
sudo docker rm -f $(sudo docker ps -aq)

# Restart Docker daemon
# This resolves daemon-level issues that may cause restart loops
# Note: System service management always requires sudo
sudo systemctl restart docker

# Check Docker daemon logs for errors
# Note: System log access requires sudo privileges
sudo journalctl -u docker.service -f
```

### Service-Specific Troubleshooting

#### WordPress Issues

```bash
# Check WordPress logs
# View recent logs from the WordPress container to identify issues
docker compose -f docker/production/main/wordpress/docker-compose.yml logs wordpress

# Restart WordPress only
# Restart just the WordPress service without affecting other services
docker compose -f docker/production/main/wordpress/docker-compose.yml restart wordpress

# Check database connectivity
# Test direct database connection to verify database health
docker compose -f docker/production/main/wordpress/docker-compose.yml exec db mysql -u root -p
```

#### Astro Issues

```bash
# Check Astro logs
# View recent logs from the Astro container to identify issues
docker compose -f docker/production/main/astro/docker-compose.yml logs astro

# Rebuild Astro container
# The '--no-cache' flag forces a complete rebuild ignoring cached layers
docker compose -f docker/production/main/astro/docker-compose.yml build --no-cache astro
docker compose -f docker/production/main/astro/docker-compose.yml up -d astro
```

#### Traefik Issues

```bash
# Check Traefik logs
# View recent logs from the Traefik container to identify routing issues
docker compose -f docker/production/main/proxy/docker-compose.yml logs traefik

# Restart Traefik
# Restart just the Traefik service without affecting other services
docker compose -f docker/production/main/proxy/docker-compose.yml restart traefik
```

## Monitoring and Health Checks

### Check Service Health

```bash
# Check all container status
# The '--format' flag provides a clean table view of container information
sudo docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# Check service health
# Verify the status of each service stack individually
docker compose -f docker/production/main/proxy/docker-compose.yml ps
docker compose -f docker/production/main/wordpress/docker-compose.yml ps
docker compose -f docker/production/main/astro/docker-compose.yml ps
```

### Monitor Logs

```bash
# Follow logs in real-time
# The '-f' flag follows log output continuously for real-time monitoring
docker compose -f docker/production/main/proxy/docker-compose.yml logs -f
docker compose -f docker/production/main/wordpress/docker-compose.yml logs -f
docker compose -f docker/production/main/astro/docker-compose.yml logs -f
```

## Emergency Procedures

### Complete System Reset

```bash
# Stop all containers
# Force stop all running containers to ensure clean state
sudo docker stop $(sudo docker ps -aq)

# Remove all containers
# Remove all containers (running and stopped) to start fresh
sudo docker rm $(sudo docker ps -aq)

# Remove all networks (except default)
# The '-f' flag forces removal without confirmation
sudo docker network prune -f

# Remove all volumes (use with extreme caution - will delete data)
# Note: Volume pruning requires sudo and permanently deletes all unused volumes
sudo docker volume prune -f

# Restart Docker daemon
# Restart the Docker service to clear any daemon-level issues
sudo systemctl restart docker

# Recreate networks
# Recreate the required networks for service communication
sudo docker network create traefik
sudo docker network create wordpress
sudo docker network create astro

# Restart services in order
# Restart services in dependency order to ensure proper initialization
docker compose -f docker/production/main/proxy/docker-compose.yml up -d
docker compose -f docker/production/main/wordpress/docker-compose.yml up -d
docker compose -f docker/production/main/astro/docker-compose.yml up -d
```

### Data Backup Before Restart

```bash
# Backup WordPress data
# Create a compressed backup of WordPress files and uploads
# Uses a temporary Alpine container to access the volume
# Note: Volume access operations typically require sudo privileges
sudo docker run --rm -v wordpress_wp_data:/data -v $(pwd):/backup alpine tar czf /backup/wordpress_backup_$(date +%Y%m%d_%H%M%S).tar.gz -C /data .

# Backup database
# Create a SQL dump of the WordPress database
# The timestamp ensures unique backup filenames
docker compose -f docker/production/main/wordpress/docker-compose.yml exec db mysqldump -u root -p wordpress > backup_$(date +%Y%m%d_%H%M%S).sql
```

## Environment Variables

Ensure these environment variables are set before restarting:

### Production Environment

- `COMPOSE_PROJECT_NAME`
- `NGINX_HOST`
- `NGINX_PATHPREFIX`
- `DB_NAME`, `DB_USER`, `DB_PASS`
- `LE_EMAIL`
- `PUBLIC_API`, `PUBLIC_INTERNAL_API`

### Local Environment

- `PUBLIC_API`
- `PUBLIC_INTERNAL_API`

---

**Note**: Always test restart procedures in a staging environment before applying to production. Keep backups of critical data before performing any restart operations.

**Sudo Security Notes:**

- **Use `sudo` sparingly** - only when necessary for system operations
- **Be cautious with destructive commands** - especially `docker volume prune` and `docker rm -f`
- **Test commands without `sudo` first** - add `sudo` only if permission denied
- **Keep track of sudo usage** - consider using `sudo -l` to check your privileges
- **Consider adding user to docker group** - for non-system Docker operations
