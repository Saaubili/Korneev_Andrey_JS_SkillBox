const itemsList = document.querySelector('.ItemsList');
const addItemButton = document.querySelector('.AddItem');

let itemsArray = ["Яблоко", "Банан", "Апельсин", "Груша"];


function sortArray(originalArray){
    for (let i = 0; i < originalArray.length; i++ ){
        for (let j = 0; j < originalArray.length - 1; j++){
            if (originalArray[j] > originalArray[j + 1]){
                let temp = originalArray[j]
                originalArray[j] = originalArray[j+1]
                originalArray[j+1] = temp
            }
        }
    }
    return originalArray
}

function showItems(){
    itemsList.innerHTML = ""; 
    const sortedArray = sortArray(itemsArray);
    for (let item of sortedArray){
        let li = document.createElement("li");
        li.textContent = item;
        itemsList.append(li);
    }
}

showItems();

function addItem() {
    let newItem = prompt("Введите название товара");
    if (newItem === "") {
        alert("Название товара не введено!");
        return;
    }
    itemsArray.push(newItem);
    showItems();
}

addItemButton.onclick = addItem;