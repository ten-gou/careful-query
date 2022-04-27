// var timerEl = document.getElementById('countdown');
// var ButtonEl = document.getElementsByClassName('btn');
var startTimerEl = document.getElementById('start-button');
var HighScoreEl = document.getElementById('high-score');
var AnswerBoxEl = document.getElementById('answer-box');
var timeLeft = 0;
var Score = 0;
var questionNumberCounter = 0;
const question = require('./questions')

// Timed countdown function
function countdown() {
    timeLeft = 80;
    // Use the `setInterval()` method to call a function to be executed every x milliseconds
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " second(s) remaining.";
  
      if (timeLeft === 0) {
        clearInterval(timeInterval);
      }
      timeLeft--;
    },
      10);
    }
function startTimer() {
    if (timeLeft > 0) {
      alert('A timer is already running!');
  }
  else {
      countdown();
  }
}

// print to console score fxn
function printScore() {
  console.log(Score);
}

// Create New Buttons fxn
function createNewButton() {
  var quizButtonEl = document.createElement('li');
  quizButtonEl.className = "alternatives btn";
  quizButtonEl.id = "start-button";
  quizButtonEl.setAttribute("question-number", questionNumberCounter);

  var quizAnswerEl = document.createElement('p');
  quizAnswerEl.className = "answer";
  quizAnswerEl.textContent = "";

  quizButtonEl.appendChild(quizAnswerEl);

  AnswerBoxEl.appendChild(quizButtonEl);
}

console.log(question);
// ButtonEl.addEventListener('click', createNewButton);

// Start Button, with a check to see if the countdown is already running
startTimerEl.addEventListener('click', startTimer);
startTimerEl.addEventListener('click', createNewButton);

// High score click, which should print the high score
HighScoreEl.addEventListener('click', printScore);

