/**
 * ANALYSE (user interaction)
 * Oncelikle hasta hayvan mesai saatleri icerisinde veterinere geliyor.
 * Gelen hasta hayvanin tur, isim, yas ve sahip ismi bilgileri alinip kaydedilmeli.
 * Hangi turun tedavi suresinin ne kadar oldugunu ve tedavi ucretinin ne kadar oldugunu biliyoruz.
 * Elimizde 4 adet veteriner bulunmaktadir. Bunlardan hasta kedinin tedavi olabilecegi 2 veteriner, hasta karganin tedavi olabilecegi veteriner ve hasta hamsinin tedavi olabilecegi iki veteriner bulunmaktadir.
 */

/**
 * Niyazi bey simulasyon icin degerleri hazirlar ve simulasyonu baslatir.
 * Program verilen degerlere gore rastgele hayvan (kedi, karga ve hamsi) ureterek uzman veterinere yonlendirir ve tedavi olan hayvani taburcu eder.
 * Simulasyon suresi bittiginde istenilen istatistikler data yapisi (model) uzerinden toparlanir.
 */

/**
 * Programda kullanacagim classlar (yukaridaki texte gore): Simulasyon, Hayvan, Veteriner, Istatistik, Queue (teknik sinif)
 * Tum sistemi adim adim ilerleten bir GAME LOOP(saniyeyi birim birim artiran yapi, oyun dongusu, setInterval) olmasi lazim. 
 * Bu Game Loop Simulasyon klasi tarafindan kullanilmasi gerekiyor. Hayvanlari rastgele ureten bir yapiya ihtiyac var (AnimalGenerator). 
 * Bu yapi hayvanlari uretipher hayvanin kendisine ait bekleme sirasina (queue, FIFO) yerlestirir. Daha sonra doktorlarin musait olma durumlarini test eden Simulasyon 
 * musait olan doktora kendi alanina gore bir hayvani bekleme sirasindan alir ve doktora tevdi eder. Ayni esnada diger veterinerlerinin tedavilerinin bitip bitmedigini
 * kontrol eder, bitenleri taburcu listesine ekler (array). 
 */

/**
 * TECHNICAL APPROACH
 */

const animalGenerator = new animalgenerator(2); // 2 saniyede bir degisik hayvanlar uretir
let minnos = new Kedi("isim", "sahibi", 4, 6, 100.0);

// const doctorGenerator = new DoctorGenerator(5); // 5 doktor uret
const istatistik = new istatistik();

const niyazi = new Doctor();
const cabbar = new Doctor();
const yasemin = new Doctor();
const eleni = new Doctor();

const simulation = new Simulation(180, [niyazi, cabbar, yasemin, eleni], animalGenerator, istatistik);




simulation.start(); // Hayvan uretme burada gerceklesiyor