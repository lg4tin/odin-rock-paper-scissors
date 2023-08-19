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

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return console.log(`You tied! You both picked ${playerSelection}`);
    } else {
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                console.log(computerSelection);
                return console.log(`You win! Rock beats scissors!`);
            } else {
                console.log(computerSelection);
                return console.log(`You lose! Paper beats rock!`)
            }
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                console.log(computerSelection);
                return console.log('You win! Scissors beats paper!')
            } else {
                console.log(computerSelection);
                return console.log('You lose! Rock beats scissors!')
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                console.log(computerSelection);
                return console.log('You win! Paper beats rock!')
            } else {
                console.log(computerSelection);
                return console.log('You lose! Scissors beats paper!')
            }
    }
}
}
