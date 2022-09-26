const userInput = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    /randomly return variable Rock Paper Scissors/
    const result = userInput[Math.floor(Math.random() * userInput.length)]; 
    console.log(result);
    return result;
    
}
/* 1. Player inputs selection
   2. computer makes selection
   3. we compare the playerSelection to computerSelection
   4. declare winner of game */

function playRound(userInput, computerInput) {
    var playerSelection = prompt("Please choose Rock, Paper or Scissors!").toLowerCase();
    var computerSelection = getComputerChoice(); 
         userInput = playerSelection.toLowerCase();
         computerInput = computerSelection.toLowerCase();
        if(userInput == "rock" && computerInput == "scissors") {
            return "You Win!"; }
        else if(userInput == "scissors" && computerSelection == "paper") {
            return "You Win!";
        }
        else if(userInput == "paper" && computerInput == "rock") {
            return "You Win!"
        }
        else if(userInput == computerInput) {
            return "It's a Draw!"
        }
        else {
            return "You Lose!"
        }
}   


function game(e) {
   /* 1. Run game five times and get a different result without restarting page 
      2.  */
      e.preventDefault(); 
      for(var times = 1; times < 6; times++) {
            console.log(times);
            var result = console.log(playRound(e));
            result;   
        };
    }
var result = document.getElementById('result');
var gameTime = document.addEventListener('click', game);

//when click button game should run producing a result to be displayed under game time 

//function runGame(e) {
   // var result = document.getElementById('result');
 //  var gameResult = result.innerHTML = game(e);


