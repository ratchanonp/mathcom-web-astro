#!/bin/bash

docker compose -f docker/template/docker-compose.wordpress.yml --env-file docker/env/main.wordpress.env down
docker compose -f docker/template/docker-compose.wordpress.yml --env-file docker/env/gradmath.wordpress.env down
docker compose -f docker/template/docker-compose.wordpress.yml --env-file docker/env/amcs.wordpress.env down 
docker compose -f docker/template/docker-compose.wordpress.yml --env-file docker/env/csit.wordpress.env down 