//Assign dotenv and and invoke config method to assign credentials from .env to environment variables for security
require("dotenv").config();

//Assign Express server framework   
const express = require("express");

//Assign mongoose to define and open mongo database connection 
const mongoose = require("mongoose");

//Assign routes
const routes = require("./routes");

//Invoke Express
const app = express();

//Define PORT server will listen on
// const PORT = 3001;
const PORT = process.env.PORT || 3001;

//Connect Express URL body parsing middleware function 
app.use(express.urlencoded({ extended: true }));

//Connect Express JSON middleware function to parse requests with JSON payloads
app.use(express.json());

//Connect Express static middleware to server static file
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
}

//Connect routes 

 
var cors = require('cors');

 

// Then use it before your routes are set up:
app.use(cors());
app.use(routes);

app.all('/', function(req, res, next) {
  req.setRequestHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next()
  });  

app.get("*", (req, res) => {
  req.setRequestHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });




 

//Open MongoDB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/bookware",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);



 


//Start the server listening and accepting connections on port defined
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });






