
console.log(pRock);



































function computerPlay() {     //Generate random # between 1-3
    randNum = Math.floor(Math.random() * 3 ) + 1;
                             //
    switch(randNum){         //Use random # to return RPS value
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissor";
    }                          


}

