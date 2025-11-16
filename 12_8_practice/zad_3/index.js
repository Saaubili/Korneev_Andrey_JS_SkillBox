const promocodeArr = [
 {
   promocode: 'PROM10',
   gift: "Скидка 10%"
 },
 {
   promocode: 'PROM50',
   gift: "Скидка 50%"
 },
 {
   promocode: 'GIFT',
   gift: "Подарок в корзине"
 }
]

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

function applyPromocode(gift) {
    const oldMessage = document.querySelector(".correctMessage");
    if (oldMessage){
        oldMessage.remove();
    }
    const message = document.createElement('p');
    message.textContent = `Промокод применён. ${gift}`;
    message.className = "correctMessage";
    formDiv.append(message);
    formDiv.style.paddingTop = "20px";
}

const cookie = getCookie();
if (cookie.promocode) {
    for (let i = 0; i < promocodeArr.length; i++) {
        if (promocodeArr[i].promocode === cookie.promocode) {
            input.value = promocodeArr[i].promocode;
            applyPromocode(promocodeArr[i].gift);
            break;
        }
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value;
    let matched = false;

    for (let i = 0; i < promocodeArr.length; i++) {
        if (promocodeArr[i].promocode === value) {
            document.cookie = `promocode=${value}`;
            applyPromocode(promocodeArr[i].gift);
            matched = true;
            break;
        }
    }

    if (!matched) {
        const oldMessage = document.querySelector(".correctMessage");
        if (oldMessage){
            oldMessage.remove();
        }
        formDiv.style.paddingTop = "0px";
    }
});