function Board(){
   this.board = [
    {ref: "A1", value: null}, 
    {ref: "A2", value: null}, 
    {ref: "A3", value: null},
    {ref: "B1", value: null},
    {ref: "B2", value: null},
    {ref: "B3", value: null},
    {ref: "C1", value: null},
    {ref: "C2", value: null},
    {ref: "C3", value: null},
];

}

Board.prototype = function(){
    function getBoard(){
        return this.board
    }

    function update(ref, player){

        for (var i in this.board){
            if (this.board[i].ref === ref){
                this.board[i].value = player;
            }
        }
        console.log(this.board);

    }

    return {
       getBoard: getBoard,
       update: update
    }

}();