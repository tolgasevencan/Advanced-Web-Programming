class Person{
  constructor(fName, lName, kanton){
    this.firstName = fName;
    this.lastName = lName;
    this.kanton = kanton;
  }
}

class Manager{
  constructor(){
   this.submitButton = document.querySelector('input[type="button"]');
   this.personForm = document.querySelector('form[name="person-form"]');
   this.tableContainer = document.querySelector('.right-container');
   this.searchWord = document.querySelector('.search-word');
   this.setListeners();
   this.people = [new Person('aaa', 'bbb', 'xxx'), new Person('zzz', 'ddd', 'ccc'), new Person('aaa', 'kkk', 'ccc')];
   this.filteredPeople = [];
   this.sortType = 'desc';
  }

  // comment: ne ise yarar, nerden cagrilir, kimi cagirir.
  setListeners(){
    this.submitButton.addEventListener('click', this.onSubmit.bind(this));
    this.tableContainer.addEventListener('click', this.catchEvents.bind(this))
    this.searchWord.addEventListener('keyup', this.filterTable.bind(this))
  }

  filterTable(e){
    const word = e.target.value;
    this.filteredPeople = this.people.filter(item => {
      if(item.firstName.indexOf(word) > -1 ||
      item.lastName.indexOf(word) > -1 ||
      item.kanton.indexOf(word) > -1) {
        return true;
      }
      return false;
    });
    this.renderList(this.filteredPeople);
  }

  catchEvents(e){
    const item = Array.from(e.target.classList);
    if(item.includes('fName')){
      this.sortBy('firstName');
    }

    if(item.includes('lName')){
      this.sortBy('lastName');
    }

    if(item.includes('kanton')){
      this.sortBy('kanton');
    }
  }

  sortBy(elem){
    const people = this.filteredPeople.length ? this.filteredPeople : this.people;
    if(this.sortType === 'asc'){
      people.sort((a,b)=> { return a[elem] < b[elem] ? -1: 1});
      this.sortType = 'desc';
    } else {
      people.sort((a,b)=> { return a[elem] > b[elem] ? -1: 1});
      this.sortType = 'asc';
    }

    this.renderList(people);
  }

  onSubmit(){
    const person = {};
    Array.from(this.personForm.elements).map(item => {
      if(item.name)
        person[item.name] = item.value;
    });
    this.people.push(new Person(person.firstName, person.lastName, person.kanton));
    this.renderList();
  }

  renderList(arr = []){
    const people = arr.length ? arr : this.people;
    let table = `<table>`;
    table += `<thead>`;
    table += `<tr>
                <th class="fName">First Name</th>
                <th class="lName">Last Name</th>
                <th class="kanton">Kanton</th>
              </tr>`;
    table += `</thead>`;

    people.map(item => {
      table += `<tr>
                   <td >${item.firstName}</td>
                   <td >${item.lastName}</td>
                   <td >${item.kanton}</td>
                </tr>`;
    }).join('');

    table += `<table>`;
    this.addToDom(table);
  }

  addToDom(template){
    document.querySelector('.table-container').innerHTML = template;
  }
}

new Manager();
