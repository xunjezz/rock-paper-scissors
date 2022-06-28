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
const img = document.querySelector('img');

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
        cpuChoiceText.innerHTML = `<h1>GAME OVER!!</h1>`
    }else if((gameScore>=5 && cpuScore >= 3) && (cpuScore >  playerScore)){
        gameScoreCard.innerText = '';
        gameScoreCard.appendChild(taButton);
        cpuChoiceText.innerHTML = `<h1>GAME OVER!!</h1>`
    }else{
        
        if(e.target.id == cpu){    //run the game and show results                       
            tieScoreCard.innerText = `Ties:  ${drawScore += 1}`
            cpuChoiceText.innerHTML = `CPU Chooses:<h3>  TIE!</h3>`;
        }else if(e.target.id == "Rock" && cpu == "Scissors"){
            playerScoreCard.innerText = `Player Score:  ${playerScore += 1}`;
            cpuChoiceText.innerHTML = `CPU Chooses:  <h3>YOU WIN!!</h3>`;
        }else if(e.target.id == "Rock" && cpu == "Paper"){
            cpuScoreCard.innerText = `CPU Score:  ${cpuScore += 1}`;
            cpuChoiceText.innerHTML= `CPU Chooses:  <h3>CPU WINS!</h3>`;
        }else if(e.target.id == "Paper" && cpu == "Rock"){
            playerScoreCard.innerText = `Player Score:  ${playerScore += 1}`;
            cpuChoiceText.innerHTML = `CPU Chooses:  <h3> YOU WIN!!</h3>`;
        }else if(e.target.id == "Paper" && cpu == "Scissors"){
            cpuScoreCard.innerText = `CPU Score:  ${cpuScore += 1}`;
            cpuChoiceText.innerHTML = `CPU Chooses:  <h3>CPU WINS!</h3>`;
        }else if(e.target.id == "Scissors" && cpu == "Paper"){
            playerScoreCard.innerText = `Player Score:  ${playerScore += 1}`;
            cpuChoiceText.innerHTML = `CPU Chooses:  <h3>YOU WIN!!</h3>`;
        }else if(e.target.id == "Scissors" && cpu == "Rock"){
            cpuScoreCard.innerText = `CPU Score:  ${cpuScore += 1}`;
            cpuChoiceText.innerHTML = `CPU Chooses:  <h3>CPU WINS!</h3>`;
            
        }
    
        gameScoreCard.innerText =` Round:  ${gameScore += 1}`;
    }
}
        
        




function computerPlay() {     //Generate random # between 1-3
    let randNum = Math.floor(Math.random() * 3 ) + 1;             
        if(randNum == 1){
            img.src = "./images/Rock-export.png"
            cpu ="Rock";       
        }else if(randNum == 2){
            img.src = "./images/Paper-export.png"
            cpu = "Paper";
        }else if(randNum == 3){
            img.src = "./images/Scissors-export.png"
            cpu = "Scissors";
        }      
        return cpu;      
}
        
function reloadPage(){  //function to reload game
    window.location.reload();
}


