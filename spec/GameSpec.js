var board;
// var playerXSpy = jasmine.createSpy('player').and.returnValue("X");
// var playerOSpy = jasmine.createSpyObj('player', ['O'])




describe("Game", function() {
    
    beforeEach(function() {
        board = new Board();
      });

    

    it("starts with an empty board", () => {
        //var board = new Board();
        
        expect(board.getBoard()).toEqual([
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
        expect(board.getBoard()).toEqual([
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

   
    
    
});