/**
 * Constructor (Yapici Metod)
 * - "this" anahtar kelimesi
this anahtar kelimesi üzerinde bulunduğumuz objeyi simgeler ve this.property_name ve this.method_name ifadeleri o anki objemizin özelliklerini ve metodlarını vurgular.
 *
 *
 * 
  */ 
function Developer(name, salary) {
    this.name = name;
    this.salary = salary;
    this.showInfos = function(){
        console.log(`isim : ${this.name} - maas ${this.salary}`);
        console.log(this);
    }
}

const developer1 = new Developer("Tolga Sevencan", 7000);
const developer2 = new Developer("Enes Bora", 12000);

developer1.showInfos();
developer2.showInfos();

console.log(this);

