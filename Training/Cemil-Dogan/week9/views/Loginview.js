class Loginview{
    constructor(){
        this.loginContainer = '.login-form .';
    }

    static getPassword(e){
        const password = document.querySelector
        if(!password){
            this.addToDom('.message', 'Please write correct password');
            return;
        }

        return password;
    }

    addLoginEventListener(){
        document.querySelector('.login')
    }

    addToDom(place, value){
        document.querySelector(place).innerHTML = value;
    }
}