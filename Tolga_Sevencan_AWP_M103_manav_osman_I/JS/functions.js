let products = ["Ananas", "Banana", "Cucumber", "Tomato"];


let productsList = document.createElement('div');
productsList.setAttribute('id', 'productsList');

let ul = document.createElement("ul");

document.body.appendChild(productsList);
productsList.appendChild(ul);

for (let i = 0; i < products.length; i++) {
    let li = document.createElement("li");

    ul.appendChild(li);
    li.innerHTML = li.innerHTML + products[i]
};


let productsList = document.createElement('div');
productsList.setAttribute('id', 'productsList');

let ul = document.createElement("ul");
document.body.appendChild(productsList);
productsList.appendChild(ul);

for (let i = 0; i < products.length; i++) {
    let li = document.createElement("li");

    ul.appendChild(li);
    li.innerHTML = li.innerHTML + products[i]
};