let cpuScore = 0;  //declare the scores, round, and try again button
let drawScore = 0;
let gameScore = 1;
let playerScore = 0;
let cpu = 0;
const images = [];
images[0] = new Image();
images[0].src = 'images/Rock-export.png'; 
images[1] = new Image();
images[1].src = 'images/Paper-export.png';
images[2] = new Image();
images[2].src = 'images/Scissors-export.png';
images[3] = new Image();
images[3].src = 'images/RockClicked-export.png';
images[4] = new Image();
images[4].src = 'images/PaperClicked-export.png';
images[5] = new Image();
images[5].src = 'images/ScissorsClicked-export.png';
const sounds = [];
sounds[0] = new Audio();
sounds[0].src = 'sounds/rock.mp3';
sounds[1] = new Audio();
sounds[1].src = 'sounds/paper.mp3';
sounds[2] = new Audio();
sounds[2].src = 'sounds/scissors.mp3';
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
cpuChoiceText.innerText = 'CPU Chooses:';
cpuChoice.appendChild(cpuChoiceText);
const img = document.querySelector('img');
const cpuPic = document.getElementById('cpu-pic');


clickedRock = document.querySelector('#Rock'); //get click from input buttons
clickedRock.addEventListener('click', playerClicked);
clickedPaper = document.querySelector('#Paper');
clickedPaper.addEventListener('click', playerClicked);                        
clickedScissors = document.querySelector('#Scissors');
clickedScissors.addEventListener('click', playerClicked);


function playerClicked(e){
    computerPlay();
    changeImage(e);
    playSound(e);
        
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
        checkFinish(playerScore,cpuScore);

    }        
    
function computerPlay() {     //Generate random # between 1-3
    let randNum = Math.floor(Math.random() * 3 ) + 1;             
        if(randNum == 1){  //create the CPU pick
            img.src = "./images/clear-export.png";
            setTimeout(() =>{ img.src = "./images/cpuRock-export.png"},150)
            cpu ="Rock";       
        }else if(randNum == 2){
            img.src = "./images/clear-export.png";
            setTimeout(() =>{ img.src = "./images/cpuPaper-export.png"},150)
            cpu = "Paper";
        }else if(randNum == 3){
            img.src = "./images/clear-export.png";
            setTimeout(() =>{ img.src = "./images/cpuPaper-export.png"},150)
            cpu = "Scissors";
        }      
        return cpu;      
    }
        
function reloadPage(){  //function to reload game
    window.location.reload();
}

function checkFinish(player,cpu){ //check for ending conditions

    if(player == 5){
        gameScoreCard.innerText = '';
        gameScoreCard.appendChild(taButton);
        cpuChoiceText.innerHTML = `<h1>GAME OVER!!</h1>`;
        cpuPic.innerText = `YOU WIN!`;
        disableButton();
        
    }else if(cpu == 5){
        gameScoreCard.innerText = '';
        gameScoreCard.appendChild(taButton);
        cpuChoiceText.innerHTML = `<h1>GAME OVER!!</h1>`;
        cpuPic.innerText = 'YOU LOSE!';
        disableButton();
    }
}
function disableButton(){  //disable the inputs after game over
    
    document.getElementById('Rock').disabled = true;
    document.getElementById('Paper').disabled = true;
    document.getElementById('Scissors').disabled = true;    
}

    
function changeImage(e){
    
    if(e.target.id =="Rock"){
        document.getElementById("Rock").src = images[3].src;
        setTimeout(() =>{document.getElementById("Rock").src = images[0].src;},200)
        
    }else if(e.target.id =="Paper"){
        document.getElementById("Paper").src = images[4].src;
        setTimeout(() =>{document.getElementById("Paper").src = images[1].src;},200)
    
    }else if(e.target.id =="Scissors"){
        document.getElementById("Scissors").src = images[5].src;
        setTimeout(() =>{document.getElementById("Scissors").src = images[2].src;},200)
    }
}   

function playSound(e){
    if(e.target.id == "Rock"){
        sounds.forEach((el) => {el.pause(); el.currentTime = 0;});
        sounds[0].play();
        sounds[0].currentTime = 0;
        
    }else if(e.target.id == "Paper"){
        sounds.forEach((el) =>{el.pause(); el.currentTime = 0;});
        sounds[1].play();
        sounds[1].currentTime = 0;
        
    }else if(e.target.id == "Scissors"){
        sounds.forEach((el) =>{el.pause(); el.currentTime = 0;});        
        sounds[2].play();
        sounds[2].currentTime = 0;
        
    }
}

