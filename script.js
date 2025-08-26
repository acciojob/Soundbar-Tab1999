//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('stop')) {
      stopSounds();
    } else {
      playSound(btn.innerText);
    }
  });
});

function playSound(sound) {
  stopSounds();
  const audio = new Audio(`sounds/${sound}.mp3`);
  audio.play();
  currentAudio = audio; 
}

let currentAudio = null;

function stopSounds() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}
