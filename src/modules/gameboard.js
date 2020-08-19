import { Ship } from './ship.js';

const Gameboard = () => {
  let board;
  let shipArr = [];

  const createGameboard = () => {
    let matrix = [];
    for (let x = 0; x < 8; x++) {
      let row = [];
      for (let y = 0; y < 8; y++) {
        row.push(-1);
      }
      matrix.push(row);
    }
    board = matrix;
  }

  const setupShips = () => {
    // Initialize 5 ships according to standard Milton Bradley layout
    const carrier = Ship(5);
    const battleship = Ship(4);
    const cruiser = Ship(3);
    const submarine = Ship(3);
    const destroyer = Ship(2);

    // Group them in shipArr
    shipArr.push(carrier, battleship, cruiser, submarine, destroyer);

    // Place each ship and mark their location on the board
    shipArr.forEach(ship => {
      ship.placeShip(board);
      setShipCoord(ship.getPos(), shipArr.indexOf(ship));
    });
  }

  const setShipCoord = (posArr, indexMarker) => {
    posArr.forEach((pos) => {
      board[pos[0]][pos[1]] = indexMarker;
    });
  }

  const receiveAttack = (pos) => {
    if (board[pos[0]][pos[1]] > -1) { // Hit
      // the value of the position corresponds to the index of ship in shipArr
      let posValue = board[pos[0]][pos[1]];
      shipArr[posValue].receiveHit(pos);
      board[pos[0]][pos[1]] = -3;
    } else if (board[pos[0]][pos[1]] === -1) {
      // Missed
      board[pos[0]][pos[1]] = -2;
    } else {
      // Not allowed
      // Add error message
    }
  }

  const getBoard = () => {
    return board;
  }

  // for testing purposes
  const getShipArr = () => {
    return shipArr;
  }

  const getShipsLeft = () => {
    let count = 0;
    shipArr.forEach(ship => {
      if (ship.getShipStatus()) {
        count++;
      }
    });
    return count;
  }

  return { getBoard, createGameboard, setupShips, setShipCoord, receiveAttack, getShipArr, getShipsLeft }
}

export { Gameboard };