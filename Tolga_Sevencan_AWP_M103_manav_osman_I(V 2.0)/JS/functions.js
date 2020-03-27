let urunler = ["Ananas", "Biber", "Domates", "Muz"];

let kap = document.querySelector('#vitrin');

let ul = document.createElement('ul');

document.body.appendChild(kap);
kap.appendChild(ul);

for (let i=0; i<urunler.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML=li.innerHTML + urunler[i];
}