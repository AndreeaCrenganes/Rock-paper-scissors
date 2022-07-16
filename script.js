

let choices

function computerPlay () {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if ( randomNumber === 1) {
      return choices = "rock" 
    }
    if ( randomNumber === 2) {
        return choices = "paper" 
        }
    if ( randomNumber === 3) {
        return choices = "scissors" 
        }

}

    
function playRound(playerSelection, computerSelection) {
   
    if(playerSelection === computerSelection) 
        return( "Oh! It's a tie" );

    if(playerSelection === "rock" && computerSelection === "paper")   
        return("You lose! Paper beats rock!");
    
    if(playerSelection === "rock" && computerSelection === "scissors")   
        return("You win! Rock beats scissors!"); 
        
    if(playerSelection === "paper" && computerSelection === "rock")   
        return("You lose! Rock beats paper!");
        
    if(playerSelection === "paper" && computerSelection === "scissors")   
        return("You lose! Scissors beats paper!");

    if(playerSelection === "scissors" && computerSelection === "paper")   
        return("You win! Scissors beats paper!");

    if(playerSelection === "scissors" && computerSelection === "rock")   
        return("You lose! Rock beats scissors!");
   
}


function game() {
    userScore = 0, computerScore = 0; 
    for (let i = 0; i < 5; i++) { 
        let playerSelection = prompt("Enter your choice: "); 
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection)); 
    }
    console.log(scores()); 
}

function scores () { 
    if (userScore > computerScore) {
        return ("User won!\nUser scored: " + userScore + " and computer scored: " + computerScore);
    } else if (userScore < computerScore){
        return ("Computer Won!\nUser scored: " + userScore + " and computer scored: " + computerScore);
    } else if (userScore == computerScore) {
        return ("It is a tie User: " + userScore + " : Computer: " + computerScore)
    }
} 



