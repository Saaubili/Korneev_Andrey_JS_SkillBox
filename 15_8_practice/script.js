function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const releaseYear = document.getElementById("releaseYear").value;
  const isWatched = document.getElementById("isWatched").checked;

  const film = {
    title: title,
    genre: genre,
    releaseYear: releaseYear,
    isWatched: isWatched,
  };

  addFilm(film);
}

async function addFilm(film) {
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "ovikdevil@gmail.com",
    },
    body: JSON.stringify(film),
  });
  renderTable();
}

async function renderTable() {
  const filterTitle = document.getElementById("filterTitle").value;
  const filterGenre = document.getElementById("filterGenre").value;
  const filterYear = document.getElementById("filterYear").value;
  const filterWatched = document.getElementById("filterWatched").value;

  const params = new URLSearchParams();
  if (filterTitle){
     params.append("title", filterTitle);
  }
  if (filterGenre){
     params.append("genre", filterGenre);
  }
  if (filterYear){
     params.append("releaseYear", filterYear);
  }
  if (filterWatched === "true"){
     params.append("isWatched", "true");
  }
  if (filterWatched === "false"){
     params.append("isWatched", "false");
  }

  const filmsResponse = await fetch(`https://sb-film.skillbox.cc/films?${params.toString()}`, {
    method: "GET",
    headers:{
       email: "ovikdevil@gmail.com"
      },
  });
  const films = await filmsResponse.json();

  const filmTableBody = document.getElementById("film-tbody");

  const deleteFilmButton = document.createElement("button");

  filmTableBody.innerHTML = "";

  films.forEach((film, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
    `;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.className = "deleteFilmButton";
    deleteButton.addEventListener("click", () => deleteFilm(film.id));

    const buttonCell = document.createElement("td");
    buttonCell.appendChild(deleteButton);
    row.appendChild(buttonCell);

    filmTableBody.appendChild(row);
  });
}

async function deleteFilm(id) {
  await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
    method: "Delete",
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  renderTable();
}


async function deleteAllFilsm() {
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "Delete",
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  renderTable();
}

document
  .getElementById("film-form")
  .addEventListener("submit", handleFormSubmit);

document.querySelector('#deleteAllButton').addEventListener("click", deleteAllFilsm)
document.querySelector("#filterTitle").addEventListener("input", renderTable);
document.querySelector("#filterGenre").addEventListener("input", renderTable);
document.querySelector("#filterYear").addEventListener("input", renderTable);
document.querySelector("#filterWatched").addEventListener("change", renderTable);

renderTable();