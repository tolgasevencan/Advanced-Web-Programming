// Person class function
class Person {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log(`Hello, my name is "${this.name}"`);
    }
}

const tolga = new Person('Tolga');

tolga.introduce();

// Divide class function
class divide {
    constructor(bigNumber, smallNumber) {
    this.bigNumber = bigNumber;
    this.smallNumber = smallNumber;
    }
    displayInConsole() {
        console.log(`Divide result is "${this.bigNumber / this.smallNumber}"`);
    }
};

const numbers = new divide(12,4);

numbers.displayInConsole();





