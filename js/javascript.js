// let playerScore = 0;  //declare the scores, round, and try again button
let cpuScore = 0;
let drawScore = 0;
let gameScore = 1;
let playerScore = 0;
let cpu = 0;
const taButton = document.createElement('button');
        taButton.innerText = "Try Again?";
        taButton.addEventListener("click", reloadPage);

const container = document.getElementById('container');
const playerScoreCard=document.createElement('p')
playerScoreCard.innerText = `Player Score:  ${playerScore}`; //display scores and round
container.appendChild(playerScoreCard);
const cpuScoreCard = document.createElement('p');         
cpuScoreCard.innerText = `CPU Score:  ${cpuScore}`;
container.appendChild(cpuScoreCard); 
const tieScoreCard = document.createElement('p');
tieScoreCard.innerText = ` Ties:  ${drawScore}`;
container.appendChild(tieScoreCard);
const gameScoreCard = document.createElement('p'); 
gameScoreCard.innerText = `Round:  ${gameScore}`;
container.appendChild(gameScoreCard);       
const cpuChoice = document.getElementById('cpu-choice');
const cpuChoiceText = document.createElement('p');
cpuChoiceText.innerText = "CPU Chooses:";
cpuChoice.appendChild(cpuChoiceText);

clickedRock = document.querySelector('#Rock'); //get click from input buttons
clickedRock.addEventListener('click', playerClicked);
clickedPaper = document.querySelector('#Paper');
clickedPaper.addEventListener('click', playerClicked);                        
clickedScissors = document.querySelector('#Scissors');
clickedScissors.addEventListener('click', playerClicked);

function playerClicked(e){
    computerPlay();

    if((gameScore >=5 && playerScore >=  3) && (playerScore > cpuScore) ){
        gameScoreCard.innerText = '';
        gameScoreCard.appendChild(taButton);
        alert(`GameOver You Win: ${playerScore} to ${cpuScore}, it's OVER! Click Try Again!`);
    }else if((gameScore>=5 && cpuScore >= 3) && (cpuScore >  playerScore)){
        gameScoreCard.innerText = '';
        gameScoreCard.appendChild(taButton);
        alert(`GameOver You Lose: ${cpuScore} to ${playerScore}, it's OVER! Click Try Again!`);
    
    }else{
        
        if(e.target.id == cpu){
            // alert(`Both you and your opponent chose ${e.target.id}`);
            tieScoreCard.innerText = `Ties:  ${drawScore += 1}`  
        }else if(e.target.id == "Rock" && cpu == "Scissors"){
            // alert("You've chosen Rock and your opponent has chosen Scissors, Win!!");
            playerScoreCard.innerText = `Player Score:  ${playerScore += 1}`
        }else if(e.target.id == "Rock" && cpu == "Paper"){
            // alert("You've chosen Rock and unfortunatly your opponent has chosen Paper, Lose!");
            cpuScoreCard.innerText = `CPU Score:  ${cpuScore += 1}`;
        }else if(e.target.id == "Paper" && cpu == "Rock"){
            // alert("You've chosen Paper and your opponent has chosen Rock, Win!!");
            playerScoreCard.innerText = `Player Score:  ${playerScore += 1}`
        }else if(e.target.id == "Paper" && cpu == "Scissors"){
            // alert("You've chosen Paper and unfortunatly your opponent has chosen Scissors, Lose!");
            cpuScoreCard.innerText = `CPU Score:  ${cpuScore += 1}`
        }else if(e.target.id == "Scissors" && cpu == "Paper"){
            // alert("You've chosen Scissors and your opponent has chosen Paper, Win!!");
            playerScoreCard.innerText = `Player Score:  ${playerScore += 1}`
        }else if(e.target.id == "Scissors" && cpu == "Rock"){
            // alert("You've chosen Scissors and unfortunatly your opponent has chosen Rock, Lose!");
            cpuScoreCard.innerText = `CPU Score:  ${cpuScore += 1}`
    }
    
        gameScoreCard.innerText =` Round:  ${gameScore += 1}`;
    }
}
        
        




function computerPlay() {     //Generate random # between 1-3
    let randNum = Math.floor(Math.random() * 3 ) + 1;             
        if(randNum == 1){
            cpu ="Rock";       
        }else if(randNum == 2){
            cpu = "Paper";
        }else if(randNum == 3){
            cpu = "Scissors";
        }      
        return cpu;      
}
        
function reloadPage(){  //function to reload game
    window.location.reload();
}


