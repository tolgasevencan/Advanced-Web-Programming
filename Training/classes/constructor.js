
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
}

const numbers = new divide(12,4);

numbers.displayInConsole();

//Sub classing with extends
class Animal {
    constructor(name) {
        this.name= name;
    }
    speak() {
        console.log(this.name + 'makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + 'barks.');
    }
}

let bark = new Animal("dog");

bark.speak();

//Super class calls with super

class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(this.name + ' roars.');
    }
}

let roars = new Lion("lion");

roars.speak();