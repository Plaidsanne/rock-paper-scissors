/*
1. Understand;

I need a function that will 
that will randomly return 
Rock, Paper, or Scissors
*/

var result = null;
var rock = "rock",
  paper = "paper",
  scissors = "scissors";
//Math.random() returns a number between 0 (inclusive) and 1 (exclusive),
//so 0 - .9999 https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/
//Math.floor() converts floating point number to integer between 0 and n-1(inclusive)
var randomNum = Math.floor(Math.random() * 3) + 1;

//User Input
function computerPlay() {
  result = randomNum >= 3 ? rock : randomNum >= 2 ? paper : scissors;
  return result;
}
var computerSelection = computerPlay();

function singleRound(computerSelection) {
  var playerSelection = window
    .prompt("Rock, Paper, or Scissors?")
    .toLowerCase();

  // can return a 5 kinds of strings
  //You Lose! (or Win!) Rock beats Scissors, Scissors beat Paper, Paper beats Rock!
  //Draw, play again? no b/c single round
  let p = playerSelection;
  let c = computerSelection;
  if (
    (c === "rock" && p === "scissors") ||
    (c === "scissors" && p === "paper") ||
    (c === "paper" && p === "rock")
  ) {
    alert("You Lose! " + c + " beats " + p);
    return 0;
  } else {
    alert("You Win! " + p + " beats " + c);
    return 1;
  }
}

function game() {
  let sum = 0;
  for (i = 0; i < 5; i++) {
    sum = sum + singleRound(computerSelection);
    console.log(sum);
  }
  let winner = sum >= 3 ? "Player Wins" : "Player Loses";
  alert(winner);
}

game();
