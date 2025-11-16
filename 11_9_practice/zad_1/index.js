const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    const resultBox = document.querySelector(".result")
    resultBox.innerHTML = ""

    event.preventDefault();


    const name = form.querySelector('#userName').value;
    const email = form.querySelector('#email').value
    const rating = form.querySelector('#rating').value;
    const comments = form.querySelector('textarea').value;
    const genderInput = form.querySelector('.genderRadio:checked');
    const gender = genderInput ? genderInput.value : "";


    const interestsArray = form.querySelectorAll('.interesetCheckBox:checked')
    const interestsValues = Array.from(interestsArray).map(el => el.value);


    const addToResult = (label, value) => {
        const p = document.createElement("p");
        p.textContent = `${label}: ${value}`;
        resultBox.append(p);
    };

    let header = document.createElement("h2")
    header.textContent = "Результаты опроса";
    resultBox.append(header)

    addToResult("Имя пользователя", name);
    addToResult("Email", email);
    addToResult("Пол", gender);
    addToResult("Оценка сервиса", rating);
    addToResult("Интересы", interestsValues.join(", "));
    addToResult("Комментарии", comments);
});
