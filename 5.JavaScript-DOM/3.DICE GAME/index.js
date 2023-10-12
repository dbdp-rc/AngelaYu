// alert("working");
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random no between 0 and 1 not including 1 and then multiplying with 6 to get a no. betwen 1-5,then +1 to get 1-6
var randomDiceImage = "dice" + randomNumber1 +".png";  //string => dice(1-6).png
var randomImageSource = "images/"+ randomDiceImage;    //string => images/dice(1-6).png 
var image1 = document.querySelectorAll("img")[0];      // the image element is selected
image1.setAttribute("src",randomImageSource);          //attribute of the element is changed

var randomNumber2 = Math.floor(Math.random() *6) +1 ; // Why not then multiply with 7 and not adding 1 ? to avoid the number 0 . 
console.log(randomDiceImage2)
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🥇Player1 wins..";
}
else if ( randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "..Player2 wins🥇";
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}