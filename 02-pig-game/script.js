"use strict";

// DOM Elements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

const currentScore0El = document.querySelector("#current--0");
const currentScore1El = document.querySelector("#current--1");

const dice = document.querySelector(".dice");
const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Initialize game
let gameOver = false;
const scores = [0, 0];
score0El.textContent = 0;
score1El.textContent = 0;

dice.classList.add("hidden");

let currentPlayer = 0;
let currentScore = 0;

// action functions
const switchPlayer = () => {
  // switch player
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;

  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");

  // init current score
  currentScore = 0;
};

// Rolling Dice
btnRollDice.addEventListener("click", () => {
  if (!gameOver) {
    // get random number 1 ~ 6
    const diceResult = Math.trunc(Math.random() * 6) + 1;

    // show dice
    dice.classList.remove("hidden");
    dice.src = `dice-${diceResult}.png`;

    // check if result === 1
    if (diceResult !== 1) {
      currentScore += diceResult;

      document.querySelector(
        `#current--${currentPlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (!gameOver) {
    scores[currentPlayer] += currentScore;

    document.querySelector(`#score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    if (scores[currentPlayer] >= 10) {
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove("player--active");

      gameOver = true;
    }

    switchPlayer();
  }
});

btnNewGame.addEventListener("click", () => {
  gameOver = false;
  currentScore = 0;
  currentPlayer = 0;

  player0.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--winner");
  player1.classList.remove("player--active");
  score0El.textContent = 0;
  score1El.textContent = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
});
