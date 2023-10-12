var buttonColors = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var started = false;

$(document).on("keypress",function(){
    if (!started){
        $("level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").on("click",function handleClick(){
    // alert("Hello");
    var userChosenColor = $(this).attr("id");
    // console.log(userChosenColor);
    userClickedPattern.push(userChosenColor);

    animatePress(userChosenColor); 
    playSound(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel){

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        // console.log("Success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game over, Press any key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        startOver();
    }

}

function nextSequence(){
    userClickedPattern = [];
    level += 1;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.round(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);   
    console.log(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeIn(100);
    playSound(randomChosenColor);
}


function playSound(name){
    var sound = new Audio("sound/"+name+".mp3");
    sound.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}


function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
