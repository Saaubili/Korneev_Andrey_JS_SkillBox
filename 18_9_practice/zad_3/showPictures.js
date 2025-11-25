function getCatImages() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;

    setTimeout(() => {
      resolve([
        "cat1.jpg",
        "cat2.jpg",
        "cat3.jpg"
    ]);
    }, delay);
  });
}

function getDogImages() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;

    setTimeout(() => {
      resolve([
        "dog1.jpg",
        "dog2.jpg",
        "dog3.jpg"
    ]);
    }, delay);
  });
}


function renderImages(containerId, photos) {
  const container = document.getElementById(containerId);

  photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo;
    container.appendChild(img);
  });
}

window.onload = () => {
  getCatImages().then((images) => {
    renderImages("cats", images);
  });

  getDogImages().then((images) => {
    renderImages("dogs", images);
  });
};
