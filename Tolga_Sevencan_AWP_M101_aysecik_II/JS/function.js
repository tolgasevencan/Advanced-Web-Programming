// Output function
function output(data) {
    let output = document.getElementById("output");
    output.innerHTML += data;
}

// Solving functions
function kacAdetSayi() {
    return prompt("Aysecik kac sayi gireceksin?");
}

let liste = [];
function yaziIleGirilenSayilar () {
    let gir = prompt("Sayilari gir Ayse!");
    liste.push(gir);
}

console.log(liste);



/*
let sayiListesi2 = [sayiListesi.indexOf("sifir"), sayiListesi.indexOf("bir"), sayiListesi.indexOf("iki")];


// Arrow functions
let listeToplam = sayiListesi2 => sayiListesi2.reduce((a,b) => a + b, 0);

let listeCarpim = sayiListesi2 => sayiListesi2.reduce((a,b) => a*b);

//Min Max Functions 
let listeMin = Math.min(...sayiListesi2);

let listeMax = Math.max(...sayiListesi2);
*/