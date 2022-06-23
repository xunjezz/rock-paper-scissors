let playerScore = 0;  //declare the scores, round, and try again button
let cpuScore = 0;
let drawScore = 0;
let gameScore = 1;
const taButton = 
        document.createElement("button");
        taButton.innerHTML = "Try Again?";
        taButton.addEventListener("click", reloadPage);


document.getElementById("ps").innerHTML =  //display scores and round
        "Player Score:  " + playerScore;
document.getElementById("cpus").innerHTML = 
        "CPU Score:  " + cpuScore;
document.getElementById("ds").innerHTML =
        "Tie:  " + drawScore;
document.getElementById("gs").innerHTML = 
        "Round:  " + gameScore;


document.getElementById("clickRock").onclick = // get click input
        gameLoopRock;                          //rock
document.getElementById("clickPaper").onclick = //get click input
        gameLoopPaper;                          //paper
document.getElementById("clickScissors").onclick = //get click input
        gameLoopScissors;                          //scissors

function gameLoopRock(){  //run the game if rock is chosen
    if(gameScore < 5){
        gameScore += 1;
        compareRock(pRockMaker(),computerPlay());
        document.getElementById("gs").innerHTML = 
                "Round:  " + gameScore;
    }else if(gameScore == 5) {
        gameScore += 1;
        compareRock(pRockMaker(),computerPlay());
        document.getElementById("gs").innerHTML = 
        "GAME OVER";
        document.getElementById("tryAgain").appendChild(taButton);
        finshGame(playerScore,cpuScore);
    }    
}       

function gameLoopPaper(){  //run the game if Paper is chosen
    if(gameScore < 5){
        gameScore += 1;
        comparePaper(pPaperMaker(),computerPlay());
        document.getElementById("gs").innerHTML = 
                "Round:  " + gameScore;
    }else if(gameScore == 5) {
        gameScore += 1;
        comparePaper(pPaperMaker(),computerPlay());
        document.getElementById("gs").innerHTML = 
        "GAME OVER";
        document.getElementById("tryAgain").appendChild(taButton);
        finshGame(playerScore,cpuScore);
        
    }    
}


function gameLoopScissors(){  //run the game is Scissors is chosen
    if(gameScore < 5){
        gameScore += 1;
        compareScissors(pScissorsMaker(),computerPlay());
        document.getElementById("gs").innerHTML = 
        "Round:  " + gameScore;
    }else if(gameScore == 5) {
        gameScore += 1;
        compareScissors(pScissorsMaker(),computerPlay());
        document.getElementById("gs").innerHTML = 
        "GAME OVER";
        document.getElementById("tryAgain").appendChild(taButton);       
        finshGame(playerScore,cpuScore);
    }    
}
    

   
function reloadPage(){  //function to reload game
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
        drawScore += 1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
        document.getElementById("ds").innerHTML = "Tie:  " + drawScore;
    
    }else if(player == "Rock" && cpu == "Paper"){
        alert("You've chosen Rock and unfortuatly your opponent has chosen Paper, Lose!");
        cpuScore += 1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;

    }else if(player == "Rock" && cpu == "Scissors"){
        alert("You've chosen Rock and your opponent has chosen Scissors, Win!!");
        playerScore +=1;   
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
        
    }
}

function comparePaper(player,cpu){ //Compare Paper vs Cpu
    if(player == "Paper" && cpu =="Paper"){
        alert(" You've chosen Paper and so has you opponent, Tie!");
        drawScore += 1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
        document.getElementById("ds").innerHTML = "Tie:  " + drawScore;
    
    }else if(player == "Paper" && cpu == "Scissors"){
        alert("You've chosen Paper and unfortuatly your opponent has chosen Scissors, Lose!");
        cpuScore += 1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
        
    }else if(player == "Paper" && cpu == "Rock"){
        alert("You've chosen Paper and your opponent has chosen Rock, Win!!");
        playerScore +=1
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore; 
        
    }
}

function compareScissors(player,cpu){ //Compare Scissors vs Cpu
    if(player == "Scissors" && cpu =="Scissors"){
        alert(" You've chosen Scissors and so has you opponent, Tie!");        
        drawScore += 1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore; 
        document.getElementById("ds").innerHTML = "Tie:  " + drawScore;
    }else if(player == "Scissors" && cpu == "Rock"){
        alert("You've chosen Scissors and unfortuatly your opponent has chosen Rock, Lose!");
        cpuScore += 1;     
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
        
    }else if(player == "Scissors" && cpu == "Paper"){
        alert("You've chosen Scissors and your opponent has chosen Paper, Win!!");
        playerScore +=1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
        
    }
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
