const timer = document.querySelector('#time');
const start_btn = document.querySelector('#start_btn');
const stop_btn = document.querySelector('#stop_btn');
const reset_btn = document.querySelector('#reset_btn');

let time = 0,
  interval;

function showTime() {
  time += 1;
  timer.innerHTML = toHHMMSS(time);
}

function start() {
  interval = setInterval(showTime, 1000);
  hideBtn([start_btn]);
  showBtn([stop_btn, reset_btn]);
}

function stop() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    stop_btn.innerHTML = 'RESUME';
  } else {
    interval = setInterval(showTime, 1000);
    stop_btn.innerHTML = 'STOP';
  }
}

function reset() {
  clearInterval(interval);
  interval = null;
  stop_btn.innerHTML = 'STOP';
  time = 0;
  timer.innerHTML = toHHMMSS(time);
  hideBtn([stop_btn, reset_btn]);
  showBtn([start_btn]);
}

function toHHMMSS(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  hours = `${hours}`.padStart(2, '0');
  minutes = `${minutes}`.padStart(2, '0');
  seconds = `${seconds}`.padStart(2, '0');

  return hours + ':' + minutes + ':' + seconds;
}

function showBtn(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
}
function hideBtn(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'none'));
}
