TAG=DEV_1.0

REGISTRY=nexus.andromeda.com:8082

docker stop andromeda
docker rm andromeda
docker rmi -f $(docker images | grep andromeda | awk "{print \$3}")
docker rmi -f $(docker images | grep "<none>" | awk "{print \$3}")

docker build -t $REGISTRY/andromeda:$TAG .
