let sayilar = ["sifir", "bir", "iki", "uc", "dort", "bes", "alti", "yedi", "sekiz", "dokuz"];

let girilenSayi = sayiGir();
output("Aysecik'in girdigi sayi: " + girilenSayi);
output("<br><br>");


let cikartmaSonucu = cikartmaIslemi(girilenSayi, 10);
output("Cikarma Islemi Sonucu = " + cikartmaSonucu);
output("<br><br>");


output("Aysecik bak sonuc: " + sayilar[cikartmaSonucu]);