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