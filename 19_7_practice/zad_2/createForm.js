export function createForm(card) {
    const formDiv = document.createElement("div");
    formDiv.className = "formDiv"

    const modal = document.createElement("div");
    modal.className = "modalWindow"

    const modalText = document.createElement('h2');
    modalText.textContent = "Изменить"
    modal.append(modalText)


    const closeButton = document.createElement("button");
    closeButton.textContent = "×";
    closeButton.className = "closeButton";
    closeButton.type = "button";
    closeButton.addEventListener("click", () => {
        formDiv.remove();
    });

    modal.append(closeButton);
    

    const form = document.createElement("form");

    const nameInput = document.createElement("input");
    nameInput.value = card._name

    const addresInput = document.createElement("input");
    addresInput.value = card._address

    const distanceInput = document.createElement("input");
    distanceInput.value = card._distance


    const statusSelect = document.createElement("select");

    const statuses = [
        { value: "delivery", text: "Доставляется" },
        { value: "delivered", text: "Доставлен" },
        { value: "canceled", text: "Отменён" }
    ];

    statuses.forEach(s => {
        const option = document.createElement("option");
        option.value = s.value;
        option.textContent = s.text;
        if (s.value === card._status) {
            option.selected = true;
        }
        statusSelect.append(option);
    });

    const saveButton = document.createElement("button");
    saveButton.textContent = "Сохранить"
    saveButton.className = "saveButton"
    saveButton.type = "submite";
    saveButton.addEventListener("click", () => {
        card.name = nameInput.value;
        card.address = addresInput.value;
        card.distance = distanceInput.value;
        card.status = statusSelect.value;

        formDiv.remove();
    });
    form.append(nameInput, addresInput, distanceInput, statusSelect, saveButton);
    modal.append(form);
    formDiv.append(modal);
    document.body.append(formDiv);
}