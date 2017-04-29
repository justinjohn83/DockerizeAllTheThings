# Dockerize All The Things
Example code for Chicago Code Camp 2017 Session "Dockerize All the Things"
[Presentation Link](dockerizeAllTheThings.pptx)

## Getting Started
#### 1) Install Docker
<ul>
   <li> Mac: https://docs.docker.com/docker-for-mac/ </li>
   <li>Windows: https://docs.docker.com/docker-for-windows/ </li>
   <li>Linux: Use your package manager i.e. apt-get, yum https://docs.docker.com/engine/installation/ </li>
</ul>

#### 2) Java application set up
 Install JDK 8 <br/> http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

#### 3) Install Visual Studio
##### Mac
https://www.microsoft.com/net/core#macos
<ol>
<li>Install Visual Studio Code </li>
<li> Install C# Extension in VS </li>
<li> Install Homebrew </li>
<li> Update openssl <br/>
     ```brew install --force openssl```<br/>
     ```PATH=/usr/local/opt/openssl/bin:$PATH```
</ol>

#### 4) Install Node.js


#### 5) Build it
   ``` ./build.sh ```

#### Run Docker containers
``` docker-compose up ```

## Useful debugging Commands
 #### Inspect Running Container
  ``` docker exec -i -t <containerName> sh ```
 #### Inspect failed container or docker build
  ``` docker run -i -t --entrypoint /bin/sh <image> ```
 #### Determine route from inside container to Docker host
  ``` /sbin/ip route|awk '/default/ { print $3 }' ```
 #### Cleaning up untagged images locally
   ```docker rmi $(docker images -q -f dangling=true) ```

## Manually building and tagging a container
Within project directory containing Dockerfile:
```
docker build -t food-service .   
```
## Manual running the containers using Docker Command
```
docker run -d --name portal -p 9001:80 portal
docker run -d --name product-service -p 5000:80 products-service
docker run -d --name api-gateway -p 10000:8080 -e 'host_ip=172.17.0.1' api-gateway
docker run -d --name food-service -p 3000:3000 food-service
```

## Running SQL Server in Docker Container

```
docker run -d  --name ms-db -p 1433:1433 -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=runningdockercontainersisawesome123!' microsoft/mssql-server-linux
```
