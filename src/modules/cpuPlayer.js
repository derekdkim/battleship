import { Gameboard } from './gameboard.js';

const cpuPlayer = () => {
  const opponentBoard = Gameboard();
  opponentBoard.createGameboard();
  opponentBoard.setupShips();
  let shipsLeftToSink = 5;

  const CPUTurn = () => {
    let targetX;
    let targetY;

    do {
      targetX = Math.floor(Math.random() * 8);
      targetY = Math.floor(Math.random() * 8);
    } while (!notTaken(targetX, targetY));

    // Set 1 second delay before taking its turn
    setTimeout(opponentBoard.receiveAttack([targetX, targetY]), 1000);
    shipsLeftToSink = opponentBoard.getShipsLeft();
    return [targetX, targetY];
  }

  const notTaken = (x, y) => {
    const board = opponentBoard.getBoard();
    if (board[y][x] === -2 || board[y][x] === -3) {
      return false;
    }
    return true;
  }

  const getShipsLeft = () => {
    return shipsLeftToSink;
  }

  return { CPUTurn, getShipsLeft };
}

export { cpuPlayer };