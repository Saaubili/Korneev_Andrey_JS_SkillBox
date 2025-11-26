import Delivery from "./classCreation.js"
import { createForm } from "./createForm.js"

export default class EditDelivery extends Delivery {
    constructor(name, address, distance, status) {
        super(name, address, distance);
        this._status = status;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
        this.applyStatusCSS()
    }

    createEditMenuAndButton() {
        const editButton = document.createElement("button");
        editButton.textContent = "Изменить"
        editButton.className = "editButton"
        editButton.addEventListener("click", () => createForm(this))
        this.card.append(editButton)
    }

    createCard() {
        const card = super.createCard();
        this.applyStatusCSS()
        this.createEditMenuAndButton();
        return card;
    }

    applyStatusCSS() {
        if (this._status === "delivery") {
            this.card.classList.remove("deliveredCard", "canceledCard");
        }
        else if (this._status === "delivered") {
            this.card.classList.remove("canceledCard");
            this.card.classList.add("deliveredCard");
        }
        else if (this._status === "canceled") {
            this.card.classList.remove("deliveredCard");
            this.card.classList.add("canceledCard");
        }
    }
}