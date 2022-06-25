const headerEl = document.getElementById('header');

const timer = () => {
    var totalTime = 40; // sets the amount of time in seconds that is left
    var counterCycle = 0; // counts how many times the timeLeft, which is usd to print how much time has passed/is left

    const timeCounterEl = document.getElementById('timer');
    timeCounterEl.textContent = `BEGIN!`;

    const currentTime = setTimeout(() => {        
        resultScreen();
        clearInterval(currentTime);
        clearInterval(timeCounter);
    }, totalTime*1000);

    const timeLeft = () => {
        counterCycle++;
        return Math.ceil((totalTime - counterCycle));
    };


    const timeCounter = setInterval(function() {
        if (timeCounterEl.textContent == `DONE!`) {
            clearInterval(timeCounter); 
        }
        else {
            const trackerText = `You have ${timeLeft()} seconds left`;
            timeCounterEl.textContent = trackerText;
        }
    }, 1000)



};
