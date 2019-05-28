let random = Math.floor(Math.random() *100)
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let resultParas = document.querySelector('.resultParas');
let submit = document.querySelector('.guessSubmit');

let counter = 1;

function checkGuess() {
    let inputValue = Number(document.querySelector('#guessField').value);
    if(counter == 1) {
        guesses.innerText += 'Previous Guess : ';
    }

    guesses.innerText += ' '+inputValue;
    if(counter >=10) {
        lastResult.innerText = 'Game Over !';
        lastResult.style.background = 'red';
        let btn = document.createElement('button');
        btn.innerText = 'Start New Game';
        btn.addEventListener('click', startNewGame)
        resultParas.appendChild(btn);
        lowOrHi.innerText = ''
    } else if(inputValue === random){
        lastResult.innerText = 'Congratulations! You got the correct answer';
        lastResult.style.background = 'green'
        lowOrHi.innerText = ''
    } else{
        lastResult.innerText = 'Wrong!';
        lastResult.style.background = 'red'
        if(inputValue > random) {
           lowOrHi.innerText = 'Your guess is too high';
           counter++;
        }else {
           lowOrHi.innerText = 'Your guess is too low'
           counter++
        }
    }
    document.querySelector('#guessField').value = '';
    document.querySelector('#guessField').focus();
}

function startNewGame() {
    random = Math.floor(Math.random() *100);
    counter = 1;
    lowOrHi.innerText = '';
    guesses.innerText = '';
    lastResult.innerText = '';
    lastResult.style.background = 'white';
}

submit.onclick = checkGuess;