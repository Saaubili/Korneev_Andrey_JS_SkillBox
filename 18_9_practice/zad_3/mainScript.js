const progress = (time, progressBarID, timerDiv) => {
    const bar = document.querySelector(progressBarID);
    bar.className = "progress-bar"
    const timerEl = document.querySelector(timerDiv);

    bar.style.transform = "scaleX(0)";


    setTimeout(() => {
        bar.style.transition = `transform ${time}s linear`;
        bar.style.transform = "scaleX(1)";
    }, 20);

    let secondsPassed = 0;
    timerEl.textContent = "0 с";

    const interval = setInterval(() => {
        secondsPassed++;
        if (secondsPassed <= time) {
            timerEl.textContent = `${secondsPassed} с`;
        }
        else {;
            clearInterval(interval);
        }
    }, 1000);

    return new Promise(resolve => setTimeout(resolve, time * 1000));
}


const catImages = [
    "cat1.jpg",
    "cat2.jpg",
    "cat3.jpg"
]

const dogImages = [
    "dog1.jpg",
    "dog2.jpg",
    "dog3.jpg"
]

function renderImages(containerId, photos) {
    const container = document.getElementById(containerId);
    photos.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo;
        container.appendChild(img);
    });
}

window.onload = () => {
    const catTime = Math.floor(Math.random() * (7 - 2 + 1)) + 2;
    const dogTime = Math.floor(Math.random() * (7 - 2 + 1)) + 2;

    progress(catTime, "#catProgressBar", "#catTimer").then(() => {
        renderImages("catImages", catImages);

        progress(dogTime, "#dogProgressBar", "#dogTimer").then(() => {
            renderImages("dogImages", dogImages);
        });
    });
}