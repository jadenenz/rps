// Function that returns rock paper or scissors for the computer

/* Computer generates a number between 1 and 3


If number is 1 rock
Else if number is 2 paper
Else if number is 3 scissors
*/

function getRandomInt(min, max) { //generates random # between values
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  

function computerPlay() {  //makes the computer's choice of RPS
   let choice = getRandomInt(1, 4);
   let computerSelection;

    if (choice === 1) {
        computerSelection = 'Rock';
    } else if (choice === 2) {
        computerSelection = 'Paper';

    } else {
        computerSelection = 'Scissors';
    }
    return computerSelection;
}

/* Function that plays one round of RPS.
Takes two parameters playerSelection and computerSelection

Compares the two selections

If playerSelection and computerSelection are the same its a tie and
user is prompted again.

If pSel = rock and cSel = paper,  player loses
if pSel = rock and cSel = scissors, player wins
if pSel = scissors and cSel = rock, player loses
if pSel = scissors and cSel = paper, player wins
if pSel = paper and cSel = scissors, player loses
if pSel = paper and cSel = rock, player wins */

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log('Tie game. Try again');
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        console.log('You lose! Paper beats Rock');
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log('You win! Rock beats Scissors');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log('You lose! Rock beats Scissors');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log('You win! Scissors beats Paper');
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        console.log('You lose! Scissors beats Paper');
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log('You win! Paper beats Rock');
    } else {
        console.log('Whats going on here');
    }
    return
    }