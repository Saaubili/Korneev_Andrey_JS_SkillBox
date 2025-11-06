const list = document.querySelector('.list');
const addButton = document.querySelector('.addButton');
const removeButton = document.querySelector('.removeButton');

addButton.addEventListener('click', function() {
    const li = document.createElement('li');
    li.textContent = 'Новый элемент списка';
    list.appendChild(li);
});

removeButton.addEventListener('click', function() {
    const lastElement = list.lastElementChild;
    list.removeChild(lastElement);
});