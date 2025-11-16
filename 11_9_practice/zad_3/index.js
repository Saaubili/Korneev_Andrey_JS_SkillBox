const input = document.querySelector("#cardText");
const select = document.querySelector("#colorSelect");
const card = document.querySelector("#card");


input.addEventListener("input", () => {
    card.textContent = input.value;
});


input.addEventListener("focus", () => {
    input.style.background = "rgba(214, 214, 214, 1)";
    input.style.border = "2px solid grey";
});


input.addEventListener("blur", () => {
    input.style.background = "";
    input.style.border = "";
});


select.addEventListener("change", () => {
    card.style.background = select.value;
});
