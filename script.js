function getComputerChoice(){
    let compChoice = Math.floor(Math.random()* 3)
     let choice;
     if (compChoice === 0){
        return "rock"
     }else if(compChoice === 1){
        return "paper"
     }else {
        return "scissors"
     }
}

//function working(){
   //let userChoice = prompt("enter rock, paper or scissors")
   //if (userChoice === null) return null
   //return userChoice.toLowerCase().trim()
   
//}
//working()

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rockBtn")
const paperBtn = document.querySelector("#paperBtn")
const scissorsBtn = document.querySelector("#scissorsBtn")

rockBtn.addEventListener("click", () => {
      let result = playRound("rock", getComputerChoice())
      let resultEl = document.querySelector("#result")
      let scoreEl = document.querySelector("#score")
      resultEl.textContent = result
      scoreEl.textContent = `You: ${humanScore} — Computer: ${computerScore}`
   })
paperBtn.addEventListener("click", () => {
   let result = playRound("paper", getComputerChoice())
   let resultEl = document.querySelector('#result')
   let scoreEl = document.querySelector('#score')
   resultEl.textContent = result
   scoreEl.textContent = `You: ${humanScore} — Computer: ${computerScore}`
   })
scissorsBtn.addEventListener("click", () => {
   let result = playRound("scissors", getComputerChoice())
   let resultEl = document.querySelector('#result')
   let scoreEl = document.querySelector('#score')
   resultEl.textContent = result
   scoreEl.textContent = `You: ${humanScore} — Computer: ${computerScore}`
   })

function playRound(humanChoice, computerChoice){
   if (humanChoice == "rock" && computerChoice == "scissors"){
      humanScore = humanScore + 1;
      return "you win! rock beats scissors"
   }else if (humanChoice == "paper" && computerChoice == "scissors"){
      computerScore = computerScore + 1;
      return "you loose! scissors beat paper"
   }else if (humanChoice == "scissors" && computerChoice == "rock"){
      computerScore = computerScore + 1;
      return "you loose! rock beats scissors"
   }else if (humanChoice == "rock" && computerChoice == "paper"){
      computerScore = computerScore + 1;
      return "you loose! paper beats rock"
   }else if (humanChoice == "paper" && computerChoice == "rock"){
      humanScore = humanScore + 1;
      return "you win! paper beats rock"
   }else if (humanChoice == "scissors" && computerChoice == "paper"){
      humanScore = humanScore + 1;
      return "you win! scissors beats paper"
   }
   // tie or invalid input
   if (humanChoice === computerChoice) {
      return "It's a tie!"
   }
   return "Invalid input — please enter rock, paper, or scissors"
}

//function playGame(){
  // let humanSelection = getHumanChoices()
   //let computerSelection = getComputerChoice()
   //let result = playRound(humanSelection, computerSelection)
   //console.log(`your score is ${humanScore} and computer score is ${computerScore}`)
   //console.log(result)
  
//}



//playGame()