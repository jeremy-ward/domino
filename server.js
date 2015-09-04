// server.js

//get the tools we need
var express = require("express");
var app = express();
var morgan=require("morgan");

require("./app/routes.js")(app);

//====Configuration==========
app.use(express.static(__dirname+"/public")); //set public directory
app.use(morgan('dev'));  //log every request to the console

app.set("view engine", 'ejs');


//===start things up==========
var port = process.env.PORT||8080;
app.listen(port);
console.log("Things go down on port "+port);