
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
const generateTarget=()=>{
    return Math.floor(Math.random*9);
};
const compareGuesses=(userGuess,compGuess,secTarget)=>{
    return Math.abs(userGuess-secTarget)<=Math.abs(compGuess-secTarget);
};
const updateScore=(winner)=>{
if(winner==='human')
    humanScore++;
else
    computerScore++;
};
const advanceRound=()=>{
currentRoundNumber++;
};
