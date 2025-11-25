function createProgressBar(time) {
  const duration = Math.max(time, 2);

  const bar = document.getElementById("progress-bar");
  bar.style.transform = "scaleX(0)";

  const timerEl = document.getElementById("timer");

  setTimeout(() => {
    bar.style.transition = `transform ${duration}s linear`;
    bar.style.transform = "scaleX(1)";
  }, 20);

  let secondsPassed = 0;
  timerEl.textContent = "0 с";

  const interval = setInterval(() => {
    secondsPassed++;
    if (secondsPassed <= duration) {
      timerEl.textContent = `${secondsPassed} с`;
    }
    else {
      clearInterval(interval);
    }
  }, 1000);
}

createProgressBar(5);