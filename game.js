var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var gameStarted = false;


$(document).keydown(function () {
    if (gameStarted === false) {
          nextSequence();
          $("#level-title").text("Level "+level)
          gameStarted = true;
}});

//track clicks and store in array "userClickedPattern"

$(".btn").click(function () {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer (userClickedPattern.length - 1);

//$("." + userChosenColour).fadeOut(100).fadeIn(100);
});


//check user inputs


function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      var wrongSound = new Audio("sounds/wrong.mp3");
      wrongSound.play();

$("body").addClass("game-over")

setTimeout (function () {
$("body").removeClass("game-over");
}, 200);

$("#level-title").text("Game Over, Press Any Key to Restart!");

      console.log("wrong");

startOver();
    }

}



function startOver () {
  level = [];
  gamePattern = [];
  gameStarted = false;
}

//random colours and store in array "GamePattern"

function nextSequence() {

userClickedPattern = [];
  level++;

  $("#level-title").text("Level " + level);

var randomNumber =  Math.floor(Math.random()*4);

var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

//highlight button that is chosen randomly
$("." + randomChosenColour).fadeOut(100).fadeIn(100);

//playSound(randomChosenColour);
};


//highlight pressed buttons

function animatePress(currentColor) {

    $("." + currentColor).addClass("pressed");

setTimeout (function () {
  $("." + currentColor).removeClass("pressed");
}, 100);

};

//play sounds

function playSound(name) {

  switch (name) {
    case "green":

    var greenSound = new Audio("sounds/" + name + ".mp3");
    greenSound.play();

      break;

      case "red":

      var redSound = new Audio("sounds/" + name + ".mp3");
      redSound.play();

        break;

        case "yellow":

        var yellowSound = new Audio("sounds/" + name + ".mp3");
        yellowSound.play();

          break;
          case "blue":

          var blueSound = new Audio("sounds/" + name + ".mp3");
          blueSound.play();

            break;

default:
console.log(name)

}};
