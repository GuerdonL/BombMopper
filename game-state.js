// the game state is a tuple composed of:
// 1. a number representing the number of mines left to be found
// 2. nxn array, where each element is either a 0 through 9, or a -1
//  a -1 represents an unrevealed tile
//  a 9 represents a mine
//  a 0 through 8 represents the number of mines adjacent to that tile

// we declare the game state as a global variable
var gameState;

// we take the dimensions of the game board, and the number of mines and initialize the game state with an empty board
function initializeGameState(boardDimensions, numberOfMines) {
    gameState = new Array(boardDimensions);
    for (var i = 0; i < boardDimensions; i++) {
        gameState[i] = new Array(boardDimensions);
        for (var j = 0; j < boardDimensions; j++) {
            gameState[i][j] = -1;
        }
    }
    gameState[boardDimensions] = numberOfMines;
}