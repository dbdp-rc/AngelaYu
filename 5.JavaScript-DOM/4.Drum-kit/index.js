// Detecting button press

var drum = document.querySelectorAll(".drum");
for(var i = 0;i<drum.length;i++){

    drum[i].addEventListener("click", function handleClick()// the for loop attaches an event listener to each of the elements w,a,s,d..
        {                                                   // when clicked, event listener gets triggered and call the function                                                  
            // console.log(this.innerHTML); 
            // this.style.color = "white";
            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
        }
    ); 
}
// Detecting key pressed
document.addEventListener("keypress", function(event)
    {
        // console.log(event.key); //event is event that triggered the event listener,key is the property which gives which key is pressed
        var buttonPressed = event.key;
        makeSound(buttonPressed);
        buttonAnimation(buttonPressed);
    }
);

// Making sound
function makeSound(key){
    switch (key){

        case "w" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
             
        break;

        case "a" :
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
        break;

        case "s" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "d" :
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l" :
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        default: 
            console.log(key);
               
    }
}
function buttonAnimation(currentKey){

    var activeButton =  document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function()
        {
        activeButton.classList.remove("pressed");
        } ,
        100);
}

// alert("hello");

// document.querySelector("button").addEventListener("click", handleClick); //here handleClick is a method but there is no () , why is that? 
// function handleClick(){     // if () would have been there , the browser will directly call the function, and no eventlistening task would be performed
//     alert("Clicked");
// }
// var drum = document.querySelectorAll(".drum");
// for(var i = 0;i<drum.length;i++){
//     drum[i].addEventListener("click", function handleClick(){      //anonymous function
//         alert("Clicked"); 
//     }); 
// }
// var drum = document.querySelectorAll(".drum");
// for(var i = 0;i<drum.length;i++){
//     drum[i].addEventListener("click", function handleClick(){      //anonymous function
//        var audio = new Audio("sounds/tom-1.mp3");
//        audio.play();
//     }); 
// }