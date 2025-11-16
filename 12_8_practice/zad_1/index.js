const giftArr = [
  {
    title: "Скидка 20% на первую покупку в нашем магазине!",
    icon: "img/1.jpg"
  },
  {
    title: "Скидка 10% на всё!",
    icon: "img/2.jpg"
  },
  {
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "img/gift.jpg"
  },
  {
    title: "Бесплатная доставка для вас!",
    icon: "img/truck.jpg"
  },
  {
    title: "Сегодня день больших скидок!",
    icon: "img/3.jpg"
  }
]

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createRandomPopUp() {
  const popUpDiv = document.createElement("div")
  popUpDiv.className = "popUpCard"
  document.body.append(popUpDiv)

  const randomPopUp = giftArr[randomNumberInRange(0, 4)]

  const giftImage = document.createElement("img");
  giftImage.src = randomPopUp.icon
  popUpDiv.appendChild(giftImage)

  const wrapper = document.createElement("div")
  wrapper.className = "popUpContentWrapper"
  popUpDiv.appendChild(wrapper)

  const giftText = document.createElement("p");
  giftText.textContent = randomPopUp.title
  wrapper.appendChild(giftText)

  const popUpButton = document.createElement("button");
  popUpButton.textContent = "Отлично!";

  popUpButton.addEventListener("click", function() {
    popUpDiv.remove()
})

  wrapper.appendChild(popUpButton)
}


setTimeout(() => createRandomPopUp(), 3000)