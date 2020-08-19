import { Gameboard } from './gameboard.js';

const Player = () => {
  const opponentBoard = Gameboard();
  opponentBoard.createGameboard(); 
  opponentBoard.setupShips();
  let playerTurn = true;
  let shipsLeftToSink = 5;

  const playTurn = (target) => {
    // Choose target position
    opponentBoard.receiveAttack(target);
    shipsLeftToSink = opponentBoard.getShipsLeft();
  }

  const isPlayerTurn = () => {
    return playerTurn;
  }

  const setPlayerTurn = (bool) => {
    playerTurn = bool;
  }

  const getShipsLeft = () => {
    return shipsLeftToSink;
  }

  return { playTurn, isPlayerTurn, setPlayerTurn, getShipsLeft };
}

export { Player };