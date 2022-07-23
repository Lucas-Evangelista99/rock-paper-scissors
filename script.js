function computerPlay() {
    const POSSIBLE_PLAYS = ["rock", "paper", "scissors"];
    const randomPlay = POSSIBLE_PLAYS[Math.floor(Math.random() * POSSIBLE_PLAYS.length)];
    return randomPlay;
};

function playRound(playerSelection, computerSelection) {
    let result = "";
    
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
           let strPlay = "Tie!";
           result += strPlay;
        } else if (computerSelection === "paper") {
            let strPlay = "You lose this round!" + " " + computerSelection + " beats" + " " + playerSelection;
            result += strPlay;
        } else if (computerSelection === "scissors") {
            let strPlay = "You win this round!" + " " + playerSelection + " beats" + " " + computerSelection;
            result += strPlay;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            let strPlay = "You win this round!" + " " + playerSelection + " beats" + " " + computerSelection;
            result += strPlay;
        } else if (computerSelection === "paper") {
            let strPlay = "Tie!";
            result += strPlay;
        } else if (computerSelection === "scissors") {
            let strPlay = "You lose this round!" + " " + computerSelection + " beats" + " " + playerSelection;
            result += strPlay;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            let strPlay = "You lose this round!" + " " + computerSelection + " beats" + " " + playerSelection;
            result += strPlay;
        } else if (computerSelection === "paper") {
            let strPlay = "You win this round!" + " " + playerSelection + " beats" + " " + computerSelection;
            result += strPlay;
        } else if (computerSelection === "scissors") {
            let strPlay = "Tie!";
            result += strPlay;
        }
    }

    return result;
};

let buttons = document.getElementsByTagName("button");
let roundWinner = document.getElementById("result");
let playerScore = document.getElementById("player").children[1];
let computerScore = document.getElementById("computer").children[1];

function clickButton(element) {
    let winner = playRound(element, computerPlay());
    let playerInt = parseInt(playerScore.textContent);
    let computerInt = parseInt(computerScore.textContent);
    if (winner.includes("You win this round!")) {
        playerInt ++;
        if (playerInt == 5) {
            playerInt = 0;
            computerInt = 0;
            playerScore.textContent = playerInt.toString();
            computerScore.textContent = computerInt.toString();
            roundWinner.textContent = "Congratulations! You won the game! Wanna play again?";
        }
        else { 
            playerScore.textContent = playerInt.toString();
            roundWinner.textContent = winner;
        }
    } else if (winner.includes("You lose this round!")) {
        computerInt ++;
        if (computerInt == 5) {
            playerInt = 0;
            computerInt = 0;
            playerScore.textContent = playerInt.toString();
            computerScore.textContent = computerInt.toString();
            roundWinner.textContent = "Too bad! You lost the game! How about trying again?";
        }
        else { 
            computerScore.textContent = computerInt.toString();
            roundWinner.textContent = winner;
        }
    } else {
        roundWinner.textContent = winner;
    }
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        clickButton(buttons[i].className)
    })
};
