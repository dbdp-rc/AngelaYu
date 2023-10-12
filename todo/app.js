// replacing all var keywords with let. and then to const since they are not changing

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date); //console logs the date module.exports object.

const app = express()

app.set('view engine', 'ejs'); //use app ejs as view engine

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// var item = "";// It over writes the last list item
const items = ["Buy Food","Cook Food","Eat food"];// Thus to store multiple items we create an array
const workItems = [];

app.get("/", function(req, res){
    // res.send("hello");
    // let day = date.getDay();
    const day = date.getDate();
    res.render("list", {
        listTitle: day,  //here kindOfDay is the key used in ejs file and day is the value to changed. LAter kinddOfDay changed to listTitle.
        newListItems: items // newListItem: item // So we add newListItem here in the home route with item. This would overwrite the last item. So we pass the whole array.//newListItems will be an array
        }); 
});
app.post("/", function(req, res){
                                   
        //console.log(req.body);    //output is {newItem:'value',button:'value' } So in list.ejs we have given the button value as the listTitle. So for normal day button have value = 'Tuesday, ' and 
                                    // for workday it woud be 'Work'  
        const item = req.body.newItem;

        if(req.body.list === "Work"){
            workItems.push(item);
            res.redirect("/work");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

        }  
        else{
            items.push(item);
            res.redirect("/");
        }
    
});

//Adding another route
app.get("/work", function(req, res){
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});
app.post("/work", function(req,res){
    let item = req.body.newItem;     //newItem is the name of the input in the list.ejs file
    workItems.push(item);
    res.redirect("/work")
});
// When submit-type button is pressed , the form makes a post rquest to the home route, thus newly created item gets added to the day-wise todolist rather than work-wise one.
//----------------------------------------------------------------------------------------------------------------------------------
app.get("/about", function(req,res){
    res.render("about");
});
//----------------------------------------------------------------------------------------------------------------------------------
app.listen(3000, function(){
    console.log("server started on port 3000.")

});

//======================================================================================XXXXXXXXXXXXXX===========================================================================================
// var day = ""; 
// switch(currentDay){
//         case 0: day = "Sunday";
//                 break;
//         case 1: day ="Monday";
//                 break;
//         case 2: day ="Tuesday";
//                 break;
//         case 3: day ="Wednesday";
//                 break;
//         case 4: day ="Thursday";
//                 break;    
//         case 5: day ="Friday";
//                 break;    
//         case 6: day ="Saturday";
//                 break;
//         default: console.log("Error: Current day is equal to"+ currentDay);
//        }

//---prev versions of / route post---
// console.log(req.body.newItem);
// var item = req.body.newItem; //instead of creating here we create it globally since home route needs to access this
// res.render("list",{newListItem: item}); //Error would be newListItem not defined as when we go to localhost:3000 we land inside the home route i.e. "/" & here no such item is there.    
// item = req.body.newItem; // This will over write the last list item with the new one.

// let item = req.body.newItem;                           
// items.push(item);              
// res.redirect("/"); 