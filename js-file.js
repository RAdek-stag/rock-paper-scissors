const btn1 = document.querySelector('#btn1');


const myNumber = Math.random()


function getComputerChoice() {
  
  if (myNumber < 0.33) return "rock";
  else if (myNumber >= 0.33 && myNumber < 0.66) return "paper";
  else return "scissors";

  {
Math.random();
  }

}

const rock = "rock"

function playRoundRock(rock, computerSelection) {
    
  if (rock === computerSelection) return "draw";
  else if (rock && computerSelection === "paper") return "rock is papered";
  else return "rock does scissors";

{
  getComputerChoice();
}

}
 
const computerSelection = getComputerChoice();

console.log(playRoundRock(rock, computerSelection));



btn1.onclick = () => alert(playRoundRock(rock, computerSelection));

