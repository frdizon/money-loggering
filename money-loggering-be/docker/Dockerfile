FROM amazoncorretto:21
ARG JAR_FILE=*.jar
COPY ${JAR_FILE} application.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "application.jar"]