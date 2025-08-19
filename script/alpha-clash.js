


function handleKeyupEvent(event){
    const playerPressed = event.key;
    // console.log('player pressed ',playerPressed);

    //stop the game if player pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get the expected key to press
    const currentAlphabet = document.getElementById('current_alphabet').innerText;
    const currentAlphabetLowerCase = currentAlphabet.toLowerCase();
    //console.log(currentAlphabetLowerCase, playerPressed);

    //check matched or not
    if(currentAlphabetLowerCase === playerPressed){
        //console.log('well done.');

        //update score:
        //1.get the current score
        let currentScore = getTextElementValueById('current_score');
        //2.increase the score by 1
        currentScore+=1;
        //3.display the score 
        setValueById('current_score', currentScore);

        //start a new round
        removeBgColorById(currentAlphabetLowerCase);
        continueGame();
    }else{
        //console.log('you lost your life');
        
        //reduce life:
        //1. get the current life
        let currentLife = getTextElementValueById('current_life')
        //2.decrease life by 1
        currentLife -=1;
        //3.display life
        setValueById('current_life', currentLife);

        if(currentLife === 0){
            gameOver();
        }
    }
    
    
}

document.addEventListener('keyup', handleKeyupEvent);

function continueGame(){
    //generate random alphabet
    const randomAlphabet = getRandomAlphabet();
    //console.log('your random alphabet is ', randomAlphabet);

    //set randomly generated alphabet to the sreen
    const currentAlphabet = document.getElementById('current_alphabet');
    currentAlphabet.innerText = randomAlphabet;

    //set bg color to currentAlphabet key
    setBgColorById(randomAlphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final_score');
    showElementById('playGround');

    setValueById('current_life', 3);
    setValueById('current_score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('playGround');
    showElementById('final_score');

    //display final score 
    const finalScore = getTextElementValueById('current_score');
    document.getElementById('last_final_score').innerText = finalScore;

    

      
}