class Authentication {
    constructor(){
        this.dbManager = new DBManager();
        this.loginView = new LoginView();
    }

    login(appName){
        //TODO: get from login view
        const password = this.LoginView.getPassword();

        const appInfo = this.dbManager.getItem(appName);
        if(appInfo.settings.password == password) {
            this.loginView.addToDom('.message', 'Welcome')
        }
        //if()
        console.log(password);
    }

}