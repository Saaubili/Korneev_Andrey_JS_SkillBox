const progress = (time, progressBarId, timerId) => {
  const duration = Math.max(time, 2);
  const bar = document.getElementById(progressBarId);
  const timerEl = document.getElementById(timerId);

  bar.style.transition = "none";
  bar.style.transform = "scaleX(0)";
  timerEl.textContent = "";

  setTimeout(() => {
    bar.style.transition = `transform ${duration}s linear`;
    bar.style.transform = "scaleX(1)";
  }, 20);

  let sec = 0;
  timerEl.textContent = "0 c";

  const t = setInterval(() => {
    sec++;
    if (sec <= duration) timerEl.textContent = `${sec} c`;
    else clearInterval(t);
  }, 1000);
};

const getCats = () => {
  return new Promise(resolve => {
    const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
    setTimeout(() => {
      resolve([
        "cat1.jpg",
        "cat2.jpg",
        "cat3.jpg"
      ]);
    }, delay);

    getCats.time = delay / 1000;
  });
};

const getDogs = () => {
  return new Promise(resolve => {
    const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
    setTimeout(() => {
      resolve([
        "dog1.jpg",
        "dog2.jpg",
        "dog3.jpg"
      ]);
    }, delay);

    getDogs.time = delay / 1000;
  });
};

const renderImages = (placeId, photos) => {
  const block = document.getElementById(placeId);
  photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo;
    block.appendChild(img);
  });
};

const start = async () => {
  const catsPromise = getCats();
  progress(getCats.time, "progress-bar-cats", "timer-cats");
  const cats = await catsPromise;
  renderImages("cats", cats);

  const dogsPromise = getDogs();
  progress(getDogs.time, "progress-bar-dogs", "timer-dogs");
  const dogs = await dogsPromise;
  renderImages("dogs", dogs);
};

start();
