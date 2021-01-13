import { compareNumbers } from './utils.js';

const finalMessage = document.getElementById('final-message');
const numberGuessInput = document.getElementById('number-guess');
const submitButton = document.getElementById('submitButton');
const guessesRemaining = document.getElementById('guesses-remaining');
const resetButton = document.getElementById('reset-button');

let correctAnswer = Math.ceil(Math.random() * 20);
console.log(correctAnswer);
let triesRemaining = 4;

submitButton.addEventListener('click', () => {
    let compareResult = compareNumbers(numberGuessInput, correctAnswer);

    if (compareResult === 1) {
        makesFinalMessage(finalMessage, 'Too high');
        triesRemaining = updateSpan(triesRemaining, guessesRemaining);
    }
    else if (compareResult === 2) {
        makesFinalMessage(finalMessage, 'Too low');
        triesRemaining = updateSpan(triesRemaining, guessesRemaining);
    }
    else {
        makesFinalMessage(finalMessage, 'Nice guess! You got it!')
        document.getElementById('submitButton').disabled = true;
    }

    if (numberGuessInput.value > 20) {
        alert('That is an invalid number');
    }
    if (triesRemaining === 0) {
        makesFinalMessage(finalMessage, 'Game over! You are a bad guesser..');
        document.getElementById('number-guess').disabled = true;
        guessesRemaining.textContent = '0';
        document.getElementById('submitButton').disabled = true;
    }
});

function updateSpan(triesRemaining, guessesRemaining) {
    triesRemaining--;
    guessesRemaining.textContent = triesRemaining;
    return triesRemaining;
}

resetButton.addEventListener('click', () => {
    location.reload();
});

function makesFinalMessage(span, message) {
    span.textContent = message;
}