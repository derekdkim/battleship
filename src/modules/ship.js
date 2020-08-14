function Ship (length) {
  let pos = [];
  let pos_hit = [];

  const placeShip = (gameboard) => {
    let originX;
    let originY;

    // Assign point of origin
    do {
      originX = Math.floor(Math.random() * 8);
      originY = Math.floor(Math.random() * 8);
    } while (!isPositionAllowed(originX, originY, gameboard, false));

    let direction = isPositionAllowed(originX, originY, gameboard, true);
    pos = assignPos(originX, originY, direction);
    pos_hit = populateHitTracker();
    gameboard.setShipCoord(pos);
  }

  const isPositionAllowed = (x, y, gameboard, suggestPos) => {
    const board = gameboard.getBoard();
    // Fulfills at least one criteria
    // X... +3, X... -3, Y... +3, Y... -3 is empty
    let possibleDirection = [];
    // Use matrix bounds to narrow evaluation criteria
    // East of Origin
    if (x + length < 8) {
      let allowedFlag = true;
      for (let i = 0; i < length; i++) {
        if (board[y][x + i] !== 0) {
          allowedFlag = false;
        }
      }
      if (allowedFlag === true) {
        possibleDirection.push('E');
      }
    }

    // West of Origin
    if (x - length >= 0) {
      let allowedFlag = true;
      for (let i = 0; i < length; i++) {
        if (board[y][x - i] !== 0) {
          allowedFlag = false;
        }
      }
      if (allowedFlag === true) {
        possibleDirection.push('W');
      }
    }

    // North of Origin
    if (y - length >= 0) {
      let allowedFlag = true;
      for (let i = 0; i < length; i++) {
        if (board[y - i][x] !== 0) {
          allowedFlag = false;
        }
      }
      if (allowedFlag === true) {
        possibleDirection.push('N');
      }
    }

    // South of Origin
    if (y + length < 8) {
      let allowedFlag = true;
      for (let i = 0; i < length; i++) {
        if (board[y + i][x] !== 0) {
          allowedFlag = false;
        }
      }
      if (allowedFlag === true) {
        possibleDirection.push('S');
      }
    }

    if (possibleDirection.length > 0) {
      if (suggestPos) {
        const randomPick = Math.floor(Math.random() * possibleDirection.length);
        return possibleDirection[randomPick];
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  const assignPos = (x, y, direction) => {
    let pos = [];

    for (let i = 0; i < length; i++) {
      if (direction === 'S') {
        pos.push([y + i, x]);
      } else if (direction === 'N') {
        pos.push([y - i, x]);
      } else if (direction === 'E') {
        pos.push([y, x + i]);
      } else if (direction === 'W') {
        pos.push([y, x - i]);
      }
    }
    
    return pos;
  }

  const populateHitTracker = () => {
    for (let i = 0; i < length; i++) {
      pos_hit.push(false);
    }
  }

  const getPos = () => {
    return pos;
  }
  
  return { placeShip, getPos }
}

export { Ship };