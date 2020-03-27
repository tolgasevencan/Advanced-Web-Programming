let urunler = ["Ananas", "Biber", "Domates", "Muz"];

let kapVitrin = document.querySelector('.kapVitrin');

let ulVitrin = document.createElement('ul');

document.body.appendChild(kapVitrin);
kapVitrin.appendChild(ulVitrin);

for (let i=0; i<urunler.length; i++) {
    let li = document.createElement('li');
    ulVitrin.appendChild(li);
    li.innerHTML=li.innerHTML + urunler[i];
};

let kapSepet = document.querySelector('.kapSepet');

let ulSepet = document.createElement('ul');

document.body.appendChild(kapSepet);
kapSepet.appendChild(ulSepet);

for (let i=0; i<urunler.length; i++) {
    let li = document.createElement('li');
    ulSepet.appendChild(li);
    li.innerHTML=li.innerHTML;
};

$('.kapVitrin').on('click', function() {
    $(this).appendTo('.kapSepet');
})

