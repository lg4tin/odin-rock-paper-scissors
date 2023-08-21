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
        return `You tied! You both picked ${playerSelection}`;
    } else {
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                console.log(computerSelection);
                yourScore++;
                return 'You win! Rock beats scissors!';
            } else {
                console.log(computerSelection);
                computerScore++;
                return 'You lose! Paper beats rock!';
            }
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                console.log(computerSelection);
                yourScore++;
                return 'You win! Scissors beats paper!';
            } else {
                console.log(computerSelection);
                computerScore++;
                return 'You lose! Rock beats scissors!';
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                console.log(computerSelection);
                yourScore++;
                return 'You win! Paper beats rock!';
            } else {
                console.log(computerSelection);
                computerScore++;
                return 'You lose! Scissors beats paper!';
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

const buttons = document.querySelectorAll('button');
const rock = document.querySelector('.rock');

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        playRound(btn.innerText, getComputerChoice());
    })
})

