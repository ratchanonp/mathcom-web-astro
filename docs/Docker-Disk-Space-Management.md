# Docker Disk Space Management Guide

## Ubuntu 20.04 - Docker CLI

This guide provides step-by-step instructions for checking disk free space and cleaning up Docker cache to resolve issues with build image cache and image layer accumulation.

## Table of Contents

1. [Checking Disk Space](#checking-disk-space)
2. [Understanding Docker Storage](#understanding-docker-storage)
3. [Docker System Prune Commands](#docker-system-prune-commands)
4. [Monitoring Commands](#monitoring-commands)

## Checking Disk Space

### 1. Check Overall Disk Usage

```bash
# Check disk space usage
df -h

# Check disk space usage for specific directory (e.g., /var/lib/docker)
df -h /var/lib/docker
```

### 2. Check Docker Storage Usage

```bash
# Check Docker system disk usage
docker system df

# Detailed breakdown of Docker disk usage
docker system df -v
```

### 3. Check Docker Root Directory

```bash
# Find Docker root directory
docker info | grep "Docker Root Dir"

# Check size of Docker root directory
du -sh $(docker info | grep "Docker Root Dir" | awk '{print $4}')
```

## Understanding Docker Storage

### Docker Storage Components

- **Images**: Built or pulled Docker images
- **Containers**: Running and stopped containers
- **Volumes**: Named volumes created by Docker
- **Build Cache**: Intermediate layers from image builds
- **Networks**: Docker networks (minimal space usage)

### Common Storage Locations

- **Default**: `/var/lib/docker`
- **Custom**: Check `docker info` for "Docker Root Dir"

## Docker System Prune Commands

### 1. Basic System Prune

```bash
# Remove all unused containers, networks, images (both dangling and unreferenced)
docker system prune -a

# Remove only dangling resources (not tagged images)
docker system prune
```

### 2. Selective Pruning

#### Remove Only Containers

```bash
# Remove all stopped containers
docker container prune

# Remove all containers (including running ones) - USE WITH CAUTION
docker container prune -f
```

#### Remove Only Images

```bash
# Remove all dangling images
docker image prune

# Remove all unused images
docker image prune -a

# Remove images older than 24 hours
docker image prune -a --filter "until=24h"
```

#### Remove Only Volumes

```bash
# Remove all unused volumes
docker volume prune

# Remove all volumes (including those in use) - USE WITH CAUTION
docker volume prune -f
```

#### Remove Only Networks

```bash
# Remove all unused networks
docker network prune
```

### 3. Build Cache Cleanup

```bash
# Remove build cache
docker builder prune

# Remove all build cache
docker builder prune -a

# Remove build cache older than 24 hours
docker builder prune --filter "until=24h"
```

## Monitoring Commands

### Regular Health Checks

```bash
# Check disk space
df -h

# Check Docker usage
docker system df

# Check for large files in Docker directory
find /var/lib/docker -type f -size +100M -exec ls -lh {} \;

# Check overlay2 usage
du -sh /var/lib/docker/overlay2/*
```

---

**Note**: Always backup important data before performing aggressive cleanup operations. The `-f` flag forces removal without confirmation, so use it carefully.

**Important**: Some commands may require `sudo` privileges, especially when accessing system directories like `/var/lib/docker`. If you encounter permission errors, try adding `sudo` before the command.

**Last Updated**: $(date)
**Target System**: Ubuntu 20.04 with Docker CLI
