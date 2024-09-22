# PawPaw-Insurance
A full-stack pet insurance application built with ReactJS, Spring Boot and MongoDB

## Build and run
### 1. Include the properties of MongoDB in .env
Create src/main/resources/.env file and type the following in the .env file -
```
MONGO_DATABASE=pawpaw-insurance-db
MONGO_USER=any-user
MONGO_PASSWORD=9q24bUIslbI8dIUN
MONGO_CLUSTER=cluster0.2b08o.mongodb.net
```

### 2. Run the Spring Boot server
You can run the spring boot app by typing the following command -
```
./mvnw spring-boot:run
```
The server will start on port 8080.

### 3. Set up and run the ReactJS app
You can cd into the webui folder and run the app.
Type the following command to install the dependencies and start the application -
```
npm install && npm run dev
```