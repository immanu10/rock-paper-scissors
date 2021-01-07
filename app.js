
const playerScoreElement = document.querySelector('.player-score')
const computerScoreElement = document.querySelector('.computer-score')
const buttons = document.querySelectorAll('button')
const gameCondition = document.querySelector('.game-condition')
const playerImg = document.querySelector('.player-img')
const computerImg = document.querySelector('.computer-img')

let playerScore = 0;
let computerScore = 0;

buttons.forEach(function(btn){
    btn.addEventListener('click',function(e){

            const playerSelection = e.currentTarget.dataset.value;
            playerImg.src = `${playerSelection}.png`
            const computerSelection = computerPlay();
            computerImg.src = computerSelection == 'rock' ? `rock2.png` : `${computerSelection}.png`
            gameStart(playerSelection,computerSelection)

            if(playerScore == 5 || computerScore==5){
                declareWinner();
            }
      
    })
})


//5 Round game function
function gameStart(playerSelection,computerSelection){
        // console.log(`${playerSelection} vs ${computerSelection} - Game Started`);  
               
        const gameStatus=playOneRound(playerSelection,computerSelection);
        if(gameStatus === true){
            playerScore++;
            displayPlayerScore();
            gameCondition.innerHTML = `"you win this round, ${playerSelection} beats ${computerSelection}"`
        }
        else if(gameStatus === false){
            computerScore++;
            displayComputerScore()
            gameCondition.innerHTML =`"you Lose this round, ${computerSelection} beats ${playerSelection}"`

        }
        else{
            gameCondition.innerHTML =`"Round ended in draw"`;
        }               
}






//computer choosing rock paper scissor
function computerPlay(){
    const gameObject = ['rock','paper','scissor'];
    const random = Math.floor(Math.random()*3)
    return gameObject[random];
}



//game Logic function
function playOneRound(playerSelection,computerSelection){
        let gameStatus;
        if(playerSelection === computerSelection){
            console.log("Round ended in Draw");
            gameStatus = 'draw'
            return gameStatus;
        }
        else if(playerSelection==='rock'){
            if(computerSelection==='scissor'){
                gameStatus = true;
            }
            else{
                gameStatus =false
            }
        }
        else if(playerSelection==='paper'){
            if(computerSelection==='rock'){
                gameStatus = true;
            }
            else{
                gameStatus =false
            }
        }
        else if(playerSelection==='scissor'){
            if(computerSelection==='paper'){
                gameStatus = true;
            }
            else{
                gameStatus =false
            }
        }
        else{
            console.log("something went wrong");
        }
        
    return gameStatus;

}

//winner after reaching score = 5
function declareWinner(){
    if(playerScore>computerScore){
        gameCondition.innerHTML = `<strong>You Won the Game!</strong> Score: ${playerScore} - ${computerScore}`
        resetGame();
        
    }
    else{
        gameCondition.innerHTML = `<strong>You Lost the Game!</strong> Score: ${playerScore} - ${computerScore}`
        resetGame();
    }
}
function resetGame(){
    playerScore =0;
    computerScore = 0;
    displayComputerScore();
    displayPlayerScore()
}
function displayComputerScore(){
    computerScoreElement.innerHTML = computerScore;
}
function displayPlayerScore(){
    playerScoreElement.innerHTML = playerScore
}
