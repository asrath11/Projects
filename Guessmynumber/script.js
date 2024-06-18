'use strict';

let highScores = [];
let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;

console.log('Random number:', random);

const guessInput = document.querySelector('.check-input');
const highScoreDisplay = document.querySelector('.high-score');
const checkButton = document.querySelector('.check-button');
const reset = document.querySelector('.reset');
const scoreDisplay = document.querySelector('.score-display');
const numberDisplay = document.querySelector('.number');
const messageDisplay = document.querySelector('.correct-answer');

function displayMessage(msg) {
  messageDisplay.innerHTML = msg;
}

checkButton.addEventListener('click', () => {
  console.log('Button clicked');
  const guess = Number(guessInput.value);
  console.log('Guess:', guess);

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess > random) {
    if (score > 1) {
      displayMessage('📈 Too high!');
      score--;
      scoreDisplay.innerHTML = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreDisplay.innerHTML = 0;
    }
  } else if (guess < random) {
    if (score > 1) {
      displayMessage('📉 Too low!');
      score--;
      scoreDisplay.innerHTML = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreDisplay.innerHTML = 0;
    }
  } else {
    displayMessage('🎉 Congratulations!');
    numberDisplay.textContent = random;

    // Update high score if necessary
    highScores.push(score);
    const highScore = Math.max(...highScores);
    highScoreDisplay.innerHTML = highScore;

    // Optionally, change the background color and number width on win
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberDisplay.style.width = '30rem';
  }
});

reset.addEventListener('click', () => {
  score = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  console.log('New random number:', random);
  displayMessage('Start guessing...');
  scoreDisplay.innerHTML = score;
  numberDisplay.innerHTML = '?';
  guessInput.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  numberDisplay.style.width = '15rem';
});
