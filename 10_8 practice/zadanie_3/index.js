const prices = [100, 500, -123, -123123250, 321300, 0];
const list = document.querySelector('.price-list');
const sortAscButton = document.querySelector('.sort-asc');
const sortDescButton = document.querySelector('.sort-desc');

function showPrices(arr) {
    list.innerHTML = '';
    arr.forEach(price => {
        const li = document.createElement('li');
        li.textContent = price;
        list.appendChild(li);
    });
}

function sortAscending() {
    const sorted = [...prices].sort((a, b) => a - b);
    showPrices(sorted);
}

function sortDescending() {
    const sorted = [...prices].sort((a, b) => b - a);
    showPrices(sorted);
}

sortAscButton.addEventListener('click', sortAscending);
sortDescButton.addEventListener('click', sortDescending);

showPrices(prices);