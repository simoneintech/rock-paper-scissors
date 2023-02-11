let choices = ["rock", "paper", "scissors"];
let winners = [];

// Start the game
function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }

  // Update the button text after the game is over
  document.querySelector("button").textContent = "Play New Game";

  // Log the final results
  logWins();
}

// Play a single round
function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

// Get the player's choice
function playerChoice() {
  let input = prompt("Type Rock, Paper, or Scissors");

  // Keep asking for input until the player makes a choice
  while (input == null) {
    input = prompt("Type Rock, Paper or Scissors");
  }

  // Convert the input to lowercase
  input = input.toLowerCase();

  // Validate the input
  let check = validateInput(input);
  console.log(input);
  return input;
}

// Get the computer's choice
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Validate the player's input
function validateInput(choice) {
  return choices.includes(choice);
}

// Check the winner of the round
function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

// Log the final results
function logWins() {
  let playerWins = winners.filter((item) => item === "Player").length;
  let computerWins = winners.filter((item) => item === "Computer").length;
  let ties = winners.filter((item) => item === "Tie").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties:", ties);
}

// Log the details of a single round
function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(winner, "Won the Round!");
  console.log("--------------------------");
}

// Start the game
game();
