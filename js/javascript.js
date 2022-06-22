
function compareRock(player,cpu){ //Compare Rock vs Cpu
    if(player == "Rock" && cpu =="Rock"){
        alert(" You've chosen Rock and so has you opponent, Tie!");
    
    }else if(player == "Rock" && cpu == "Paper"){
        alert("You've chosen Rock and unfortuatly your opponent has chosen Paper, Lose!");

    }else if(player == "Rock" && cpu == "Scissors"){
        alert("You've chosen Rock and your opponent has chosen Scissors, Win!!");
    }
}

function comparePaper(player,cpu){ //Compare Paper vs Cpu
    if(player == "Paper" && cpu =="Paper"){
        alert(" You've chosen Paper and so has you opponent, Tie!");
    
    }else if(player == "Paper" && cpu == "Scissors"){
        alert("You've chosen Paper and unfortuatly your opponent has chosen Scissors, Lose!");

    }else if(player == "Paper" && cpu == "Rock"){
        alert("You've chosen Paper and your opponent has chosen Rock, Win!!");
    }
}

function compareScissors(player,cpu){ //Compare Scissors vs Cpu
    if(player == "Scissors" && cpu =="Scissors"){
        alert(" You've chosen Scissors and so has you opponent, Tie!");
    
    }else if(player == "Scissors" && cpu == "Rock"){
        alert("You've chosen Scissors and unfortuatly your opponent has chosen Rock, Lose!");

    }else if(player == "Scissors" && cpu == "Paper"){
        alert("You've chosen Scissors and your opponent has chosen Paper, Win!!");
    }
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

