class ClientListTable {
    constructor() {
        this.allCustomersList = document.querySelector('.allCustomersList');
    }

    refresh(pCRM) {
        let html = pCRM.clientList.map(client => `
            <tr>
                <td>${client.firstname}</td>
                <td>${client.lastname}</td>
                <td>${client.canton}</td>
            </tr>    
        `).join("");
        this.allCustomersList.innerHTML = html;
    }
}