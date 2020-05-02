class PatientListTable {
    constructor() {
        document.querySelector('.allPatientList');
    }

    refresh(pCRM) {
        let html = pCRM.clientList.map(client => `
            <tr>
                <td>${patient.name}</td>
                <td>${patient.quantity}</td>
            </tr>    
        `).join("");
        this.allPatientList.innerHTML = html;
    }
}