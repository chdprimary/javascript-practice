'use strict';

/** 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let bodyEl = document.querySelector('body');
let numberEl = document.querySelector('.number');
let guessEl = document.querySelector('.guess');
let messageEl = document.querySelector('.message');
let scoreEl = document.querySelector('.score');
let score = Number(scoreEl.textContent);
let highscoreEl = document.querySelector('.highscore');
let highscore = Number(highscoreEl.textContent);

const displayMessage = function (message) {
  messageEl.textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessEl.value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ You must input a number!');

    // When player wins
  } else if (guess === secretNumber) {
    numberEl.textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    bodyEl.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
    console.log(highscore);
    console.log(typeof highscore);

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore.toString();
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    const substr = (guess > secretNumber) ? 'high' : 'low';

    if (score > 1) {
      displayMessage(`📈 Too ${substr}!`);
      scoreEl.textContent = --score;
    } else {
      displayMessage('💀 You lost. Try again!');
      scoreEl.textContent = --score;
      return;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
  numberEl.textContent = '?';
  guessEl.value = '';
  displayMessage('Start guessing...');
  score = 20;
  scoreEl.textContent = score.toString();
});