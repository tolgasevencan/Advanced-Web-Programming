// Output Functions

function showQuestion(pData) {
    let output = document.querySelector('#showQuestion');
    output.innerHTML += pData; 
};

function showAnswers(pData) {
    let output = document.querySelector('#rightChoice');
    output.innerHTML += pData;
};


function addOptionsToSelect() {
  let x = document.querySelector("#rightChoice");
  let option = document.createElement("option");
  option.text = "Kiwi";
  x.add(option);
};





let englishWords = [
  {
    text: 'to go'
  },
  {
    text: 'to play',
    selected: true
  },
  {
    text: 'to argue'
  },
  {
    text: 'to wash'
  }
];

