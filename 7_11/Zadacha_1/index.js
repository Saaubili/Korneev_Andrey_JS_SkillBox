const booksList = document.querySelector('.BooksList');
const AddBookButton = document.querySelector('.AddBook');
const findBookButton = document.querySelector('.FindBook');
let booksArray = ["Идиот", "Скотный двор", "Мёртвые души"];


function showBooksArray(){
    for (let book of booksArray){
        let listItem = document.createElement("li")
        listItem.textContent = book
        booksList.append(listItem)
    }
}
showBooksArray()

function addBook() {
    const newBook = prompt("Введите название книги");
    if (newBook === "") {
        alert("Название книги не введено!");
        return
    }
    booksArray.push(newBook);
    const li = document.createElement("li");
    li.textContent = newBook;
    booksList.append(li);
}

function findIndexInArray(bookName){
    for (let i = 0; i < booksArray.length; i++){
        if (booksArray[i] === bookName){
            return i
        }
    }
    return -1
}

function findBook(){
    let bookName = prompt("Введите название книги")
    if (bookName === ""){
        alert("Название книги не введено!");
        return
    }
    let bookIndex = findIndexInArray(bookName)
    if (bookIndex === -1){
        alert("Книга не найдена!")
        return
    }
    document.querySelector(`li:nth-child(${bookIndex + 1})`).style.color = "red"
}

AddBookButton.onclick = addBook;
findBookButton.onclick = findBook;