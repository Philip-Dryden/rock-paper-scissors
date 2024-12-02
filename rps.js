function getComputerChoice() {
    let choice = null;
    let randomNumber = Math.floor(Math.random()*100)+1;
    //console.log(randomNumber);
    if (randomNumber < 34) {
        choice = "Rock";
    }
    else if (randomNumber >= 34 && randomNumber < 66) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }
    //console.log(choice);
    return choice;
}
function getPlayerChoice() {
    let playerInput = parseInt(prompt("1 for Rock, 2 for Paper, 3 for Scissors!"));
    switch(playerInput) {
        case 1:
            console.log("Rock");
            break;
        case 2:
            console.log("Paper");
            break;
        case 3:
            console.log("Scissors");
            break;
        default:
            console.log("Not a number between 1 and 3!");
    }
}
