const choices = document.querySelectorAll('.btn');
let pScore = document.querySelector('.player-score');
let cScore = document.querySelector('.computer-score');
let result = document.querySelector('.result-text');
const resetBtn = document.querySelector('.reset');


const compChoice = ()=>{
    const options = ['rock', 'paper', 'scissor'];
    const randomNum = Math.floor(Math.random()*3);
    return options[randomNum];
}   
let plyScore = 0;
let comprScore = 0;

const playGame = (userChoice)=>{
    const computerChoice = compChoice();
    if(userChoice === computerChoice){
        result.textContent = 'It is a tie';
        return;
    }
    else {
        let userWin = true;
        if(userChoice === 'rock' && computerChoice == 'paper' ){
            userWin = false;
            result.textContent = 'Comp Wins';
            cScore.innerHTML = ++comprScore;
        }
        else if(userChoice === 'paper' && computerChoice == 'rock' ){
            userWin = true;
            result.textContent = 'User Wins';
            pScore.innerHTML = ++plyScore;
        }
        else if(userChoice === 'scissor' && computerChoice == 'rock' ){
            userWin = false;
            result.textContent = 'Comp Wins';
            cScore.innerHTML = ++comprScore;

        }
        else if(userChoice === 'rock' && computerChoice == 'scissor' ){
            userWin =
            result.textContent = 'User Wins';
            pScore.innerHTML = ++plyScore;
        }
        else if(userChoice === 'paper' && computerChoice == 'scissor' ){
            userWin = false;
            result.textContent = 'Comp Wins';
            cScore.innerHTML = ++comprScore;
        }
        else if(userChoice === 'scissor' && computerChoice == 'paper' ){
            userWin = true;
            result.textContent = 'User Wins';
            pScore.innerHTML = ++plyScore;
        }
    }
}
const resetGame = ()=>{
    plyScore = 0;
    comprScore = 0;
    pScore.innerHTML = plyScore;
    cScore.innerHTML = comprScore;
    result.textContent = 'Choose an option';
}

// let playerScore = 0;
// let computerScore = 0;
choices.forEach((choice)=>{
     choice.addEventListener('click',()=>{
        const choiceID = choice.getAttribute('id');
        playGame(choiceID);
        console.log(choiceID);
    })
})