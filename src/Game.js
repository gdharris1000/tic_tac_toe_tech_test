function Board(){
   this.grid = [
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
    function getGrid(){
        return this.grid
    }

    function update(ref, player){

        for (var i in this.grid){
            if (this.grid[i].ref === ref){
                if (this.grid[i].value == null){
                this.grid[i].value = player;
                }else{
                    error("Square already selected")
                }
            }
        }
        // console.log(this.grid);
    }

    function error(message){
        console.log(message)
        return message
    }

    return {
       getGrid: getGrid,
       error: error,
       update: update
    }

}();