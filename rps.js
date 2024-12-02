

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
        console.log("Unentschieden!");
        console.log(playerChoice, computerChoice);
        return "Gleichstand";
    }

    else if( 
        (playerChoice == "ROCK"     && computerChoice == "SCISSORS")    ||
        (playerChoice == "PAPER"    && computerChoice == "ROCK")        ||
        (playerChoice == "SCISSORS" && computerChoice == "PAPER")       
    ) {
        console.log("Spieler gewinnt! "+playerChoice+" schlaegt "+computerChoice+" !");
        return "Player";
    }
    else {
        console.log("Computer gewinnt! "+computerChoice+" schlaegt "+playerChoice+" !");
        return "Computer";
    }

    
}

function playGame() {
    let computerScore = 0;
    let playerScore   = 0;

    for(i = 1; i <= 5; ++i) {
        const playerSelection   = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log("playerSelection = "+playerSelection);
        console.log("computerSelection = "+computerSelection);
        let winner = playRound(playerSelection, computerSelection);

        if (winner === "Player") {
            ++playerScore;
        }
        else if (winner === "Computer") {
        ++computerScore;
        }
    }

    console.log("Hier sind die Punkte!");
    console.log("Spieler: "+playerScore+" Punkte!");
    console.log("Computer: "+computerScore+" Punkte!");
    console.log("Der Gewinner ist: ");
    if(playerScore > computerScore) {
        console.log("Spieler!");
    }
    else {
        console.log("Computer!");
    }
}

playGame();