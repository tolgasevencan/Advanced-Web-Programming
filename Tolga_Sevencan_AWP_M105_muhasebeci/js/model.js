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
        this.submitButton = 
        this.clientForm = 
        this.setListeners();
        this.clients = [];
    }
    setListeners() {
        this.submitButton.addEventListener('click', this.onSubmit.bind(this));
    }
    
}