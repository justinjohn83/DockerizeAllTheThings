FROM openjdk:8-jdk-alpine

ENV projectName api-gateway
#Output of ./gradlew clean installDist
COPY build/install/$projectName /$projectName
WORKDIR /$projectName

EXPOSE 8080

ENTRYPOINT ["bin/api-gateway"]
