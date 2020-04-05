// Output function
function output(data) {
    let output = document.getElementById("result");
    output.innerHTML += data;
}

// Solving functions
function kacAdetSayi() {
    return prompt("Kac tane sayi gireceksin Aysecik?");
}

function yaziIleSayiListesiOlustur() {
    let yaziIleSayiListesi = [];
    for (let i = 0; i < rakamIleSayiAdedi; i++) {
        let sayiGir = prompt("Aysecik sayi gir");
        yaziIleSayiListesi.push(sayiGir);
    }
    return yaziIleSayiListesi;
}

let listeToplam = rakamIleSayiListesi => rakamIleSayiListesi.reduce((a, b) => a + b, 0);

function sayiOrtalama() {
    return rakamToplam / rakamIleSayiListesi.length;
}

let listeCarpim = rakamIleSayiListesi => rakamIleSayiListesi.reduce((a, b) => a * b, 0);