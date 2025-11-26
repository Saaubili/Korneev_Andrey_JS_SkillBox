import EditDelivery from "./EditDelivery.js"

const deliveryArray = [
    new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
    new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
    new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled")
]

const mainDiv = document.querySelector("#app")

deliveryArray.forEach(delivery => {
    mainDiv.append(delivery.createCard())
})