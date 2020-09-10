let userScore = 0
let computerScore = 0;
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber]
}

function convertToWord(letter) {
  if (letter === "r") {
    return "Rock";
  } else if (letter === "p") {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub()
  const smallCompWord = "comp".fontsize(3).sub()
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 500)
}
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub()
  const smallCompWord = "comp".fontsize(3).sub()
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. Sucker!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 500)
}
function draw(userChoice, computerChoice) {
  // userScore_span.innerHTML = userScore;
  // computerScore_span.innerHTML = computerScore;
  // const smallUserWord = "user".fontsize(3).sub()
  // const smallCompWord = "comp".fontsize(3).sub()
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} = ${convertToWord(computerChoice)}. It's a draw!`;
  userChoice_div.classList.add("grey-glow");
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 500)
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    win(userChoice, computerChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
    lose(userChoice, computerChoice)
    break;
    case "rr":
    case "pp":
    case "ss":
    draw(userChoice, computerChoice);
    break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game("r"))
  paper_div.addEventListener('click', () => game("p"))
  scissors_div.addEventListener('click', () => game("s"))
}
main();