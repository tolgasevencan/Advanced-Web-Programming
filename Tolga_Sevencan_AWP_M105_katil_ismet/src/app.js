/**
 * USER INTERACTION
 * We are asked to have a customer list that they want someone to be killed, when logged in to the application.
 * We are asked to view the orders (people to be killed) of a customer, when we click on any customer.
 * We are asked to see the order's address, when clicking on the order.
 * We are asked to put a checkbox in order to mark the orders fullfilled in the order list. The fulfilled order should be shown in the list in a faint manner.
 */

/**
 * TECHNICAL DETAILS
 * Icerisinde musterilerin oldugu bir musteri listemiz(+) olmali. Bunu modelin icerisinde bir musteri klasorune(+) herbir musteri(+) icin class olusturarak yapabiliriz.
 * Musterilerin herbirinin kendisine ozgu oldurtmek istedigi (kurban) listesi olmali. Dolayisi ile her bir musteri icin Kurban Listesi classi olusturabiliriz. 
 * Ve her bir musterinin class i icerisinde kendi kurban listesi bir parametre olarak bulunabilir.
 * Her bir kurbanin ismi ve adresleri olmali.
 * Uygulama ile musteri listesinden bir musteri secilecek (Secim Yapici). Ardindan musterinin oldurtmek istedigi kurban secilecek.
 * Gorev basari ile tamamlanip kurban olduruldu ise listede kurbanin ismi silinik (Click yapip ismi silik sekle sokan bir sey =))sekilde gosterilecek.
 */






/**
 * TECHNICAL DETAILS
 * / index.html \
 * + Create a main tag for the application.
 * + Create a div tag that includes customer list form.
 * + Create a table that shows all customers.
 * 
 * / src \
 * 
 * // model \\
 * + We have three customers. Each of these customers must be a class. (Model Directory)
 * 
 * // view \\
 * + We have to create main controller (AppViewController). (View Directory)
 * + We have to create customer list with a class. (View Directory)
 * 
 * / app.js \
 * 
 * 
 * 
 */


let crm = new CRM();
let table = new CustomerListTable();
let controller = new AppViewController();
controller.init();