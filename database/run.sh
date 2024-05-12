#!/usr/bin/env bash

TAG=DEV_1.0
DOCKER_REGISTRY=nexus.andromeda.com:8082
CONTAINER_NAME=andromeda

docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME

docker run -d --name $CONTAINER_NAME -p 5555:5432 --restart always $DOCKER_REGISTRY/$CONTAINER_NAME:$TAG;

sleep 20

export PGPASSWORD=postgres

export PGCLIENTENCODING=UTF8

for file in INITIAL_LOAD/*.sql; do
   psql -h localhost -U postgres  -p 5555 -d andromeda -a -f "$file"
done