function playSound(url) {
  const audio = new Audio(url);
  audio.play();
}
<button onclick="playSound('https://your-file.mp3');">Play</button>;

// will come in handy ;)
