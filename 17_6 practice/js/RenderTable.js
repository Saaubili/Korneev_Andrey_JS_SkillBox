import { getItems, deleteItem } from './storage.js';

export function renderTable(tbody, sortKey = null) {
    const items = getItems().slice();

    if (sortKey) {
        items.sort((a, b) => a[sortKey] > b[sortKey] ? 1 : -1);
    }

    tbody.textContent = '';

    items.forEach((item, index) => {
        const tr = document.createElement('tr');

        const tdName = document.createElement('td');
        tdName.textContent = item.name;
        tr.appendChild(tdName);

        const tdShelf = document.createElement('td');
        tdShelf.textContent = item.shelf;
        tr.appendChild(tdShelf);

        const tdWeight = document.createElement('td');
        tdWeight.textContent = item.weight;
        tr.appendChild(tdWeight);

        const tdTime = document.createElement('td');
        tdTime.textContent = item.storageTime;
        tr.appendChild(tdTime);

        const tdActions = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.className = "deleteButton"
        deleteButton.textContent = 'Удалить';

        deleteButton.addEventListener('click', () => {
            deleteItem(index);
            renderTable(tbody, sortKey);
        });

        tdActions.appendChild(deleteButton);
        tr.appendChild(tdActions);

        tbody.appendChild(tr);
    });
}