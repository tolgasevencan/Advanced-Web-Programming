class CRM {
    constructor() {
        this.clientList = [];
    }

    search(pTerm) {
        return this.clientList.filter(client => client.firstname.includes(pTerm));
    }

    add(pClient) {
        this.clientList.push(pClient);
    }
}