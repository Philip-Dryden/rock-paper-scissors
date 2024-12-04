

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    console.log(playerChoice);
    playerChoice = playerChoice.toUpperCase();
    console.log(playerChoice);
    return playerChoice;
    }

function getComputerChoice() {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log("Draw!");
        console.log(playerChoice, computerChoice);
        return "Draw";
    }

    else if( 
        (playerChoice == "ROCK"     && computerChoice == "SCISSORS")    ||
        (playerChoice == "PAPER"    && computerChoice == "ROCK")        ||
        (playerChoice == "SCISSORS" && computerChoice == "PAPER")       
    ) {
        console.log("Player wins! "+playerChoice+" beats "+computerChoice+" !");
        return "Player";
    }
    else {
        console.log("Computer wins! "+computerChoice+" beats "+playerChoice+" !");
        return "Computer";
    }

    
}

function playGame() {
    let computerScore = 0;
    let playerScore   = 0;

    for(i = 1; i <= 5; ++i) {
        const playerChoice   = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log("playerChoice = "+playerChoice);
        console.log("computerChoice = "+computerChoice);
        let winner = playRound(playerChoice, computerChoice);

        if (winner === "Player") {
            ++playerScore;
        }
        else if (winner === "Computer") {
        ++computerScore;
        }
    }

    console.log("Player scored "+playerScore+" points!");
    console.log("Computer: scored "+computerScore+" points!");
    if(playerScore == computerScore) {
        console.log("Draw!");
    }
    else if(playerScore > computerScore) {
        console.log("Player wins!");
    }
    else {
        console.log("Computer wins!");
    }
    
}

playGame();