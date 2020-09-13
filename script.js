function computerPlay() {
  nr = Math.ceil(Math.random() * 3);
  if (nr == 1)
    return "rock";
  else if (nr == 2)
    return "paper";
  else
    return "scissors"
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();

  if (player != "rock" && player != "paper" && player != "scissors")
    return "Invalid choice, please choose between rock, paper and scissors."


  if (player == computerSelection)
    return "Both chose " + player + ". It's a tie!"
  else if ((player == "rock" && computerSelection == "scissors")
    || (player == "scissors" && computerSelection == "paper")
    || (player == "paper" && computerSelection == "rock"))
    return "You win! " + player + " beats " + computerSelection;
  else
    return "You lose! " + computerSelection + " beats " + player;
}

function game() {
  for (i = 0; i < 5; i++) {
    input = prompt("Type rock, paper or scissors (round " + (+i + 1) + "/5).")
    console.log(playRound(input, computerPlay()));
  }
}