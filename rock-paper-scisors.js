/*
Button to start a 5 round game (func playGame())
Within that, three buttons that start a single round and feed in the player choice. 
A round counter that gets triggered by the end of a round if it is at 5.
Then func gameEnding that will display player and computer scores. 
*/


function getComputerChoice(number) {
    if (number < 0.3) {
        return "rock"
    } else if (number < 0.6) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(human, computer) {
    if (human === computer) {
        console.log("you chose the same, tie!")
       return undefined
    } else if (human === "rock" && computer === "paper") {
        console.log("you chose rock, computer chose paper")
       return false
    } else if (human === "rock" && computer === "scissors") {
        console.log("you chose rock, computer chose scissors")
        return true
    } else if (human === "paper" && computer === "scissors") {
        console.log("you chose rock, computer chose scissors")
        return false
    } else if (human === "paper" && computer === "rock") {
        console.log("you chose paper, computer chose rock")
        return true
    } else if (human === "scissors" && computer === "rock") {
        console.log("you chose scissors, computer chose rock")
       return false
    } else if (human === "scissors" && computer === "paper") {
        console.log("you chose scissors, computer chose paper")
       return true
    }
}

/* play game function to be implemented again later on.
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    //const computerChoice = getComputerChoice(Math.random());

    //const humanChoice = prompt("Choose: rock, paper or scissors").toLowerCase();

    let round = playRound(humanChoice, computerChoice)
        if (round === true) {
        console.log("You won!")
        humanScore++
    } else if (round === false) {
        console.log("You lost...")
        computerScore++
    } else {
        console.log("it's a tie.")
    }

    function gameEnding(humanScore, computerScore) {
        let results = ""

        if (humanScore === computerScore) {
            return results = "It's a Tie in the end. \nYour score = " + humanScore + "\nThe computer score = " + computerScore
        } else if (humanScore > computerScore) {
            return results = "You won the game! \nYour score = " + humanScore + "\nThe computer score = " + computerScore
        } else {
            return results = "You lost the game... \nYour score = " + humanScore + "\nThe computer score = " + computerScore
        }
    }

    let ending = gameEnding(humanScore, computerScore)

    return ending
}
    */

//let game = playGame()

//console.log(game)

let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener("click", function() { playRound(
    "rock", 
    getComputerChoice(Math.random())    
); });

paperBtn.addEventListener("click", function() { playRound(
    "paper", 
    getComputerChoice(Math.random())    
); });

scissorsBtn.addEventListener("click", function() { playRound(
    "scissors", 
    getComputerChoice(Math.random())    
); });