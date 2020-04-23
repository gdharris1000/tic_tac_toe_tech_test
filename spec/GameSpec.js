describe('Game', () => {
    it('starts with an empty board', () => {
        expect(board()).toEqual([
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
    })
})