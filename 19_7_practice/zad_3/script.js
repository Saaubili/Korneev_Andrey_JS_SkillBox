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

const totalButtonContainer = document.createElement("div");
totalButtonContainer.className = "totalButtonContainer";

const totalButton = document.createElement("button");
totalButton.textContent = "Суммарное расстояние";
totalButton.className = "totalButton";

const totalDisplay = document.createElement("p");
totalDisplay.className = "totalDisplay";

totalButton.addEventListener("click", () => {
    const totalDistance = EditDelivery.getTotalDistance(deliveryArray);
    totalDisplay.textContent = `Общее расстояние: ${totalDistance} км`;
});

totalButtonContainer.append(totalButton, totalDisplay);
mainDiv.after(totalButtonContainer);
