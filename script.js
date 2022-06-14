function computerPlay() {
    const POSSIBLE_PLAYS = ["Rock", "Paper", "Scissors"];
    const randomPlay = POSSIBLE_PLAYS[Math.floor(Math.random() * POSSIBLE_PLAYS.length)];
    return randomPlay;
};

function playRound (playerSelection, computerSelection) {
    let lower = playerSelection.toLowerCase();
    const str = lower.charAt(0).toUpperCase() + lower.slice(1);
    let result = "";
    
    if (str === "Rock") {
        if (computerSelection === "Rock") {
           let strPlay = "Tie!";
           result += strPlay;
        } else if (computerSelection === "Paper") {
            let strPlay = "You Lose!" + " " + computerSelection + " beats" + " " + str;
            result += strPlay;
        } else if (computerSelection === "Scissors") {
            let strPlay = "You Win!" + " " + str + " beats" + " " + computerSelection;
            result += strPlay;
        }
    } else if (str === "Paper") {
        if (computerSelection === "Rock") {
            let strPlay = "You Win!" + " " + str + " beats" + " " + computerSelection;
            result += strPlay;
        } else if (computerSelection === "Paper") {
            let strPlay = "Tie!";
            result += strPlay;
        } else if (computerSelection === "Scissors") {
            let strPlay = "You Lose!" + " " + computerSelection + " beats" + " " + str;
            result += strPlay;
        }
    } else if (str === "Scissors") {
        if (computerSelection === "Rock") {
            let strPlay = "You Lose!" + " " + computerSelection + " beats" + " " + str;
            result += strPlay;
        } else if (computerSelection === "Paper") {
            let strPlay = "You Win!" + " " + str + " beats" + " " + computerSelection;
            result += strPlay;
        } else if (computerSelection === "Scissors") {
            let strPlay = "Tie!";
            result += strPlay;
        }
    }

    return result;
};
