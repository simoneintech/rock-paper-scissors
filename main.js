//this will play the game
//play five rounds
//console based

const choices = ["rock", "paper", "scissors"];
let winners = [];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  document.querySelector("button").textContent = "Play New Game";
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

//get input from the player

function playerChoice() {
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper or Scissors");
  }
}

// this allows no input to show up if mispelled
// a word, or wrote anything in the input prompt

input = input.toLowerCase();
let check = validateInput(input);
if (check == true) {
  console.log(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper, or Scissors. Spelling needs to be exact, but captilization doesn't matter"
    );
    while (input == null) {
      input = input.toLowerCase();
      check = validateInput(input);
    }
    return input;
  }
}
//get random input from the comp

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  } else {
    return false;
  }
}

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

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((items) => item == "Ties").length;
  console.log("Results:");
  console.log("Player Wins", playerWins);
  console.log("Computer Wins", computerWins);
  console.log("Tie", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(winner, "Won the Round!");
  console.log("--------------------------");
}
