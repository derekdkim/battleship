import { Gameboard } from '../modules/gameboard.js';

describe('Gameboard', () => {
  const board = Gameboard();
  board.createGameboard();

  test('Correctly returns a gameboard', () => {
    expect(board.getBoard()).toEqual([[-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1],
                                      [-1, -1, -1, -1, -1, -1, -1, -1]]);
  });

  test('Correctly assigns ship location on matrix', () => {
    board.setShipCoord([[0,0], [0, 1], [0, 2]], 0);
    expect(board.getBoard()).toEqual([[0, 0, 0, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1],
                                      [-1, -1, -1, -1, -1, -1, -1, -1]]);
  });

  test('Correctly receives a missed attack', () => {
    board.setShipCoord([[0,0], [0, 1], [0, 2]], 0);
    board.receiveAttack([3, 3]);
    expect(board.getBoard()).toEqual([[ 0,  0,  0, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -2, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1], 
                                      [-1, -1, -1, -1, -1, -1, -1, -1],
                                      [-1, -1, -1, -1, -1, -1, -1, -1]]);
  });

  test('Correctly returns 5 alive ships', () => {
    board.setupShips();
    expect(board.getShipsLeft()).toEqual(5);
  })
});