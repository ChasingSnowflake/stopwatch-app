let timer;
let seconds = 0;
let isRunning = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(sec) {
  const hrs = Math.floor(sec / 3600).toString().padStart(2, '0');
  const mins = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
  const secs = (sec % 60).toString().padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      display.textContent = formatTime(seconds);
    }, 1000);
  }
}

function stopTimer() {
  isRunning = false;
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  display.textContent = '00:00:00';
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
