class Manager{
    constructor(name){
        this.appName = 'kerrat';
        this.students = [];
        this.dbManager = new DBManager();
        this.setQuestions();
        this.setInitialData();
    }

    setInitialData(){

    }

    setQuestions(){
        this.firstNumber = this.random();
        this.secondNumber = this.random();
    }
}