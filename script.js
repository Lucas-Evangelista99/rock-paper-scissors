function computerPlay() {
    const POSSIBLE_PLAYS = ["Rock", "Paper", "Scissors"];
    const randomPlay = POSSIBLE_PLAYS[Math.floor(Math.random() * POSSIBLE_PLAYS.length)];
    return randomPlay;
}

