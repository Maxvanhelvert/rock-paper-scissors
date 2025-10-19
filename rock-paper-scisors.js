
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
       return undefined
    } else if (human === "rock" && computer === "paper") {
       return false
    } else if (human === "rock" && computer === "scissors") {
        return true
    } else if (human === "paper" && computer === "scissors") {
        return false
    } else if (human === "paper" && computer === "rock") {
        return true
    } else if (human === "scissors" && computer === "rock") {
       return false
    } else if (human === "scissors" && computer === "paper") {
       return true
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    
    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice(Math.random());

        const humanChoice = prompt("Choose: rock, paper or scissors").toLowerCase();

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

let game = playGame()

console.log(game)