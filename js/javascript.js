let playerScore = 0;
let cpuScore = 0;
let gameScore = 0;
const taButton = 
        document.createElement("button");
        taButton.innerHTML = "Try Again?";
        taButton.addEventListener("click", reloadPage);


document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
document.getElementById("gs").innerHTML = "Round:  " + gameScore;

document.getElementById("clickRock").onclick = gameLoopRock;
document.getElementById("clickPaper").onclick = gameLoopPaper;
document.getElementById("clickScissors").onclick = gameLoopScissors;     

function gameLoopRock(){
    if(gameScore < 5){
        compareRock(pRockMaker(),computerPlay());
    }else if(gameScore == 5) {
        gameScore += 1;
        document.getElementById("tryAgain").appendChild(taButton);
        
    }    
}       

function gameLoopPaper(){
    if(gameScore < 5){
        comparePaper(pPaperMaker(),computerPlay());
    }else if(gameScore == 5) {
        gameScore += 1;
        document.getElementById("tryAgain").appendChild(taButton);
        
    }    
}


function gameLoopScissors(){
    if(gameScore < 5){
        compareScissors(pScissorsMaker(),computerPlay());
    }else if(gameScore == 5) {
        gameScore += 1;
        document.getElementById("tryAgain").appendChild(taButton);
        
    }    
}
    

   
function reloadPage(){
    window.location.reload();
}   

































function computerPlay() {     //Generate random # between 1-3
    randNum = Math.floor(Math.random() * 3 ) + 1;
                             //
    switch(randNum){         //Use random # to return RPS value
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
     }
     
     

}

function pRockMaker(){  // Player Chooses Rock
    const pRock = "Rock";
    console.log(pRock);
    return pRock;
    
}

function pPaperMaker(){  //Player Chooses Paper
    const pPaper = "Paper";
    console.log(pPaper);
    return pPaper;

}

function pScissorsMaker(){  //Player Chooses Scissors
    const pScissors = "Scissors";
    console.log(pScissors);
    return pScissors;
}

function compareRock(player,cpu){ //Compare Rock vs Cpu
    if(player == "Rock" && cpu =="Rock"){
        alert(" You've chosen Rock and so has you opponent, Tie!");
        gameScore +=1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
        document.getElementById("gs").innerHTML = "Round:  " + gameScore;

    }else if(player == "Rock" && cpu == "Paper"){
        alert("You've chosen Rock and unfortuatly your opponent has chosen Paper, Lose!");
        cpuScore += 1;
        gameScore +=1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
        document.getElementById("gs").innerHTML = "Round:  " + gameScore;

    }else if(player == "Rock" && cpu == "Scissors"){
        alert("You've chosen Rock and your opponent has chosen Scissors, Win!!");
        playerScore +=1;
        gameScore +=1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
        document.getElementById("gs").innerHTML = "Round:  " + gameScore;
    }
}

function comparePaper(player,cpu){ //Compare Paper vs Cpu
    if(player == "Paper" && cpu =="Paper"){
        alert(" You've chosen Paper and so has you opponent, Tie!");
        gameScore +=1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
        document.getElementById("gs").innerHTML = "Round:  " + gameScore;

    }else if(player == "Paper" && cpu == "Scissors"){
        alert("You've chosen Paper and unfortuatly your opponent has chosen Scissors, Lose!");
        cpuScore += 1;
        gameScore +=1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
        document.getElementById("gs").innerHTML = "Round:  " + gameScore;

    }else if(player == "Paper" && cpu == "Rock"){
        alert("You've chosen Paper and your opponent has chosen Rock, Win!!");
        playerScore +=1
        gameScore +=1;;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore; 
        document.getElementById("gs").innerHTML = "Round:  " + gameScore;
    }
}

function compareScissors(player,cpu){ //Compare Scissors vs Cpu
    if(player == "Scissors" && cpu =="Scissors"){
        alert(" You've chosen Scissors and so has you opponent, Tie!");        
        gameScore +=1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore; 
        document.getElementById("gs").innerHTML = "Round:  " + gameScore;
    }else if(player == "Scissors" && cpu == "Rock"){
        alert("You've chosen Scissors and unfortuatly your opponent has chosen Rock, Lose!");
        cpuScore += 1;
        gameScore +=1;       
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
        document.getElementById("gs").innerHTML = "Round:  " + gameScore;
    }else if(player == "Scissors" && cpu == "Paper"){
        alert("You've chosen Scissors and your opponent has chosen Paper, Win!!");
        playerScore +=1;
        gameScore +=1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
        document.getElementById("gs").innerHTML = "Round:  " + gameScore;
    }
}