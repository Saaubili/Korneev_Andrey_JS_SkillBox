const promocodeObj = {
    promocode: "PROM50",
    gift: "Скидка 50%"
};

const form = document.querySelector('form');
const input = document.querySelector('input');
const formDiv = document.querySelector('.promocode');

function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [name, value] = item.split('=')
        acc[name] = value
        return acc
    }, {})
}

function applyPromocode() {
    const oldMessage = document.querySelector(".correctMessage");

    if (oldMessage){
        oldMessage.remove();
    }
    const message = document.createElement('p');
    message.textContent = `Промокод применён. Скидка 50%`;
    message.className = "correctMessage";

    formDiv.append(message);
    formDiv.style.paddingTop = "20px";
}

const cookie = getCookie();

if (cookie.promocode === promocodeObj.promocode) {
    input.value = cookie.promocode;
    applyPromocode();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value;

    if (value === promocodeObj.promocode) {
        document.cookie = `promocode=${value}`;
        applyPromocode();
    } else {
        const oldMessage = document.querySelector(".correctMessage");
        if (oldMessage){
            oldMessage.remove();
        }
        formDiv.style.paddingTop = "0px";
    }
});