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
const PORT = process.env.PORT || 8000;

//Connect Express URL body parsing middleware function 
app.use(express.urlencoded({ extended: true }));

//Connect Express JSON middleware function to parse requests with JSON payloads
app.use(express.JSON());

//Connect Express static middleware to server static file
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
}

//Connect routes 
app.use(routes);

//Open MongoDB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/bookware",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

//Start the server listening and accepting connections on port defined
app.listen(PORT, () =>
    console.log("Server listening on port ${PORT}")
);






