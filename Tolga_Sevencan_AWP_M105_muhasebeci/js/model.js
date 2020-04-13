// Class for saving clients information
class ClientsInformation {
    constructor(fName, lName, canton) {
        this.firstName = fName;
        this.lastName = lName;
        this.canton = canton;
    }
}

class Manager {
    constructor() {
        this.submitButton = document.querySelector('#submitButton');
        this.firstName = document.querySelector('#nameBox');
        this.lastName = document.querySelector('#lastnameBox');
        this.canton = document.querySelector('#cantonBox');
        this.allCustomersList = document.querySelector('allCustomersList');
        this.searchBox = document.querySelector('#searchBox');
    }
}