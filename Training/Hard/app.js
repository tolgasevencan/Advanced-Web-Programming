  class Board{
      constructor(){
          this.board = this.generateBoard();
      }

      addListeners(){
          this.container.addEventListener('click', ()=>{
              this.setPiece('X');
          });
      }

      generateBoard(){
          return [
          [1,1,1],
          [1,1,1],
          [1,1,1]
          ];
      }

      renderBoard(){
          const tableData = this.board.map(a => {
              console.log(a)
          })
      }
  }
  
  class Player{
    constructor(name)
}

    class Piece{
    constructor(name, sign){
        this.name = name;
    }
}

    class Manager{
    constructor(){
        this.board = new Board();
        this.playerA = new Player('ali', 'X');
        this.playerB = new Player('veli', 'O');
    }
    init
}


const game = new Manager();
game.init();