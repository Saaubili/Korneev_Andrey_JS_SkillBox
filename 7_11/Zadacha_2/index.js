const heightsList = document.querySelector('.HeightsList');
const addHeightButton = document.querySelector('.AddHeight');
const filterHeightButton = document.querySelector('.FilterHeight');

let heightsArray = [150, 165, 172, 180, 158];

function showHeights(array = heightsArray){
    heightsList.innerHTML = ""
    for (let height of array){
        let li = document.createElement("li");
        li.textContent = height;
        heightsList.append(li);
    }
}

showHeights();


function filter(filterHeight){
    newArray = []
    for (let studentHeight of heightsArray){
        if (studentHeight >= filterHeight) {
            newArray.push(studentHeight)
        }
    }
    return newArray
}

function addHeight() {
    let newHeight = prompt("Введите рост ученика");
    if (newHeight === "") {
        alert("Рост не введён!");
        return;
    }
    heightsArray.push(newHeight);
    showHeights()
}

function filterHeight() {
    let minHeight = prompt("Введите рост для фильтрации");
    if (minHeight === "") {
        showHeights();
        return;
    }
    const filteredArray = filter(minHeight);
    showHeights(filteredArray);
}

addHeightButton.onclick = addHeight;
filterHeightButton.onclick = filterHeight;