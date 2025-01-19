// Rock === 0
// Paper === 1
// Scissors === 2

function getComputerChoice() {
    let min = 0; // inclusive
    let max = 3; // exclusive
    return Math.floor(Math.random() * (max - min) + min);
}

function playGame() {

    let result = document.querySelector("#result");
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            result.textContent += "Tie ";
        } else if (humanChoice === 0 && computerChoice === 1) {
            result.textContent += "Computer "
            computerScore++;
        } else if (humanChoice === 1 && computerChoice === 2) {
            result.textContent += "Computer "
            computerScore++;
        } else if (humanChoice === 2 && computerChoice === 0) {
            result.textContent += "Computer "
            computerScore++;
        } else if (humanChoice === 0 && computerChoice === 2) {
            result.textContent += "Human "
            humanScore++;
        } else if (humanChoice === 1 && computerChoice === 0) {
            result.textContent += "Human "
            humanScore++;
        } else if (humanChoice === 2 && computerChoice === 1) {
            result.textContent += "Human "
            humanScore++;
        }
    }

    function alertIfGameIsOver() {
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore === 5) {
                result.textContent += "Human won!";
                humanScore = 0;
                computerScore = 0;
            } else {
                result.textContent += "Computer won! :-(";
                computerScore = 0;
                humanScore = 0;
            }
        }
    }

    let humanScore = 0;
    let computerScore = 0;


    let computerSelection = getComputerChoice();

    const rockButton = document.querySelector("#rock_button");
    rockButton.addEventListener("click", () => {
        playRound(0, computerSelection);
        computerSelection = getComputerChoice();
        alertIfGameIsOver();
    });

    const paperButton = document.querySelector("#paper_button");
    paperButton.addEventListener("click", () => {
        playRound(1, computerSelection);
        computerSelection = getComputerChoice();
        alertIfGameIsOver();
    });

    const scissorsButton = document.querySelector("#scissors_button");
    scissorsButton.addEventListener("click", () => {
        playRound(2, computerSelection);
        computerSelection = getComputerChoice();
        alertIfGameIsOver();
    });
}

playGame();