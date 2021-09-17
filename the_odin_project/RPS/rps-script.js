let tie = 0;  //global variables to keep score
let win = 0;
let lose = 0;

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
    playerSelection = capitalizeFirstLetter(playerSelection); //Converts to Titlecase so prompt isnt case sensitive
    console.log(playerSelection);   // For debugging purposes
    console.log(computerSelection); // For debugging purposes
    if (playerSelection === computerSelection) { 
        console.log('Tie game. Try again');
        return tie++;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        console.log('You lose! Paper beats Rock');
        return lose++;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log('You win! Rock beats Scissors');
        return win++;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log('You lose! Rock beats Scissors');
        return lose++;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log('You win! Scissors beats Paper');
        return win++;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        console.log('You lose! Scissors beats Paper');
        return lose++;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log('You win! Paper beats Rock');
        return win++;
    } else {
        console.log('Whats going on here'); //Error message I guess
    }
    return
}

//function to titlecase for pSel parameter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

function game() {
    win = 0;
    lose = 0;
    /*let playerScore = 0;    //possibly unnecessary score counter
    let computerScore = 0;*/
    for (let i = 0; i < 5; i++) { //loop game 5 rounds
        playRound(prompt('Enter rock paper or scissors'), computerPlay());
            /*if (playRound === 1) {                    //possibly unnecessary if else score counter
                playerScore = playerScore + 1;
            } else if (playRound === 2) {
                computerScore = computerScore + 1;
            }
            console.log(playerScore);
            console.log(computerScore);*/
            console.log(win);
            console.log(lose);

        
    }
    if (win === lose) {
        console.log('Looks like its a tie!');
    } else if (win > lose) {
        console.log('Congratulations, you win!');
    } else if (lose > win) {
        console.log('Oh no, you lose!');
    } else {
        console.log('Not another bug...');
    }
}