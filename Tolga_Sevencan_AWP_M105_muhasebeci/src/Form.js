class Form {
    constructor() {
        this.submitButton = document.querySelector('#submitButton');
        this.firstName = document.querySelector('#nameBox');
        this.lastName = document.querySelector('#lastnameBox');
        this.canton = document.querySelector('#cantonBox');   
    }

    getFirstName() {
        return this.firstName.value;
    }

    getLastName() {
        return this.lastName.value;
    }

    getCanton() {
        return this.canton.value;
    }
}