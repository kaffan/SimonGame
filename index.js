var level = 0;
var arr = [];
var temp = [];
var i=0;
var flag = 0;
$(document).on("keydown",function(e)
{
  var obj = e.key;

  if(obj==='a')
  {
    //flag = 1;
    level = 0;
    i = 0;
    arr = [];
     GameStart();
  }
  else if(flag===0)
  {
    //flag = 1;
    GameOver();
  }
});
function GameStart()
{
    if(level!==0){
    setTimeout(function(){
      level++;
      $("h1").text("Level "+level);
      RandomSound(arr);
    },1000);
  }
  else{
    level++;
    $("h1").text("Level "+level);
    RandomSound(arr);
  }
    //console.log(level);
}
function GameOver()
{
  $("h1").text("Game over, press A to restart the game.");
  var aud = new Audio("sounds/wrong.mp3");
  aud.play();
  setTimeout(function(){$("body").css("backgroundColor","#351f39");},200);
  $("body").css("backgroundColor","red");

}
function RandomSound(arr)
{
  var no = Math.floor(Math.random()*4);
  if(no===0)
  {
    setTimeout(function(){
      $(".box1").css("opacity","1");
    },200);
    $(".box1").css("opacity","0");
    var aud = new Audio("sounds/green.mp3");
    aud.play();
  }
  else if(no===1)
  {
    setTimeout(function(){
      $(".box2").css("opacity","1");
    },200);
    $(".box2").css("opacity","0");
    var aud = new Audio("sounds/yellow.mp3");
    aud.play();
  }
  else if(no===2)
  {
    setTimeout(function(){
      $(".box3").css("opacity","1");
    },200);
    $(".box3").css("opacity","0");
    var aud = new Audio("sounds/blue.mp3");
    aud.play();
  }
  else if(no===3)
  {
    setTimeout(function(){
      $(".box4").css("opacity","1");
    },200);
    $(".box4").css("opacity","0");
    var aud = new Audio("sounds/red.mp3");
    aud.play();
  }

  console.log(no);
  arr.push(no);
}
function checkAnswer(no)
{
  if(arr.length===0)
  {
    GameOver();
  }
  else if(i===arr.length-1)
  {
    if(no===arr[i])
    {
      i=0;
      GameStart();
    }
    else{
      i=0;
      level = 0;
      GameOver();
    }
  }
  else if(no===arr[i])
  {
    i++;
    //RandomSound(arr);
  }
  else{
    i=0;
    level = 0;
    GameOver();
  }
}
$(".co").on("click",function(e){
  setTimeout(function(){$(e.target).css("box-shadow","8px 8px white");},200);
  $(e.target).css("box-shadow","4px 4px white");
  if($(e.target).hasClass("box1"))
  {
    var aud = new Audio("sounds/green.mp3");
    aud.play();
    checkAnswer(0);
  }
  else if($(e.target).hasClass("box2"))
  {
    var aud = new Audio("sounds/yellow.mp3");
    aud.play();
    checkAnswer(1);
  }
  else if($(e.target).hasClass("box3"))
  {
    var aud = new Audio("sounds/blue.mp3");
    aud.play();
    checkAnswer(2);
  }
  else if($(e.target).hasClass("box4"))
  {
    var aud = new Audio("sounds/red.mp3");
    aud.play();
    checkAnswer(3);
  }

});
