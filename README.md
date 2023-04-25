# my-project
node with typescript - Basic docker setup

# How to start application with docker:

1. ```docker build --tag my-project .```
Start the container and expose port 8000 to port 8000 on the host.
2. ```  docker run --publish 8080:8080 my-project ``` OR ```docker run -d -p 8080:8080 my-project```

For more details visit : https://docs.docker.com/language/nodejs/build-images/

# start application on local:
1. ```npm install```
2. ```npm run build```
3. ```npm run start```



