const cluePauseTime = 333;
const nextClueWaitTime = 1000;

let clueHoldTime = 1000;
let pattern = [];
let progress = 0;
let isActive = false;
let isTonePlaying = false;
let volume = 0.5;
let guessCounter = 0;
let strikes = 3;

function StartGame() {
  Timer()
  progress = 0;
  isActive = true;
  strikes = 3;
  document.getElementById("strike1").classList.remove("hidden");
  document.getElementById("strike2").classList.remove("hidden");
  document.getElementById("strike3").classList.remove("hidden");
  document.getElementById("StartBtn").classList.add("hidden");
  document.getElementById("StopBtn").classList.remove("hidden");
  GenerateRandomSequence();
  PlayClueSequence();
}

function StopGame() {
  isActive = true;
  document.getElementById("StartBtn").classList.remove("hidden");
  document.getElementById("StopBtn").classList.add("hidden");
}

const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 523.3,
  6: 587.3,
  7: 659.3,
  8: 783.9,
  9: 880,
};

function GenerateRandomSequence() {
  for (let i = 1; i <= 10; ++i)
    pattern.push(Math.floor(Math.random() * 9) + 1);
}

function Timer() {
  let time = 180;
  var timer = setInterval(function () {
    if (time === 0) {
      clearInterval(timer);
      LoseGame();
    }
    else {
      document.getElementById("timer").innerHTML = time;
      time--;
    }
  }, 1000);
}

function PlayTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    StopTone();
  }, len);
}

function StartTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function StopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function LightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function ClearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function PlaySingleClue(btn) {
  if (isActive) {
    LightButton(btn);
    PlayTone(btn, clueHoldTime);
    setTimeout(ClearButton, clueHoldTime, btn);
  }
}

function PlayClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(PlaySingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime -= 10;
  }
}

function Guess(btn) {
  console.log("user guessed: " + btn);
  if (!isActive) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        WinGame();
      } else {
        progress++;
        PlayClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    document.getElementById(`strike${strikes}`).classList.add("hidden");
    --strikes;
    if (strikes === 0)
      LoseGame();
    else {
      if (strikes === 1)
        alert("Strike! You have " + strikes + " strike left.");
      else
        alert("Strike! You have " + strikes + " strikes left.");
      PlayClueSequence();
    }
  }
}

function LoseGame() {
  StopGame();
  alert("Game Over. You lost.");
}

function WinGame() {
  StopGame();
  alert("Game Over. You Won!");
}
