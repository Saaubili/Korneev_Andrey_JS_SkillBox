export function createProgressBar(time, mainDivId) {
  const duration = Math.max(time, 2);

  const bar = document.createElement('div');
  bar.className = "progress-bar"
  bar.style.transition = "none";
  bar.style.transform = "scaleX(0)";

  const timerEl = document.createElement('div');


  timerEl.textContent = "";

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