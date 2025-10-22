const cart = document.querySelector('#cart')

function addToCart(productName){
    let listItem = document.createElement("li")
    let product = document.createElement("span")
    product.textContent = productName
    listItem.append(product)
    cart.append(listItem)
}