let userScore = 0, computerScore = 0;
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

    if(playerSelection === "rock" && computerSelection === "paper")  { 
        computerScore++;
        return("You lose! Paper beats rock!");
        
    }
    
    if(playerSelection === "rock" && computerSelection === "scissors")    {
        userScore++;
        return("You win! Rock beats scissors!"); 
         
    }
        
    if(playerSelection === "paper" && computerSelection === "rock")   {
        computerScore++;
        return("You lose! Rock beats paper!");
         
    }
        
    if(playerSelection === "paper" && computerSelection === "scissors")   {
        computerScore++; 
        return("You lose! Scissors beats paper!");
        
    }

    if(playerSelection === "scissors" && computerSelection === "paper")  { 
        userScore++;
        return("You win! Scissors beats paper!");
       
    }

    if(playerSelection === "scissors" && computerSelection === "rock")  { 
        computerScore++;
        return("You lose! Rock beats scissors!");
        
    }
   
}

function game() {
    userScore = 0, computerScore = 0; 
    for (let i = 0; i < 5; i++) { 
        let playerSelection = prompt("Enter in rock, paper, or scissors"); 
        playerSelection = playerSelection.trim().toLowerCase();
        let computerSelection = computerPlay(); 
        console.log(playRound(playerSelection, computerSelection)); 
    }
    console.log(scores()); 
}

function scores () { 
    if (computerScore > userScore) {
        console.log(`Computer Won! Result is: ${computerScore} - ${userScore}`);
      } else if (computerScore < userScore) {
        console.log(`User Won! Result is: ${userScore} - ${computerScore}`);
      } else {
        console.log(`It's a tie! Result is: ${userScore} - ${computerScore}`);
      }
}

game()