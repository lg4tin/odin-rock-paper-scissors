const buttons = document.querySelectorAll('button');
const rock = document.querySelector('.rock');
const results =document.querySelector('.results');
const displayComputerScore = document.querySelector('.comp-score');
const displayYourScore = document.querySelector('.your-score');
const winLose = document.querySelector('.win-lose');


function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'scissors';
    } else {
        return 'paper';
    }
}

/* if tie, let user know it was a tie and which item tied
if not a tie, figure out if win/loss and with which items
*/

let yourScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        results.innerText = `You tied! You both picked ${playerSelection}`;
    } else {
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                computerSelection;
                yourScore++;
                results.innerText = 'You win! Rock beats scissors!';
            } else {
                computerSelection;
                computerScore++;
                results.innerText = 'You lose! Paper beats rock!';
            }
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                computerSelection;
                yourScore++;
                results.innerText = 'You win! Scissors beats paper!';
            } else {
                computerSelection;
                computerScore++;
                results.innerText = 'You lose! Rock beats scissors!';
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                computerSelection;
                yourScore++;
                results.innerText = 'You win! Paper beats rock!';
            } else {
                computerSelection;
                computerScore++;
                results.innerText = 'You lose! Scissors beats paper!';
            }
    }
}
}

function game() {

    yourScore = 0;
    computerScore = 0;


    let yourMove = prompt('Rock, paper, or scissors?');
    console.log('You picked ' + yourMove)
    console.log(playRound(yourMove, getComputerChoice()));
    

    if (yourScore > computerScore) {
        alert(`YOU WIN! ${yourScore} - ${computerScore}`);
    } else if (yourScore < computerScore) {
        alert(`YOU LOSE! ${computerScore} - ${yourScore}`);
    } else {
        alert(`TIE! ${yourScore} - ${computerScore}`);
    }
    
}

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        playRound(btn.innerText, getComputerChoice());
        displayYourScore.innerText = `Your score is ${yourScore}`;
        displayComputerScore.innerText = `The computer's score is ${computerScore}`;
        checkForWin();
    })
})

function checkForWin() {
    if (yourScore === 5) {
        winLose.style.color = 'blue';
        winLose.innerText = 'Congrats you won!'
        setTimeout(() => {
            reset();
          }, 3000);
    } else if (computerScore === 5) {
        winLose.style.color = 'red';
        winLose.innerText = 'Too bad, you lose!'
        setTimeout(() => {
            reset();
          }, 3000);
    }
}

function reset() {
    yourScore = 0;
    computerScore = 0;
    displayYourScore.innerText = `Your score is ${yourScore}`;
    displayComputerScore.innerText = `The computer's score is ${computerScore}`;
    winLose.textContent = 'Whoever is first to 5 wins!';
    results.textContent = 'Results: ?';
}
