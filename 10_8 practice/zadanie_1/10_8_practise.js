const fullsize = document.querySelector('#fullsize');
const cat1 = document.querySelector('#cat1');
const cat2 = document.querySelector('#cat2');
const cat3 = document.querySelector('#cat3');

function showImage1() {
    const img = document.createElement('img');
    img.src = cat1.src;
    fullsize.replaceChildren(img);
}

function showImage2() {
    const img = document.createElement('img');
    img.src = cat2.src;
    fullsize.replaceChildren(img);
}

function showImage3() {
    const img = document.createElement('img');
    img.src = cat3.src;
    fullsize.replaceChildren(img);
}

cat1.addEventListener('click', showImage1);
cat2.addEventListener('click', showImage2);
cat3.addEventListener('click', showImage3);
