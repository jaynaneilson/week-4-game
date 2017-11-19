// Play and pause music 

var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "assets/audio/HappySunrise.mp3");

       $(".play-button").on("click", function() {
         audioElement.play();
       });

       $(".pause-button").on("click", function() {
         audioElement.pause();
       });


var winCounter = 0;
var lossCounter = 0;
var addCrystal = 0;

var randomNumber;

function startAndReset(){ //Initialize game with function
  setCrystalValues(); // Crystals will have four new hidden values
  setRandom(); // When game restarts player will see new random number
  addCrystal = 0; //Total # will reset to 0
};

// A game with four crystals displayed as buttons on the page
function setCrystalValues(){
  for (var i = 0; i < 4; i++){

// Game will hide crystal value between 1-12 until player clicks crystal
    var crystalRandom = Math.floor(Math.random() * 11) + 1;
    $(".crystal").eq(i).attr({"data-random": crystalRandom});
  }
}

// Player shown a random number between 19-120 at the start of the game
function setRandom(){
  randomNumber = Math.floor(Math.random() * 101) + 19;
}

// When player clicks on crystal it will increment a specific amount of points
$(".crystal").on('click', function() {

  var crystalNumber = parseInt($(this).attr('data-random'));

// When crystal clicked update score counter
  addCrystal += crystalNumber;
  $('#score').html(addCrystal);
  $("#randomNumber").html(randomNumber);
  $("#winLose").empty();

// If total score is greater than random number increment loss counter by 1
  if(addCrystal > randomNumber){
    lossCounter++;
    $("#winLose").html('<h3>You LOST!</h3><h4>Click a crystal to play again...</h4>');
    $("#losses").html(lossCounter);
    startAndReset();// Game restart after win or loss counter is incremented
  }

// If total score is equal to random number increment win counter by 1
  if(addCrystal === randomNumber){
    winCounter++;
    $("#winLose").html('<h3>You WON!</h3><h4>Click a crystal to play again...</h4>');
    $("#wins").html(winCounter);
    startAndReset();// Game restart after win or loss counter is incremented
  }

});

$(document).ready(function() {
  startAndReset();
  $("#randomNumber").html(randomNumber); // Random # will reset to 0
});