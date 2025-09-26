FROM amazoncorretto:21-alpine
ARG JAR_FILE=*.jar
COPY ${JAR_FILE} application.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "application.jar"]