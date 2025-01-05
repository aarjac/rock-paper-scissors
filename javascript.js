/*
Step 1 - getComputerChoice function
get random number between 0 and 3
if 0 computer returns rock
if 1 computer returns paper
if 2 computer returns scissors

Step 2 -getHumanChoice function
Prompt user input of selection, rock, paper, or scissors
if user input is rock, paper, or scissors continue
else prompt the user for valid selection
Return user input

Step 3 - playRound function
Compare humanChoice and computerChoice
if humanChoice is rock
    if computerChoice is rock "It's a draw"
    if computerCHoice is paper "You Lose", computerScore++
    if computerChoice is scissors "You win", humanScore++
if humanChoice is paper
    if computerChoice is rock "You win", humanScore++
    if computerCHoice is paper "It's a draw" 
    if computerChoice is scissors "You Lose", computerScore++
if humanChoice is scissors
    if computerChoice is rock "You Lose", computer Score++
    if computerCHoice is paper "You Win", humanScore++
    if computerChoice is scissors "It's a draw"

Step 4 -playGame function
For 5 rounds
Get humanChoice
Get computerChoice
Set humanSelection equal to humanChoice
Set computerSelection equal to computerChoice
Call playRound function
Keep track of humanScore
Keep track of computerScore
Return both scores each round
Compare humanScore to computerScore
Determine winner, who has highest score
Return winner

*/

let humanScore=0;
let computerScore=0;



function getComputerChoice() {
    
    let choiceRandomizer=Math.round(Math.random()*3, 0);
    let computerChoice;
    
    if(choiceRandomizer===0) {
        computerChoice="Rock";
    } else if(choiceRandomizer===1) {
        computerChoice="Paper";
    } else {
        computerChoice="Scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    
    let humanChoice=prompt("Type your selection to begin. Rock, Paper, or Scissors: ");
    let getProperInput=true;
    
    while(getProperInput) {

        humanChoice=humanChoice.toLowerCase();
        let firstLetter=humanChoice.charAt(0);
        firstLetter=firstLetter.toUpperCase();
        let restOfChoice=humanChoice.slice(1);
        humanChoice=firstLetter+restOfChoice;

        if(humanChoice==="Rock"||humanChoice==="Paper"||humanChoice==="Scissors") {
            return humanChoice;
            getProperInput=false;
        } else {
            humanChoice=prompt("You did not enter a valid option. Please try again. Type Rock, Paper, or Scissors to get your selection: ");
        } 
    }
}

function playRound(humanChoice, computerChoice) {
    
    
    if(humanChoice==="Rock") {
       if(computerChoice==="Rock") {
        console.log("You both chose Rock. It's a draw.")
       } else if(computerChoice==="Paper") {
        console.log("You lose. Paper beats Rock.")
        computerScore++; 
       } else if(computerChoice==="Scissors") {
        console.log("You Win! Rock beats Scissors.")
        humanScore++;
       }
    } else if(humanChoice==="Paper") {
        if(computerChoice==="Rock") {
         console.log("You Win! Paper beats Rock")
         humanScore++;
        } else if(computerChoice==="Paper") {
         console.log("You both chose Paper. It's a draw")
        } else if(computerChoice==="Scissors") {
         console.log("You Lose. Scissors beats Paper.")
         computerScore++;
        }
    } else if(humanChoice==="Scissors") {
        if(computerChoice==="Rock") {
            console.log("You Lose. Rock beats Scissors.")
            computerScore++;
           } else if(computerChoice==="Paper") {
            console.log("You win! Scissors beats Paper.")
            humanScore++
           } else if(computerChoice==="Scissors") {
            console.log("You both chose Scissors. It's a draw.")
           }
    }

}

function playGame() {  
    
    for(i=0; i<5; i++) {

        alert("Round "+(i+1));
        console.log("Round "+(i+1))

        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice(); 
        
        console.log("You chose "+humanSelection+".")
        console.log("Your opponent chose "+computerSelection+".")

        playRound(humanSelection, computerSelection);

        console.log("The score is...\n"+"You: "+humanScore+"\nOpponent: "+computerScore)

    }

     if(humanScore>computerScore) {
        console.log("Final Score...\n"+"You: "+humanScore+"\nOpponent: "+computerScore+"\nYou are the Winner!!")
     } else if(humanScore<computerScore) {
        console.log("Final Score...\n"+"You: "+humanScore+"\nOpponent: "+computerScore+"\nSorry you lost the game.")
     } else if(humanScore===computerScore) {
        console.log("Final Score...\n"+"You: "+humanScore+"\nOpponent: "+computerScore+"\nThe game is a draw.")
     }
}