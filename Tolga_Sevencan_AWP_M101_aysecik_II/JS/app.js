let yaziIleSayiAdedi = kacAdetSayi();
output("<strong>Aysecik</strong> &nbsp" + yaziIleSayiAdedi + "&nbsp <strong>sayi girecek!</strong>");
output("<br><br>");

let yaziIleSayilar = yaziIleGirilenSayilar();
output("Girilen sayilar listesi(yazi ile): " + yaziIleSayilar);
output("<br><br>");

let rakamSayiListesi = rakamaCevir();
output("Girilen sayilar listesi(sayi ile): " + rakamSayiListesi);
output("<br><br>");

output("Girilen sayilar toplami: " + listeToplam(listeTopla));
output("<br><br>");
output("Girilen sayilar ortalamasi: " + listeToplam(rakamIleSayiListesi)/rakamIleSayiListesi.length);
output("<br><br>");
output("Girilen sayilar carpimi: " + listeCarpim(rakamIleSayiListesi));
output("<br><br>");
output("Girilen sayilarin en kucugu: " + listeMin);
output("<br><br>");
output("Girilen sayilarin en buyugu: " + listeMax);
output("<br><br>");
