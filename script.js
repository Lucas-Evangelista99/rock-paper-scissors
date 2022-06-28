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

function game() {
    console.log("Rock, Paper, Scissors! First to score 5 wins!");
    let player = 0;
    let computer = 0;
    let rounds = 1;
    
    while (true) {
        console.log("Round " + rounds.toString() + ":");
        let roundResult = playRound(prompt("Rock, Paper or Scissors? Enter your play:"), computerPlay());
        if (roundResult.includes("You Win!")) {
            console.log(roundResult);
            player ++;
            rounds ++;
        } else if (roundResult.includes("You Lose!")) {
            console.log(roundResult);
            computer ++;
            rounds ++;
        } else if (roundResult.includes("Tie!")) {
            console.log(roundResult);
            rounds ++;
        }
        console.log("player: " + player.toString() + " " + "X" + " " + "computer: " + computer.toString());
        if (player == 5 || computer == 5) {
            break;
        }
    }

    if (player > computer) {
        console.log("Congratulations! You Win!");
    } else {
        console.log("Too bad! You Lose!"); 
    }
}
