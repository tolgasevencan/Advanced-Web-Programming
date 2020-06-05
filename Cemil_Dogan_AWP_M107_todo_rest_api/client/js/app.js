class Todo{
    constructor(){
        this.todoContainer = document.querySelector('.todo-list')
        // app calistiginda datayi backenden almam gerekir
        // aldigim datayi render edip index.html e yapistir
    }

    render(data = []){
        const renderData = data.map(item => {
            return `<li>$`
        })

    }

    getData(){
        fetch('localhost:3000/todo')
        .then(response => response.json)
        .then(this.render)
        .catch(err => console.log(err));
    }
}

new Todo();