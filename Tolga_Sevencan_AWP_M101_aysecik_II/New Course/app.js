//let output = document.getElementById("output");

//output.innerHTML = "Sayi";

let isimler = bilgiAl("Lutfen isim gir");

let isimlerArrayi = isimler.split(" ");

for (let index = 0; index < isimlerArrayi.length; index++) {
    const element = isimlerArrayi[index];
    isimlerArrayi[index] = "Hosgeldiniz" + element + "!";
}

ekranaYaz(isimlerArrayi.join("<br>"));

// join tam olaray arrayi stringe cevirir