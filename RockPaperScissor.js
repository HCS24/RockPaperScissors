function getComputerChoice() {
    /randomly return variable Rock Paper Scissors/
    let game = ["Rock", "Paper", "Scissors"];
    const result = game[Math.floor(Math.random() * game.length)]; console.log(result);
    return result;
}
/* 1. Player inputs selection
   2. computer makes selection
   3. we compare the playerSelection to computerSelection
   4. declare winner of game */

function loadGame(playerSelection, computerSelection) {
           
            if (playerSelection === "Rock" && computerSelection === "Scissors") {
            return "YOU WIN! ROCK BEATS SCISSORS";
        }
            else if (playerSelection === "Rock" && computerSelection === "Paper") {
            return "YOU LOSE, PAPER BEATS ROCK!";
        }

            else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "YOU LOSE! ROCK BEATS SCISSORS";
        }

            else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "YOU WIN, SCISSORS CUTS PAPER!";
        }

            else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            return "YOU LOSE! SCISSORS BEATS PAPER";
        }
            else if (playerSelection === "Paper" && computerSelection === "Rock") {
            return "YOU WIN, PAPER BEATS ROCK!";
        }

            else if (playerSelection === "Rock" && computerSelection === "Rock" || 
                playerSelection === "Paper" && computerSelection === "Paper" ||
                playerSelection === "Scissors" && computerSelection === "Scissors")  {
            return "IT'S A DRAW!"; 
        }

            else {
            return "Invalid Selection!";
        }
}   

const playerSelection = prompt("Please choose Rock, Paper or Scissors!");
const computerSelection = getComputerChoice();



console.log(loadGame(playerSelection, computerSelection));


