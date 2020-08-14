const Gameboard = () => {
  let board;

  const createGameboard = () => {
    let matrix = [];
    for (let x = 0; x < 8; x++) {
      let row = [];
      for (let y = 0; y < 8; y++) {
        row.push(0);
      }
      matrix.push(row);
    }
    board = matrix;
  }

  const setShipCoord = (posArr) => {
    posArr.forEach((pos) => {
      board[pos[0]][pos[1]] = 1;
    });
  }

  const receiveAttack = (pos) => {
    if (board[pos[0]][pos[1]] === 1) {
      // Hit
      board[pos[0]][pos[1]] = 2;
    } else if (board[pos[0]][pos[1]] === 0) {
      // Missed
      board[pos[0]][pos[1]] = -1;
    } else {
      // Not allowed
      // Add error message
    }
  }

  const getBoard = () => {
    return board;
  }

  return { getBoard, createGameboard, setShipCoord, receiveAttack }
}

export { Gameboard };