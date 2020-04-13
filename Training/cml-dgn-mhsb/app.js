class Person {
    constructor(fName, lName, canton) {
        this.firstName = fName;
        this.lastName = lName;
        this.canton = canton;
    }
}

class Manager {
    constructor() {
        this.submitButton = document.querySelector('input[type = "button"]');
        this.personForm = document.querySelector('form[name="person-form:]');
        this.setListeners();
        this.people = [];
    }
    setListeners() {
        this.submitButton.addEventListener('click', this.onSubmit.bind(this));
    }
    onSubmit() {
        const person = {};
        Array.form(this.personForm.elements).map(item => {
                if (item.name) {
                    person[item.name] = item.value;
                )
            }
            this.people.push[item.name] = item.value;
        };
        console.dir(this.formData);
    }
}

new Manager();