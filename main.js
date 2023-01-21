const choices = ["rock","paper","scissors"]

function game() {
  //this will play the game
  //play five rounds
  //console based
}

function playRound() {
  const playerSelection = 
}

function playerChoice() {
    //get input from the player
    let input = prompt('Type Rock, Paper, or Scissors');
    while (input == null) {
        input = prompt('Type Rock, Paper or Scissors')
    }
    input = input.toLowerCase();
    console.log(input);
}

function computerChoice() {
    //get random input from the comp
    return choices[Math.floor(Math.random()*choices.length)]
}
