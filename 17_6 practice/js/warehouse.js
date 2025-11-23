import { navigateTo } from './main.js';
import { createTable } from './CreateTable.js';
import { renderTable } from './RenderTable.js';

export function loadWarehousePage(container) {
    container.textContent = '';

    const headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';

    const h1 = document.createElement('h1');
    h1.textContent = 'Склад';

    const addButton = document.createElement('button');
    addButton.textContent = 'Добавить запись';
    addButton.id = "addButton";
    addButton.addEventListener('click', () => navigateTo('addItem'));

    headerContainer.append(h1, addButton);
    container.appendChild(headerContainer);

    const { table, tbody } = createTable(renderTable);
    container.appendChild(table);

    renderTable(tbody);
}