var board;

describe("Game", function() {
    
    beforeEach(function() {
        board = new Board();
      });

    it("starts with an empty board", () => {
       
        expect(board.getGrid()).toEqual([
            {ref: "A1", value: null}, 
        {ref: "A2", value: null}, 
        {ref: "A3", value: null},
        {ref: "B1", value: null},
        {ref: "B2", value: null},
        {ref: "B3", value: null},
        {ref: "C1", value: null},
        {ref: "C2", value: null},
        {ref: "C3", value: null},
    ])
    });

    it("select a square", () => {
        board.update("A1", "X")
        expect(board.getGrid()).toEqual([
            {ref: "A1", value: "X"}, 
        {ref: "A2", value: null}, 
        {ref: "A3", value: null},
        {ref: "B1", value: null},
        {ref: "B2", value: null},
        {ref: "B3", value: null},
        {ref: "C1", value: null},
        {ref: "C2", value: null},
        {ref: "C3", value: null},
    ])
    });

    it("cannot select a square when it as already been selected", () => {
        spyOn(board, 'error')
        board.update("A1", "X");
        board.update("A1", "X");
        expect(board.error).toHaveBeenCalledWith("Square already selected");
    })
    
    
});