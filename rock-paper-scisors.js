/*
A score counter that gets triggered by the end of a round if human or computer score is at 5.
Then func gameEnding that will display player and computer scores. 
*/
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let startBtn = document.getElementById("start");
let resultText = document.getElementById("result");

startBtn.addEventListener("click", () => {
  playGame();
});

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

  resultText.innerHTML = `<h3> ${finalResults}, Start a New game</h3>`;
}

function playRound(human, computer) {
  let gameResult = undefined;

  if (human === computer) {
    resultText.innerHTML =
      "<h3>You and the computer made the same choice. \nIt's a tie.</h3>";
    gameResult = undefined;
  } else if (human === "rock" && computer === "paper") {
    resultText.innerHTML =
      "<h3>You chose rock. Computer chose paper. \nYou lost...</h3>";
    gameResult = false;
  } else if (human === "rock" && computer === "scissors") {
    resultText.innerHTML =
      "<h3>You chose rock. Computer chose scissors. \nYou won!</h3>";
    gameResult = true;
  } else if (human === "paper" && computer === "scissors") {
    resultText.innerHTML =
      "<h3>You chose paper. Computer chose scissors. \nYou lost...</h3>";
    gameResult = false;
  } else if (human === "paper" && computer === "rock") {
    resultText.innerHTML =
      "<h3>You chose paper. Computer chose rock. \nYou won!</h3>";
    gameResult = true;
  } else if (human === "scissors" && computer === "rock") {
    resultText.innerHTML =
      "<h3>You chose scissors. Computer chose rock. \nYou lost...</h3>";
    gameResult = false;
  } else if (human === "scissors" && computer === "paper") {
    resultText.innerHTML =
      "<h3>You chose scissors. Computer chose paper. \nYou won!</h3>";
    gameResult = true;
  }

  return gameResult;
}

function playGame() {
  resultText.innerHTML = "<h3>Make your choice: Rock, Paper or Scissors.</h3>";
  let humanScore = 0;
  let computerScore = 0;

  rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice(Math.random()))
      ? humanScore++
      : computerScore++;
  });

  paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice(Math.random()))
      ? humanScore++
      : computerScore++;
  });

  scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice(Math.random()))
      ? humanScore++
      : computerScore++;
  });

  if (humanScore === 5 || computerScore === 5) {
    gameEnding(humanScore, computerScore);
  }
}
