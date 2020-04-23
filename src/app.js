const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require("cookie-parser");
const session = require("express-session");
var flash = require('express-flash');


// intializations
const app = express();
const database = require('./config/database')

// settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 4000);

// middlewares
const middlewares = [
    express.static(path.join(__dirname, "public")),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cookieParser(),
    session({
      secret: "super-secret-key",
      key: "super-secret-cookie",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 6000 }
    }),
    flash(),
  ];
app.use(middlewares);

// routes
app.use(require('./routes/restaurant.route'));

//Error handlers
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
  });
  
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

// start
app.listen(app.get('port'), () => {
    console.log(`Server is up and running on port numner ${app.get('port')}`);
});