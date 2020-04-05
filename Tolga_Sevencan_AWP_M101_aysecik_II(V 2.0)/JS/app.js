//Sayilar dizisi
let sayilar = ["sifir", "bir", "iki", "uc", "dort", "bes", "alti", "yedi", "sekiz", "dokuz", "on", "onbir", "oniki", "onuc", "ondort", "onbes", ];

let sayiEsleri = {
    "sifir": 0,
    "bir": 1,
    "iki": 2,
    "uc": 3,
    "dort": 4,
    "bes": 5,
    "alti": 6,
    "yedi": 7,
    "sekiz": 8,
    "dokuz": 9,
    "on": 10,
    "onbir": 11,
    "oniki": 12,
    "onuc": 13,
    "ondort": 14,
    "onbes": 15
};

let yaziIleSayiAdedi = kacAdetSayi();
output("Aysecik &nbsp" + yaziIleSayiAdedi + "&nbsp adet sayi girecek!");
output("<br><br>");

let rakamIleSayiAdedi = sayilar.indexOf(yaziIleSayiAdedi);
output("Aysecik &nbsp" + rakamIleSayiAdedi + "&nbsp adet sayi girecek!");
output("<br><br>");

let yaziIleSayiListesi = yaziIleSayiListesiOlustur();
output("Aysecik'in <strong>yazi</strong> ile sayi listesi:" + yaziIleSayiListesi);
output("<br><br>");

let rakamIleSayiListesi = yaziIleSayiListesi.map(function (pSayi) {
    return sayiEsleri[pSayi];
});
output("Aysecik'in <storng>rakam</strong> ile sayi listesi:" + rakamIleSayiListesi);
output("<br><br>");

let rakamToplam = listeToplam(rakamIleSayiListesi);
output("Girilen sayilar <strong>rakam</strong> toplami: &nbsp" + rakamToplam);
output("<br><br>");

let yaziToplam = sayilar[rakamToplam];
output("Girilen sayilar <strong>yazi</strong> toplami: &nbsp" + yaziToplam)
output("<br><br>");

let girilenSayilarRakamOrtalamasi = sayiOrtalama();
output("Girilen sayilar <strong>rakam</strong> ortalamasi: " + girilenSayilarRakamOrtalamasi);
output("<br><br>");

let girilenSayilarYaziOrtalamasi = sayilar[girilenSayilarRakamOrtalamasi];
output("Girilen sayilar <strong>yazi</strong> ortalamasi: " + girilenSayilarYaziOrtalamasi);
output("<br><br>");

let sayilarRakamCarpimi = listeCarpim(rakamIleSayiListesi);
output("Girilen sayilar <strong>rakam</strong> carpimi: " + sayilarRakamCarpimi);
output("<br><br>");

let sayilarYaziCarpimi = sayilar[sayilarRakamCarpimi];
output("Girilen sayilar <strong>yazi</strong> carpimi: " + sayilarYaziCarpimi);
output("<br><br>");

let listeRakamMin = Math.min(...rakamIleSayiListesi);
output("Girilen sayilarin rakam <strong>en kucugu</strong>: " + listeRakamMin);
output("<br><br>");

let listeYaziMin = sayilar[listeRakamMin];
output("Girilen sayilarin yazi <strong>en kucugu</strong>: " + listeYaziMin);
output("<br><br>");

let listeRakamMax = Math.max(...rakamIleSayiListesi);
output("Girilen sayilarin rakam <strong>en buyugu</strong>: " + listeRakamMax);
output("<br><br>");

let listeYaziMax = sayilar[listeRakamMax];
output("Girilen sayilarin yazi <strong>en buyugu</strong>: " + listeYaziMax);
output("<br><br>");