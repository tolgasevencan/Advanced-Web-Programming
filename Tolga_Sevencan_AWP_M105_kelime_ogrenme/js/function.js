// Output Functions

function showQuestion(pData) {
    let output = document.querySelector('#showQuestion');
    output.innerHTML += pData; 
};

function showAnswers(pData) {
    let output = document.querySelector('#rightChoice');
    output.innerHTML += pData;
};



let englishWordsList = document.querySelector('#rightChoice').englishWords;
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


englishWords.forEach(option =>
  englishWordsList.add(
    new Option(option.text, option.selected)
  )
);
