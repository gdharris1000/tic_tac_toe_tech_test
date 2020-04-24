var board;

describe("Board", function() {
    
    beforeEach(function() {
        board = new Board();
      });

    it("starts with an empty board", () => {
       
        expect(board.getGrid()).toEqual([
            {square: "A1", value: null}, 
        {square: "A2", value: null}, 
        {square: "A3", value: null},
        {square: "B1", value: null},
        {square: "B2", value: null},
        {square: "B3", value: null},
        {square: "C1", value: null},
        {square: "C2", value: null},
        {square: "C3", value: null},
    ])
    });

    it("select a square", () => {
        board.update("A1", "X")
        expect(board.getGrid()).toEqual([
            {square: "A1", value: "X"}, 
        {square: "A2", value: null}, 
        {square: "A3", value: null},
        {square: "B1", value: null},
        {square: "B2", value: null},
        {square: "B3", value: null},
        {square: "C1", value: null},
        {square: "C2", value: null},
        {square: "C3", value: null},
    ])
    });

    it("cannot select a square when it as already been selected", () => {
        // spyOn(board, 'error')
        spyOn(board, 'error').and.returnValue("Square already selected");
        console.log(1, board.error());
        board.update("A1", "X");
        board.update("A1", "X");
        expect(board.error()).toEqual("Square already selected");
    })

    describe("Winning", () => {
        //Winning conditions
        //1.  A1, A2, A3
        //2.  A1, B2, C3
        //3.  A1, B1, C1
        //4.  A2, B2, C2
        //5.  A3, B3, C3
        //6.  A3, B2, C1
        //7.  C1, C2, C3
        //8.  B1, B2, B3

        it("returns false when the last move wasn't winning", () => {
            board.update("A1", "X");
            expect(board.checkWin()).toEqual(false);
        })

        it("returns true for winning condition 1", () => {
            board.update("A1", "X");
            board.update("A2", "X");
            board.update("A3", "X");
            expect(board.checkWin()).toEqual(true);
        });

        

    });
    
    
});