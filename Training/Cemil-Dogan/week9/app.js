class Manager{

	static appName = 'kerrat';
	
    constructor(){
    	this.db = new DBManager(Manager.appName);
    	this.auth = new Authentication(this.db);
    	this.setViews = 
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