# Vymo Machine Test
A demo Restaurant on boarding application for food delivery system with NodeJS, Express and MongoDB.

## Getting Started

The project includes web application and REST APIs. This project is built with NodeJS for backend, Express is the framework used and MongoDB is the database. For demo, Template engine [EmbeddedJS](https://ejs.co/) is used to render web and rest apis can be tested with [Postman](https://www.postman.com/).

## Prerequisites

* [Node](https://nodejs.org/en/download/) - Download and install 
* [MongoDb Server](https://www.mongodb.com/download-center/community) - Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing mongod.

## Built With

* [ExpressJS](https://expressjs.com/) -  It’s a flexible Node.JS web appplication framework that has many features for web and mobile applications
* [Mongoose](http://mongoosejs.com/) - MongoDB ODM for Node.JS.
* [EmbeddedJS](https://ejs.co/) - Simple templating language that lets us generate HTML markup with plain JavaScript.

## Installation

1. Clone this Git repository
2. Make sure [Node](https://nodejs.org/en/download/) is installed. To check, run `node -v` in cmd/terminal.
3. Make sure [MongoDb Server](https://www.mongodb.com/download-center/community) is installed and running. To check, run `mongo --version` in cmd/terminal and execute `mongod` to start server. If some error occured check path in environment variables.
4. From project directory run `npm install`, It will install all dependencies required.
5. Configure database connection in `database.js` located inside `src/config/..`. If database is not created, create db: run `mongo` >> `use <db_name>`.
6. Set `port`, only if you need to change, Currently running on 4000.
7. Finally, To start run `npm start`.

## Project Structure

- `app.js` - The entry point to our application. This file defines our express server. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration files such as database connections, etc.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.
- `controllers/` - This folder contains controllers which is the logic of how the app handles the incoming requests and outgoing responses.
- `views/` - This folder contains webview pages to render.
- `public/` - This folder contains static files.

## Deployment

Currently cofigured to run it on local machine.

## Demo

Just make sure that your server is still running on the port number 4000.

#### Postman
  * [Postman](https://www.postman.com/) - A popular API client, can be used for testing rest api.
  * Fetch restaurants with:
    * URL: http://localhost:4000/api/restaurants
    * Method: GET
    
    <img src="https://github.com/aliakbar-k8811/vymo-machine-test/blob/master/src/public/screenshots/postman1.png?raw=true" alt="Postman screenshot1" />
    
  * Register a restaurant with:
    * URL: http://localhost:4000/api/restaurants
    * Method: POST
    * Body: raw + JSON (application/json)
    * Body Content: `{
            "name":"ABC Restaurant", 
            "contact_name":"Jon", 
            "pincode":"676301", 
            "location":"Koramangala", 
            "website":"https://www.google.com/", 
            "phone":"9746438811", 
            "avg_daily_trans":"12000"
          }`
          
    <img src="https://github.com/aliakbar-k8811/vymo-machine-test/blob/master/src/public/screenshots/postman2.png?raw=true" alt="Postman screenshot2" />
    

#### Web
  * run (http://localhost:4000/): It will show restaurants list.
    * By clicking on 'JOIN', user can register Restaurant with name, contact name, phone, location, etc and submit.
    
    <img src="https://github.com/aliakbar-k8811/vymo-machine-test/blob/master/src/public/screenshots/web1.png?raw=true" alt="Web screenshot1" />
    
    <img src="https://github.com/aliakbar-k8811/vymo-machine-test/blob/master/src/public/screenshots/web2.png?raw=true" alt="Web screenshot2" />
    
