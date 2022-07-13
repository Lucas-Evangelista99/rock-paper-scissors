function computerPlay() {
    const POSSIBLE_PLAYS = ["Rock", "Paper", "Scissors"];
    const randomPlay = POSSIBLE_PLAYS[Math.floor(Math.random() * POSSIBLE_PLAYS.length)];
    return randomPlay;
};

function playRound(playerSelection, computerSelection) {
    let result = "";
    
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
           let strPlay = "Tie!";
           result += strPlay;
        } else if (computerSelection === "Paper") {
            let strPlay = "You Lose!" + " " + computerSelection + " beats" + " " + playerSelection;
            result += strPlay;
        } else if (computerSelection === "Scissors") {
            let strPlay = "You Win!" + " " + playerSelection + " beats" + " " + computerSelection;
            result += strPlay;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            let strPlay = "You Win!" + " " + playerSelection + " beats" + " " + computerSelection;
            result += strPlay;
        } else if (computerSelection === "Paper") {
            let strPlay = "Tie!";
            result += strPlay;
        } else if (computerSelection === "Scissors") {
            let strPlay = "You Lose!" + " " + computerSelection + " beats" + " " + playerSelection;
            result += strPlay;
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            let strPlay = "You Lose!" + " " + computerSelection + " beats" + " " + playerSelection;
            result += strPlay;
        } else if (computerSelection === "Paper") {
            let strPlay = "You Win!" + " " + playerSelection + " beats" + " " + computerSelection;
            result += strPlay;
        } else if (computerSelection === "Scissors") {
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
    if (winner.includes("You Win!")) {
        let playerInt = parseInt(playerScore.textContent);
        playerInt ++;
        playerScore.textContent = playerInt.toString();
        roundWinner.textContent = winner;
    } else if (winner.includes("You Lose!")) {
        let computerInt = parseInt(computerScore.textContent);
        computerInt ++;
        computerScore.textContent =computerInt.toString();
        roundWinner.textContent = winner;
    } else {
        roundWinner.textContent = winner;
    }
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        clickButton(buttons[i].className)
    })
};
