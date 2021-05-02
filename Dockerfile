FROM openjdk:11-jre-slim

ENV TZ=Europe/Berlin
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN adduser --system --group spring
USER spring:spring

COPY build/libs/*.jar /app.jar

EXPOSE 8080
EXPOSE 5005

ENTRYPOINT ["java","-jar","/app.jar"]
