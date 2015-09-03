// server.js

//get the tools we need
var express = require("express");
var app = express();

//====Configuration==========
app.use(express.static(__dirname+"/public"));

app.set("view engine", 'ejs');

//===Routes==================
app.get("/", function(req, res){
  res.render('index.ejs');
});


//===start things up==========
var port = process.env.PORT||8080;
app.listen(8080);
console.log("Things go down on port #"+port);