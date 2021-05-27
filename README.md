# mangement

## to run this you need docker compose and docker in your machine 
### first step to run this project is to type 

> docker-compose build
 
### second is to run the docker container

> docker-compose up


### and the end task is to restart the nginx service

> docker exec -it bd31698535ba  service nginx restart

## the bd31698535ba is the container ID after running docker-compose up

## you can see the container ID with

> docker ps
