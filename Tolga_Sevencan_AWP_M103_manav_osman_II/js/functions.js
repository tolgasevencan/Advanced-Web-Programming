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