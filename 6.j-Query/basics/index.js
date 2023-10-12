// $(document).ready(function() // if the script tag is in the head section, a call back fuction is used to
// {                            // do the required work when the the document is loaded or ready and so 
//     alert("Hello");          // .ready method is used to avoid error
//     $("h1").css("color","red");
// });
// alert("Hello");          
// $("h1").css("color","red");
// $(".btn").css("font-size","3rem");
$("h1").addClass("big-title margin-50");
$("h1").text("Bye");
$("button").html("<b>click");

setTimeout( function(){
    $("a").attr("href","https://www.yahoo.com");
    $("a").text("Yahoo");
},
1000);

// $("h1").click(function(){
//     $("h1").css("color","red");
// });

// $("button").click(function(){ //adds eventlistener to all the buttons
//     $("h1").css("color","red");
// });
// $("input").keypress(function(event){
//     console.log(event.key);
// });
$(document).keypress(function(event){
    $("h1").text(event.key);
});
// $("h1").on("click",function(){
//     $("h1").css("color","blue");
// });
// $("h1").after("<button>baal</button>");
// $("h1").before("<button>baal</button>");
// $("h1").append("<button>baal</button>");
// $("h1").prepend("<button>baal</button>");

// $("h1").hide();
// $("h1").show();
// $("h1").toggle();
// $("h1").fadeOut();
// $("h1").fadeIn();
// $("h1").fadeToggle();'
// $("h1").slideUp();
// $("h1").slideDown();
// $("h1").slideToggle();
// $("h1").animate({opacity:0.5});
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5}).animate({margin:"1rem"}); 
});