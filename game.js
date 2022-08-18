var buttons=["green","red","yellow","blue"];
var gamePattern=[];
var userClickedPattern=[];

var started=false;
var level=0;

$(document).keypress(function(){
    if(!started){
    $("#level-title").text("Level"+level);
    nextSequence();
    started=true;}
})

$(".btn").click(function(){
var btn2=$(this).attr("id");
userClickedPattern.push(btn2);
animate(btn2);
playSound(btn2);
checkAnswer(userClickedPattern.length-1);
})
function checkAnswer(currentLevel){
if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
    console.log("success");
if(gamePattern.length==userClickedPattern.length){
   setTimeout(function(){
nextSequence();
   },1000)
}}
else{
    console.log("wrong");
    playSound("wrong");
    $("#level-title").text("Game over , Start again");
    startOver();
}
}

function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animate(name){
    $("#"+name).addClass("click");
    setTimeout(() => {
    $("#"+name).removeClass("click");
 }, 1000);
}

function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level"+level);
  var randomNumber = Math.floor(Math.random()*4);
  gamePattern.push(buttons[randomNumber]);
 
  var btn=buttons[randomNumber];
  animate(btn);
  playSound(btn);
}

function startOver(){
   
    started=false;
    level=0;
    gamePattern=[];
}





