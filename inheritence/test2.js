// Programmer

class Person {
    #name;
    constructor(pName) {
        this.#name = pName;
    }

    getName() {
        console.log(this.#name);
    }

    setName(pName) {
        if (pName != "hahaha") {
            this.#name = pName;
        }
    }
}

// Programmer 2

let ahmet = new Person("Ahmet");
ahmet.name = "jjaja";
console.log(ahmet.getName);