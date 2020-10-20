gamePattern=[];

userChosenPattern = [];

level = 1;
count = 0;
var started = false;


buttonColours = ["red","blue","green","yellow"];


function nextSequence(){

    

    randomNumber = (Math.floor(Math.random()*4));
    randomChosenColor = buttonColours[randomNumber];
    $("#level-title").text("Level " + level);

    gamePattern.push(randomChosenColor);

    buttonSelect = $("."+randomChosenColor);
    buttonSelect.fadeOut(100).fadeIn(100);
    audio = new Audio("sounds/" + randomChosenColor + ".mp3" );
    audio.play();
    buttonSelect.removeClass("pressed")
}



function UserSequence(){
    userChosenColor = this.id;
    buttonSelect = $("."+userChosenColor);
    buttonSelect.addClass("pressed")

    setTimeout(function(){ buttonSelect.removeClass("pressed") }, 100);
    
    audio = new Audio("sounds/" + userChosenColor + ".mp3" );
    audio.play();

    userChosenPattern.push(userChosenColor);

    check();


}

function check(){
if(gamePattern[count] == userChosenPattern[count]){
    
    count = count+1;
    
    if(userChosenPattern.length==gamePattern.length){
        level = level+1;
        userChosenPattern = [];
        count = 0;
        nextSequence();
        setTimeout(function(){ $(".btn").removeClass("pressed") }, 100);
        

    }
}

else{
    $("#level-title").text("Game Over");
    started = false;
    level = 1
    userChosenPattern = []
    gamePattern = []
    audio = new Audio("sounds/wrong.mp3" );
    audio.play();
    }
}



$(document).keypress(function() {
    if (!started) {
        
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
}   })

$(document).on("tap",function() {
    if (!started) {
        
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }

})   

$(".btn").click(UserSequence);

$(".btn").on("tap",UserSequence);



