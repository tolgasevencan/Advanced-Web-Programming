class AppViewController {
    constructor(pRegistrationForm, pCRM, pClientListTable) {
        this.table = pClientListTable;
        this.form = pRegistrationForm;
        this.crm = pCRM;
        
        this.searchBox = document.querySelector('#searchBox');
    }

    init() {
        this.form.submitButton.addEventListener('click', () => {
            let client = new Client(this.form.getFirstName(), this.form.getLastName(), this.form.getCanton());
            this.crm.add(client);
            this.table.refresh(this.crm);
        })
    }
}