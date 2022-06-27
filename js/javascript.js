// let playerScore = 0;  //declare the scores, round, and try again button
let cpuScore = 0;
let drawScore = 0;
let gameScore = 1;
let playerScore = 0;
let cpu = 0;
const taButton = document.createElement("button");
        taButton.innerText = "Try Again?";
        taButton.addEventListener("click", reloadPage);

const playerScoreCard = document.getElementById("ps");
playerScoreCard.innerText = `Player Score:  ${playerScore}`; //display scores and round
const cpuScoreCard = document.getElementById("cpus");         
cpuScoreCard.innerText = `CPU Score:  ${cpuScore}`; 
const tieScoreCard = document.getElementById("ds");
tieScoreCard.innerText = ` Ties:  ${drawScore}`;
const gameScoreCard = document.getElementById("gs"); 
gameScoreCard.innerText = `Round:  ${gameScore}`;       

clickedRock = document.querySelector('#click-rock'); //get click from input buttons
clickedRock.addEventListener('click', playerClicked);
clickedPaper = document.querySelector('#click-paper');
clickedPaper.addEventListener('click', playerClicked);                        
clickedScissors = document.querySelector('#click-scissors');
clickedScissors.addEventListener('click', playerClicked);

function playerClicked(e){
    computerPlay();
    if((gameScore >=5 && playerScore >= 3) && (playerScore > cpuScore) ){
        gameScoreCard.innerHTML = 'GAME OVER <br>';
        gameScoreCard.appendChild(taButton);
        alert(`GameOver You Win: ${playerScore} to ${cpuScore}, it's OVER! Click Try Again!`);
    }else if((gameScore>=5 && cpuScore >=3) && (cpuScore >  playerScore)){
        gameScoreCard.innerHTML = 'GAME OVER <br>';
        gameScoreCard.appendChild(taButton);
        alert(`GameOver You Lose: ${cpuScore} to ${playerScore}, it's OVER! Click Try Again!`);
    }else{
    
        if (e.target.id == cpu){
            alert(`Both you and your opponent chose ${e.target.id}`);
            tieScoreCard.innerText = `Ties:  ${drawScore += 1}`  
        }else if(e.target.id == "click-rock" && cpu == "click-scissors"){
            alert("You've chosen Rock and your opponent has chosen Scissors, Win!!");
            playerScoreCard.innerText = `Player Score:  ${playerScore += 1}`
        }else if(e.target.id == "click-rock" && cpu == "click-paper"){
            alert("You've chosen Rock and unfortuatly your opponent has chosen Paper, Lose!");
            cpuScoreCard.innerText = `CPU Score:  ${cpuScore += 1}`;
        }else if(e.target.id == "click-paper" && cpu == "click-rock"){
            alert("You've chosen Paper and your opponent has chosen Rock, Win!!");
            playerScoreCard.innerText = `Player Score:  ${playerScore += 1}`
        }else if(e.target.id == "click-paper" && cpu == "click-scissors"){
            alert("You've chosen Paper and unfortuatly your opponent has chosen Scissors, Lose!");
            cpuScoreCard.innerText = `CPU Score:  ${cpuScore += 1};`
        }else if(e.target.id == "click-scissors" && cpu == "click-paper"){
            alert("You've chosen Scissors and your opponent has chosen Paper, Win!!");
            playerScoreCard.innerText = `Player Score:  ${playerScore += 1}`
        }else if(e.target.id == "click-scissors" && cpu == "click-rock"){
            alert("You've chosen Scissors and unfortuatly your opponent has chosen Rock, Lose!");
            cpuScoreCard.innerText = `CPU Score:  ${cpuScore += 1};`
        }        
        
        gameScoreCard.innerText =` Round:  ${gameScore += 1}`;
        
        
    }

}

function computerPlay() {     //Generate random # between 1-3
    let randNum = Math.floor(Math.random() * 3 ) + 1;             
        if(randNum == 1){
            cpu ="click-rock";       
        }else if(randNum == 2){
            cpu = "click-paper";
        }else if(randNum == 3){
            cpu = "click-scissors";
        }      
        return cpu;      
}
        
function reloadPage(){  //function to reload game
    window.location.reload();
}



function finshGame(player,cpu){ //Display the winner in alert
    if(player > cpu){
        alert("You've Won! " + playerScore
             + " to " + cpuScore +" Click Try Again!");
    }else if(player < cpu){
        alert("You've Lost! "+ playerScore
        + " to " + cpuScore + " Click Try Again!");
    }else if (player == cpu){
        alert("It's a Draw! "+ playerScore
        + " to " + cpuScore + " Click Try Again!");
    }
    }
