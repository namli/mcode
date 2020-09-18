var state;
function setAlarm() {
  time = document.getElementById('alarmSet').valueAsNumber;
  indicator = document.getElementById('timeRemaining');
  state = 1;
  indicatorText = indicator.innerText.split(' ');
  indicatorText = indicatorText[0] + ' ' + indicatorText[1];
  timeToAlarm = time;

  let timer = setInterval(() => {
    if (timeToAlarm === 0) {
      clearInterval(timer);
      playAlarm();
      state = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
    if (state != 2) {
      console.log(state);
      indicator.innerText = indicatorText + ' ' + new Date(timeToAlarm * 1000).toISOString().substr(11, 8);
      timeToAlarm = timeToAlarm - 1;
    }
  }, 1000);

  document.getElementById("stop").addEventListener("click", () => {
    document.querySelector('body').style.backgroundColor = 'white';
    state = 0;
    document.getElementById('alarmSet').value = '';
    clearInterval(timer);
    indicator.innerText = indicatorText + ' 00:00';
  });

  document.getElementById("pause").addEventListener("click", (e) => {
    console.log(state);
    if (state === 1) {
      state = 2;
      e.target.innerText = 'Play';
    } else if (state === 2) {
      state = 1;
      e.target.innerText = 'Pause';
    }
  });
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
