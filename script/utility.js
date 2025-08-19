//add hidden class 
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
//remove hidden class
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

//set background color according to randomly generated alphabet
function setBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-400');
}

//remove background color which key is already pressed correctly
function removeBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-amber-400');
}

//get value from element
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

//set value by id
function setValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

//generate random alphabet
function getRandomAlphabet(){
    //generate alphabet string
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');
    

    //generate random number between 0 to 25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    //get rendom alphabet
    const alphabet = alphabets[index];
    return alphabet;
}