const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

// Links
const refs = {
  bodyColor: document.querySelector('body'),
  startButton: document.querySelector('button[data-action="start"'),
  stopButton: document.querySelector('button[data-action="stop"'),
};

// Listeners
refs.startButton.addEventListener('click', start);
refs.stopButton.addEventListener('click', stop);

// Randimise
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// ChangeColor
function changeBackground(color) {
  refs.bodyColor.style.backgroundColor = color;
}

let intervalColorChange = undefined;
function start() {
  intervalColorChange = setInterval(randomNumber => {
    randomNumber = randomIntegerFromInterval(0, 5);
    changeBackground(colors[randomNumber]);
  }, 1000);
  refs.stopButton.removeAttribute('disabled');
  refs.startButton.setAttribute('disabled', true);
}

function stop() {
  clearInterval(intervalColorChange);
  refs.startButton.removeAttribute('disabled');
  refs.stopButton.setAttribute('disabled', true);
}
