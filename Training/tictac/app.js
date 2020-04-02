/**
 *  oop - object oriented programming
 *
 *  board
 *  piece
 *  player
 *  manager
 */

 class Board{
   constructor(){
     this.board = this.generateBoard();
     this.container = document.querySelector('.container');
   }

   setCallBack(fn){
     this.callBack = fn;
   }

   setCurrentPlayer(player){
      this.currentPlayer = player;
   }

   addListeners(){
    this.container.addEventListener('click', function(e){
      if(Array.from(e.target.classList).includes('cell')){
        const x = e.target.getAttribute('data-x');
        const y = e.target.getAttribute('data-y');
        this.setPiece(x, y, this.currentPlayer.getSign());

        this.callBack(this.currentPlayer);
      }
    }.bind(this));
   }

   generateBoard(){
     return [
       ['', '', ''],
       ['', '', ''],
       ['', '', '']
     ];
   }

   renderBoard(){
      const tableData = this.board.map((a, k) => {
        const rowData = a.map((b, i) => {
          return `<td data-x=${k} data-y=${i} class="cell">${b}</td>`
        }).join('');
        return `<tr>${rowData}</tr>`
      }).join('');

      return `<table>${tableData}</table>`
   }

   addToDom(){
     const table = this.renderBoard();
     this.container.innerHTML = table;
   }

   setPiece(x, y, sign){
     //TODO: new array which holds empty places
     this.board[x][y] = sign;
     this.addToDom();
   }
 }

 class Player{
   constructor(sign){
     this.sign = sign;
   }

   getSign(){
     return this.sign;
   }
 }

 class Manager{
   constructor(){
     this.board = new Board();
     this.playerA = new Player('X');
     this.playerB = new Player('O');
     this.board.setCurrentPlayer(this.playerA);
   }

   init(){
     this.board.addToDom();
     this.board.addListeners();
     this.board.setCallBack(this.callBackListener);
   }

   callBackListener = function(person){
     if(person.getSign() == 'X'){
       this.board.setCurrentPlayer(this.playerB);
     } else{
      this.board.setCurrentPlayer(this.playerA);
     }
   }.bind(this)

   getRandomNumber(){
     return Math.floor(Math.random() * 3);
   }
 }

const game = new Manager();
game.init();
