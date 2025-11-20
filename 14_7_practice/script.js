let editIndex = null;

function handleFormatSubmit(e){
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;
    const releaseYear = document.querySelector('#releaseYear').value;
    const isWatched = document.querySelector('#isWatched').checked;

    if (!title || !genre || !releaseYear) {
        alert("Пожалуйста, заполните все обязательные поля!");
        return;
    }

    if (releaseYear < 0) {
        alert("Пожалуйста, введите корректный год!");
        return;
    }

    const films = JSON.parse(localStorage.getItem("films")) || [];
    films.push({ title, genre, releaseYear, isWatched });
    localStorage.setItem("films", JSON.stringify(films));

    renderTable();
    document.querySelector('#film-form').reset();
}

function enterEditMode(index, film){
    editIndex = index;

    document.querySelector('#title').value = film.title;
    document.querySelector('#genre').value = film.genre;
    document.querySelector('#releaseYear').value = film.releaseYear;
    document.querySelector('#isWatched').checked = film.isWatched;

    const addButton = document.querySelector('#submitButton');
    addButton.style.display = 'none';

    const updateButton = document.createElement('button');
    updateButton.textContent = 'Обновить';
    updateButton.style.display = "block";
    updateButton.id = "update_button";

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Отменить редактирование';
    cancelButton.style.display = "block";
    cancelButton.id = "cancel_button";

    addButton.parentNode.appendChild(updateButton);
    addButton.parentNode.appendChild(cancelButton);

    updateButton.addEventListener('click', handleUpdate);
    cancelButton.addEventListener('click', cancelEdit);
}

function handleUpdate(){
    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;
    const releaseYear = document.querySelector('#releaseYear').value;
    const isWatched = document.querySelector('#isWatched').checked;

    if (!title || !genre || !releaseYear) {
        alert("Пожалуйста, заполните все обязательные поля!");
        return;
    }

    if (releaseYear < 0) {
        alert("Пожалуйста, введите корректный год!");
        return;
    }

    const films = JSON.parse(localStorage.getItem("films")) || [];
    films[editIndex] = { title, genre, releaseYear, isWatched };
    localStorage.setItem("films", JSON.stringify(films));

    editIndex = null;
    renderTable();
    document.querySelector('#film-form').reset();

    document.getElementById('update_button').remove();
    document.getElementById('cancel_button').remove();
    document.querySelector('#submitButton').style.display = '';
}

function cancelEdit(){
    editIndex = null;

    document.querySelector('#film-form').reset();

    const updateButton = document.getElementById('update_button');
    const cancelButton = document.getElementById('cancel_button');

    if (updateButton){
        updateButton.remove();
    }
    if (cancelButton){
        cancelButton.remove();
    }

    document.querySelector('#submitButton').style.display = '';
}

function renderTable(){
    const films = JSON.parse(localStorage.getItem('films')) || [];
    const filmTableBody = document.querySelector('#film-tbody');

    filmTableBody.innerHTML = "";

    films.forEach(function(film, index){
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.releaseYear}</td>
            <td>${film.isWatched ? 'Да' : 'Нет'}</td>
            <td>
                <button class="edit_button">Редактировать</button>
                <button class="delete_button">Удалить</button>
            </td>
        `;

        filmTableBody.appendChild(row);

        row.querySelector('.delete_button').addEventListener('click', function(){
            films.splice(index, 1);
            localStorage.setItem('films', JSON.stringify(films));

            if (editIndex !== null) cancelEdit();
            renderTable();
        });

        row.querySelector('.edit_button').addEventListener('click', function(){
            enterEditMode(index, film);
        });
    });
}

document.querySelector('#film-form').addEventListener("submit", handleFormatSubmit);
renderTable();