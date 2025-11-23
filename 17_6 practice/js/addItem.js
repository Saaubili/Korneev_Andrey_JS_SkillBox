import { addItem } from './storage.js';
import { navigateTo } from './main.js';

export function loadAddItemPage(container) {
    container.textContent = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'Добавить запись';
    h1.id = "addForm"
    container.appendChild(h1);

    const form = document.createElement('form');
    form.id = 'addForm';

    const fields = [
        { name: 'name', placeholder: 'Название', type: 'text' },
        { name: 'shelf', placeholder: 'Полка', type: 'text' },
        { name: 'weight', placeholder: 'Вес', type: 'number' },
        { name: 'storageTime', type: 'date' }
    ];

    fields.forEach(f => {
        const input = document.createElement('input');
        input.name = f.name;
        input.type = f.type;
        input.placeholder = f.placeholder;
        input.required = true;
        form.appendChild(input);
    });

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Добавить';
    form.appendChild(submitBtn);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {};
        fields.forEach(f => {
            const value = form.elements[f.name].value;
            formData[f.name] = value;
        });
        addItem(formData);
        navigateTo('warehouse');
    });

    container.appendChild(form);
}