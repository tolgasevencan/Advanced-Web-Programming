// Function that adds products

function addProducts(pArray, id) {
    let products = document.querySelector(id);
    products.innerHTML = "";
    pArray.forEach(item => {
        let li = document.createElement("li");
        let liText = document.createTextNode(item);
        li.appendChild(liText);
        products.appendChild(li);
    });
}

// Function to carry products

function carryToOrders(pProducts, pOrders) {
    let productsList = document.querySelectorAll("#allProducts li");
    console.log(productsList.item(2));
    for (let i = 0; i < products.length; i++) {
        productsList[i].addEventListener("click", function () {
            let productsListItem = productsList[i].innerText;
            let index = pProducts.indexOf(productsListItem);
            pProducts.splice(index, 1);
            productsList[i].remove();
            pOrders.push(productsListItem);
            pOrders.sort();
            addProducts(pOrders, "#allOrders")
        });

    }
}