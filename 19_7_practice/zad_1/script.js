import Delivery from "./classCreation.js"

const deliveryArray = [
  new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new Delivery("Дмитрий", "ул. Задачная, д. 7", 3),
  new Delivery("Оля", "ул. Ткачей, д. 43", 11)
]

const mainDiv = document.querySelector("#app")

deliveryArray.forEach(delivery => {
  mainDiv.append(delivery.createCard())
})