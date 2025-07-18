let timer;
let time = 0;

document.getElementById("start").addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(() => {
      time += 3;
      if (time > 30) {
        clearInterval(timer);
        timer = null;
        time = 30; // Set to exactly 30 when it reaches the limit
      }
      document.getElementById("display").innerText = time;
    }, 3000);
  }
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  // Don't reset time to 0, so it can resume from where it left off
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  time = 0;
  document.getElementById("display").innerText = time;
});
