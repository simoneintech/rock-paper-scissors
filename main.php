<!DOCTYPE html>
<html>

<head>
    <script>
    let choices = ["rock", "paper", "scissors"];
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
        if (playerSelection === null) {
            return;
        }
        const computerSelection = computerChoice();
        const winner = checkWinner(playerSelection, computerSelection);
        winners.push(winner);
        logRound(playerSelection, computerSelection, winner, round);
    }

    function playerChoice() {
        let input = prompt("Type Rock, Paper, or Scissors");
        if (input == null) {
            return null;
        }
        input = input.toLowerCase();
        let check = validateInput(input);
        console.log(input);
        return input;
    }

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
        console
    }