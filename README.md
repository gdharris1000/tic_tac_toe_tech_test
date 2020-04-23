# Tic Tac Toe Tech Test

## Specification
https://github.com/makersacademy/course/blob/master/individual_challenges/tic_tac_toe.md

### Rules
- There are two players in the game (X and O)
- Players take turns until the game is over
- A player can claim a field if it is not already taken
- A turn ends when a player claims a field
- A player wins if they claim all the fields in a row, column or diagonal
- A game is over if a player wins
- A game is over when all fields are taken

## Grid
|TIC|TAC|TOE|
|---|---|---|
|A1|B1|C1|
|A2|B2|C2|
|A3|B3|C3|

## Winning
- A1, A2, A3
- A1, B2, C3
- A1, B1, C1
- A2, B2, C2
- A3, B3, C3
- A3, B2, C1
- C1, C2, C3
- B1, B2, B3

## Flow

![Flowchart](/images/flow.png)

## Testing

- A player can select a square
- A player cannot select a square if it has already been selected
- A player wins if they have selected one of the winning combinations
- Changes turns after a player selects a square and there isn't a win or draw
- There is a draw if all squares are selected without a winning combination

## Input/Output

|Input|Output|
|----|----|
|Select A1|A1 populated by X|
|Select A2|A2 populated by O|

