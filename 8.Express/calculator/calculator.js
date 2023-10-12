// http://localhost:3000/

const express = require("express");
const app  = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true})); //extended true to post nested objects

app.get("/", function(req, res){
    // res.send("Hello world");
    res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req, res){
    // console.log(req.body); //parse the http request and access the form the data in text and print
    // console.log(req.body.num1);
    var n1 = Number(req.body.num1) ; //num1 is the name attribute in index.html
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    res.send("The Result of the addition is: "+ result +"   Thanks");
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname +"/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var result = weight/(height*height);
    res.send("Your BMI is :" + result ); 
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
    console.log(__dirname);
});