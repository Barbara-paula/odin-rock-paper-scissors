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

function getHumanChoices(){
   let userChoice = prompt("enter rock, paper or scissors")
   return userChoice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
   if (humanChoice == "rock" && computerChoice == "scissor"){
      humanScore = humanScore + 1;
      return "you win! rock beats scissors"
   }else if (humanChoice == "paper" && computerChoice == "scissors"){
      computerScore = computerScore + 1;
      return "you loose! scissors beat paper"
   }else if (humanChoice == "scissors" && computerChoice == "rock"){
      computerScore = computerScore + 1;
      return "you loose! rock beats scissors"
   }else if (humanChoice == "rock" && computerScore == "paper"){
      computerScore = computerScore + 1;
      return "you loose! paper beats rock"
   }else if (humanChoice == "paper" && computerChoice == "rock"){
      humanScore = humanScore + 1;
      return "you win! paper beats rock"
   }else if (humanChoice == "scissors" && computerChoice == "paper"){
      humanScore = humanScore + 1;
      return "you win! scissors beats paper"
   }
}
//console.log (playRound(getHumanChoices(), getComputerChoice()))

//if (playRound.includes("win")){
  // for (humanSource = 0; humanSource <= 5; humanSource++){
    //  console.log(humanSource)
   //}
//}else {
  // for(computerScore = 0; computerScore <=5; computerScore++){
    //  console.log(computerScore)
   //}

//}


   

function playGame(){
  for (let i = 0; i<5; i++) {
   let humanSelection = getHumanChoices()
   let computerSelection = getComputerChoice()
   let result = playRound(humanSelection, computerSelection)
   console.log(`your score is ${humanScore} and computer score is ${computerScore}`)
   console.log(result)
  }
  //let result = playRound(humanSelection, computerSelection)
  //console.log(result)
   //if (humanScore < computerScore){
     // console.log("you loose")
   //}else {
     // console.log("you win")
   //}
}
//let result = playRound(humanSelection, computerSelection)
//console.log(result)
playGame()