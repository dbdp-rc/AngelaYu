// localhost:3000
const { json } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
    // res.send("Server is running.");
});

app.post("/", function(req,res){

    // console.log(req.body.cityName);
    // console.log("Post request recieved.");

        
    const apiKey = "1f33494dabaaf1ddb2d56a018a1f2df4";
    // const query = " Kolkata";
    const query = req.body.cityName;
    const url ="https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=metric";

    // https.get("https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=1f33494dabaaf1ddb2d56a018a1f2df4&units=metric", function(){});
    // https.get("https://api.openweathermap.org/data/2.5/weatheer?q=Kolkata&appid=1f33494dabaaf1ddb2d56a018a1f2df4&units=metric", function(){});-- Typo error(weatheer) results in 404 as status code(resource not found). 
    // https.get("https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=xxx1f33494dabaaf1ddb2d56a018a1f2df4&units=metric", function(){});--Typo error (api ID) results in 401 (unauthorized http request).

    https.get(url, function(response){
        // console.log(response.statusCode);
        console.log(response);

        response.on("data", function(data){

            // console.log(data); --data is in hexadecimal format
            const weatherData = JSON.parse(data); 
            console.log(weatherData);

            // const object ={
            //     name: "Debdeep",
            //     favouriteFood: "Biriyani"
            // }
            // console.log(JSON.stringify(object));

            const temp = weatherData.main.temp; //Use JSON viewer awsome chrome extension to get the right path of object element 
            console.log(temp);

            const weatherDescription = weatherData.weather[0].description; 
            console.log(weatherDescription);
            res.write("<h1>The temperature in "+ query +" is " + temp + " degree Celcius</h1>");
            res.write("<p>The weather is currently " + weatherDescription + "<p>");

            const icon = weatherData.weather[0].icon;
            const iconUrl ="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write('<img src="'+iconUrl+'">');
        
            res.send();

        });
    });

});






app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});