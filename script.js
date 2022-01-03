'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('No number!');

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct number!');
        document.querySelector('.number').textContent = String(secretNumber);


        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // When guess is wrong
    } else {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            document.querySelector('.score').textContent = String(--score);
        } else {
            displayMessage('You lost the game :(');
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    displayMessage('Start guessing...');
    score = document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
});

