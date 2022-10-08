'use strict';

// Elements
const totalScore0El = document.getElementById('score--0');
const currentScore0El = document.getElementById('current--0');
const totalScore1El = document.getElementById('score--1');
const currentScore1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const newGameButtonEl = document.querySelector('.btn--new');
const rollButtonEl = document.querySelector('.btn--roll');
const holdButtonEl = document.querySelector('.btn--hold');

// Dynamic variables
let playing = false;
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

const startNewGame = function () {
    playing = false;
    scores[0] = 0;
    scores[1] = 0;
    activePlayer = 0;
    currentScore = 0;
    document.querySelector(`.player--0`).classList.remove('player--winner'); 
    document.querySelector(`.player--0`).classList.add('player--active'); 
    document.querySelector(`.player--1`).classList.remove('player--winner'); 
    document.querySelector(`.player--1`).classList.remove('player--active'); 
    diceEl.classList.add('hidden');
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    totalScore0El.textContent = 0;
    totalScore1El.textContent = 0;
    playing = true;
};

const switchActivePlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');

    activePlayer = activePlayer ? 0 : 1;

    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
}

rollButtonEl.addEventListener('click', function () {
    if (playing) {
        const diceVal = Math.trunc(Math.random() * 6) + 1;
        diceEl.src = `dice-${diceVal}.png`;
        diceEl.classList.remove('hidden');
    
        if (diceVal !== 1) {
            currentScore += diceVal;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchActivePlayer();
        }
    }
});

holdButtonEl.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        const activeTotalScoreEl = document.getElementById(`score--${activePlayer}`);
        activeTotalScoreEl.textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); 
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner'); 
            playing = false;
        } else {
            switchActivePlayer();
        }
    }
});

newGameButtonEl.addEventListener('click', function () {
    startNewGame();
});

startNewGame();