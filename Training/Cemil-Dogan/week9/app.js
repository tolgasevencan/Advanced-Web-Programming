class Manager{
    constructor(name){
        this.appName = 'kerrat';
        this.students = [];
        this.dbManager = new DBManager();
        this.setQuestions();
        this.setInitialData();
    }

    setInitialData(){
        const initialData = {
            settings: {username: 'Ahmet', password: 'secret'},
            student: []
        };

        this.dbManager
    }

    setQuestions(){
        this.firstNumber = this.random();
        this.secondNumber = this.random();
    }
}