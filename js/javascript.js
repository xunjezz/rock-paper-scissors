playerScore = 0;
cpuScore = 0;


document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;


































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
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;

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
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
    
    }else if(player == "Paper" && cpu == "Scissors"){
        alert("You've chosen Paper and unfortuatly your opponent has chosen Scissors, Lose!");
        cpuScore += 1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore;
    
    }else if(player == "Paper" && cpu == "Rock"){
        alert("You've chosen Paper and your opponent has chosen Rock, Win!!");
        playerScore +=1;
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore; 
    }
}

function compareScissors(player,cpu){ //Compare Scissors vs Cpu
    if(player == "Scissors" && cpu =="Scissors"){
        alert(" You've chosen Scissors and so has you opponent, Tie!");        
        document.getElementById("ps").innerHTML = "Player Score:  " + playerScore;
        document.getElementById("cpus").innerHTML = "CPU Score:  " + cpuScore; 
    
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