let urunler = ["Ananas", "Biber", "Domates", "Muz"];

let vitrin = document.querySelector('#vitrin');

let ulVitrin = document.createElement('ul');

document.body.appendChild(vitrin);
vitrin.appendChild(ulVitrin);

for (let i=0; i<urunler.length; i++) {
    let li = document.createElement('li');
    ulVitrin.appendChild(li);
    li.innerHTML=li.innerHTML + urunler[i];
};



$('.kapVitrin').on('click', function() {
    $(this).appendTo('#sepet');
    $('.kapVitrin>.vitrin').appendTo('#sepet');
})

