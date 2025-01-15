// Rock === 0
// Paper === 1
// Scissors === 2

function getComputerChoice() {
    let min = 0; // inclusive
    let max = 3; // exclusive
    return Math.floor(Math.random() * (max - min) + min);
}

function getHumanChoice() {
    let choiceString = prompt("Rock, Paper, or Scissors?");
    let choice;

    if (!choiceString) {
        alert("Invalid input. Please try again");
        return getHumanChoice(); // retry if input is null or empty
    }

    switch (choiceString.toLowerCase()) {
        case "rock":
            choice = 0;
            break;
        case "paper":
            choice = 1;
            break;
        case "scissors":
            choice = 2;
            break;
        default:
            alert("Invalid choice. Please choose rock, paper, or scissors.");
            return getHumanChoice(); // retry on invalid input
    }
    return choice;
}

function playGame() {
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("There was a tie!");
        } else if (humanChoice === 0 && computerChoice === 1) {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if (humanChoice === 1 && computerChoice === 2) {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        } else if (humanChoice === 2 && computerChoice === 0) {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else if (humanChoice === 0 && computerChoice === 2) {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } else if (humanChoice === 1 && computerChoice === 0) {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } else if (humanChoice === 2 && computerChoice === 1) {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    while (humanScore < 5 && computerScore < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore === 5) {
        console.log("You won!");
    } else {
        console.log("Computer won :-(");
    }

}

playGame();