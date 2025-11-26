export default class Delivery {
    constructor(name, address, distance) {
        this._name = name
        this._address = address
        this._distance = distance
    }

    get name() {
        return this._name
    }
    
    set name(value) {
        this._name = value
        if (this.card) {
            this.card.querySelector(".nameValue").textContent = value
        }
    }

    get address() {
        return this._address
    }

    set address(value) {
        this._address = value
        if (this.card) {
            this.card.querySelector(".addressValue").textContent = value
        }
    }

    get distance() {
        return this._distance
    }

    set distance(value) {
        this._distance = value
        if (this.card) {
            this.card.querySelector(".distanceValue").textContent = `${value} км`
        }
    }

    createCard() {
        const card = document.createElement("div")
        card.className = "card"

        const nameDiv = document.createElement("div")
        const addresDiv = document.createElement("div")
        const distanceDiv = document.createElement("div")

        this.createDivAndLabel("Имя", this._name, nameDiv, "nameValue")
        this.createDivAndLabel("Адрес", this._address, addresDiv, "addressValue")
        this.createDivAndLabel("Расстояние", this._distance, distanceDiv, "distanceValue")

        card.append(nameDiv)
        card.append(addresDiv)
        card.append(distanceDiv)

        this.card = card
        return card
    }

    createDivAndLabel(labelText, field, mainDiv, valueClass) {
        const label = document.createElement("label")
        label.textContent = labelText

        const variable = document.createElement("p")
        variable.className = valueClass
        if (valueClass !== "distanceValue") {
            variable.textContent = field
        } else {
            variable.textContent = `${field} км`
        }

        mainDiv.append(label)
        mainDiv.append(variable)
    }
}
