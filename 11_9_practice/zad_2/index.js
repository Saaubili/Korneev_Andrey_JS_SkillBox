const form = document.querySelector('form');

const errorMessage = document.createElement("p");
errorMessage.style.color = "red";


form.append(errorMessage);

let table

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#productName").value;
    const weight = parseFloat(document.querySelector("#weight").value);
    const distance = parseFloat(document.querySelector("#distance").value);

    if (weight <= 0 || distance <= 0) {
        errorMessage.textContent = "Пожалуйста, введите корректные значения для веса и расстояния";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";

    if (!table) {
        table = document.createElement("table");
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Название товара</th>
                    <th>Вес (кг)</th>
                    <th>Расстояние (км)</th>
                    <th>Стоимость доставки</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        errorMessage.after(table);
    }

    const cost = (weight * distance) / 10;

    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${name}</td>
    <td>${weight}</td>
    <td>${distance}</td>
    <td>${cost.toFixed(2)} руб.</td>
    `;


    table.querySelector("tbody").appendChild(row);

    form.reset();
});