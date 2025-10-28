/*
Button to start a 5 round game (func playGame())
Within that, three buttons that start a single round and feed in the player choice. 
A round counter that gets triggered by the end of a round if it is at 5.
Then func gameEnding that will display player and computer scores. 
*/
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");

let resultText = document.getElementById("result").innerHTML = "<h3>SCORE</h3>";

function getComputerChoice(number) {
  if (number < 0.3) {
    return "rock";
  } else if (number < 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
}

function gameEnding(humanScore, computerScore) {
  let finalResults = "";

  if (humanScore === computerScore) {
    return (finalResults =
      "It's a Tie in the end. \nYour score = " +
      humanScore +
      "\nThe computer score = " +
      computerScore);
  } else if (humanScore > computerScore) {
    return (finalResults =
      "You won the game! \nYour score = " +
      humanScore +
      "\nThe computer score = " +
      computerScore);
  } else {
    return (finalResults =
      "You lost the game... \nYour score = " +
      humanScore +
      "\nThe computer score = " +
      computerScore);
  }
}

function playRound(human, computer) {
  let result = "";
  let gameResult = undefined;

  if (human === computer) {
    console.log("1")
    resultText.innerHTML = "<h3>you and the computer made the same choice. \nIt's a tie.</h3>";
    gameResult = undefined;
  } else if (human === "rock" && computer === "paper") {
    console.log("2")
    resultText.innerHTML = "<h3>You chose rock. Computer chose paper. \nYou lost...</h3>";
    gameResult = false;
  } else if (human === "rock" && computer === "scissors") {
    console.log("3")
    resultText.innerHTML = "<h3>You chose rock. Computer chose scissors. \nYou won!</h3>";
    gameResult = true;
  } else if (human === "paper" && computer === "scissors") {
    console.log("4")
    resultText.innerHTML = "<h3>You chose paper. Computer chose scissors. \nYou lost...</h3>";
    gameResult = false;
  } else if (human === "paper" && computer === "rock") {
    console.log("5")
    resultText.innerHTML = "<h3>You chose paper. Computer chose rock. \nYou won!</h3>";
    gameResult = true;
  } else if (human === "scissors" && computer === "rock") {
    console.log("6")
    resultText.innerHTML = "<h3>You chose scissors. Computer chose rock. \nYou lost...</h3>";
    gameResult = false;
  } else if (human === "scissors" && computer === "paper") {
    console.log("7")
    resultText.innerHTML = "<h3>You chose scissors. Computer chose paper. \nYou won!</h3>";
    gameResult = true;
  }

  return gameResult;
  
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  //buttons not working...
  rockBtn.addEventListener("click", function () {
    playRound("rock", getComputerChoice(Math.random()) ? humanScore++ : computerScore++);
  });

  paperBtn.addEventListener("click", function () {
    playRound("paper", getComputerChoice(Math.random()) ? humanScore++ : computerScore++);
  });

  scissorsBtn.addEventListener("click", function () {
    playRound("scissors", getComputerChoice(Math.random()) ? humanScore++ : computerScore++);
  });

  let ending = gameEnding(humanScore, computerScore);

  if (humanScore === 5 || computerScore === 5) {
    ending;
  }
}

playGame();