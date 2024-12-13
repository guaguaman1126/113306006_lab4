// 獲取所有的鼓按鈕
const drumButtons = document.querySelectorAll('.drum');

// 定義鼓聲對應的音頻文件
const sounds = {
  w: 'sounds/crash.mp3',
  a: 'sounds/kick-bass.mp3',
  s: 'sounds/snare.mp3',
  d: 'sounds/tom-1.mp3',
  j: 'sounds/tom-2.mp3',
  k: 'sounds/tom-3.mp3',
  l: 'sounds/tom-4.mp3'
};

// 處理按鈕點擊事件
drumButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonInnerHTML = button.innerHTML;
    playSound(buttonInnerHTML);
    animateButton(button);
  });
});

// 處理鍵盤按下事件
document.addEventListener('keydown', (event) => {
  playSound(event.key.toLowerCase());
  const buttonElement = document.querySelector(`.${event.key.toLowerCase()}`);
  if (buttonElement) {
    animateButton(buttonElement);
  }
});

// 播放鼓聲
function playSound(key) {
  const audio = new Audio(sounds[key]);
  audio.play();
}

// 按鈕動畫效果
function animateButton(button) {
  button.classList.add('pressed');
  setTimeout(() => {
    button.classList.remove('pressed');
  }, 100);
}


