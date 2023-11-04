'use strict';

// Defining the number which would be the standard too be compared
let secretNumber = Math.floor(Math.random() * 20 + 1);

// Starting score
let score = 20;

// Starting Highscore
let highscore = 0;

// Replacing repeated code blocks with functions
const displayMessage = function (message) {
  document.querySelector('.message').innerText = message;
};

const displaySecretNumber = function (number) {
  document.querySelector('.number').innerText = number;
};

const bodyBackgroundColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

const secretNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const displayHighscore = function (highscore) {
  document.querySelector('.highscore').innerText = highscore;
};

const displayScore = function (score) {
  document.querySelector('.score').innerText = score;
};

// When the user starts playing the game
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input guess
  if (!guess) {
    displayMessage('No Input!');

    // When the guess is right
  } else if (guess === secretNumber) {
    displayMessage('Success!');
    displaySecretNumber(secretNumber);

    bodyBackgroundColor('#60b347');
    secretNumberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

// When the again button is clicked
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);
  secretNumber = Math.floor(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  displaySecretNumber('?');
  document.querySelector('.guess').innerText = '';

  bodyBackgroundColor('#222');
  secretNumberWidth('15rem');
});
