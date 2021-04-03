/*
1. Understand;

I need a function that will 
that will randomly return 
Rock, Paper, or Scissors
*/

var result = null;
var rock = "Rock",
  paper = "Paper",
  scissors = "Scissors";
//Math.random() returns a number between 0 (inclusive) and 1 (exclusive),
//so 0 - .9999 https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/
//Math.floor() converts floating point number to integer between 0 and n-1(inclusive)
var randomNum = Math.floor(Math.random() * 3) + 1;

//User Input
var playerSelection = window.prompt("Rock, Paper, or Scissors?").toLowerCase();

console.log(randomNum);
function computerPlay() {
  result = randomNum >= 3 ? rock : randomNum >= 2 ? paper : scissors;
  return console.log(result);
}

var computerSelection = computerPlay();

function singleRound(playerSelection, computerSelection) {
  // can return a 4 kinds of strings
  //You Lose! (or Win!) Rock beats Scissors, Scissors beat Paper, Paper beats Rock!
}
