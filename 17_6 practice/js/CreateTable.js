export function createTable(renderTable) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const headers = [
        { key: 'name', label: 'Название' },
        { key: 'shelf', label: 'Полка' },
        { key: 'weight', label: 'Вес' },
        { key: 'storageTime', label: 'Время хранения' },
        { key: 'actions'}
    ];

    const tbody = document.createElement('tbody');

    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header.label;

        if (header.key !== 'actions') {
            th.dataset.key = header.key;
            th.className = 'sortable'
            th.addEventListener('click', () => renderTable(tbody, header.key));
        }

        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);
    table.appendChild(tbody);

    return { table, tbody };
}
