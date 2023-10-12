const express = require("express");
const app = express() // binding the express module function to an const called app.

app.get("/", function(request, response){       //http://localhost:3000/
    // console.log(request);
    // response.send("HELLO DEBDEEP.");
    response.send("<h1>HELLO DEBDEEP.</h1>");   
});

app.get("/contact", function(req, res){
    res.send("Contact me at : 8240053820");    //http://localhost:3000/contact
});

app.get("/about", function(req, res){           //http://localhost:3000/about
    res.send("This is a test server project by Debdeep.");
});

app.get("/hobbies", function(req,res){          //http://localhost:3000/hobbies
    res.send("My hobby is gaming and reading books and nothing else.");
});

app.listen(3000, function(){
    console.log("Server started on port 3000.")
});