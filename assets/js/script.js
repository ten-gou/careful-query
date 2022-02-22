var timerEl = document.getElementById('countdown');
var ButtonEl = document.getElementById('start-button')
var timeLeft = 0;

// Timed countdown function
function countdown() {
    timeLeft = 50;
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

// Start Button, with a check to see if the countdown is already running
ButtonEl.addEventListener('click', function(){
    if (timeLeft > 0) {
        alert('A timer is already running!');
    }
    else {
        countdown();
    }
});
