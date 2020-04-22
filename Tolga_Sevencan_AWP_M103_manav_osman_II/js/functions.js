// Function that adds products

function addProducts(pObject, id) {
    let products = document.querySelector(id);
    products.innerHTML = "";
    pObject.forEach(item => {
        let td = document.createElement("td");
        products.appendChild(td);
    });
}

function carryToOrders(pProducts, pOrders) {
    let productsList = document.querySelector('#shoppingList td');
    for (let i = 0; i < productsList.length; i++) {
        productsList[i].addEventListener("click", function() {
            
        })
        
    }
}