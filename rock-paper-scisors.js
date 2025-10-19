
function getComputerChoice(number) {
    if (number < 0.3) {
        return "rock"
    } else if (number < 0.6) {
        return "paper"
    } else {
        return "scissors"
    }
}

let computerChoice = getComputerChoice(Math.random());

let humanChoice = prompt("Choose: rock, paper or scissors");

let humanScore = 0;
let computerScore = 0;

function playRound(human, computer) {
    if (human === computer) {
        return "it's a tie. You both chose " + human
    } else if (human === "rock" && computer === "paper") {
        return "You lost... The computer chose " + computer
    } else if (human === "rock" && computer === "scissors") {
        return "You win! The computer chose " + computer
    } else if (human === "paper" && computer === "scissors") {
        return "You lost... The computer chose " + computer
    } else if (human === "paper" && computer === "rock") {
        return "You win! The computer chose " + computer
    } else if (human === "scissors" && computer === "rock") {
        return "You lost... The computer chose " + computer
    } else if (human === "scissors" && computer === "paper") {
        return "You win! The computer chose " + computer
    }
}

let result = playRound(humanChoice, computerChoice)

console.log(result)