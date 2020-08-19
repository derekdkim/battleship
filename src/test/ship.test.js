import { Gameboard } from '../modules/gameboard.js';


describe('Ship Placement', () => {
  
  let gameboard = Gameboard();
  gameboard.createGameboard();
  gameboard.setupShips();
  
  test('5 ships present', () => {
    expect(gameboard.getShipArr()).toHaveLength(5);
  });

  test('Carrier (5 length) has 5 coordinates', () => {
    expect(gameboard.getShipArr()[0].getPos()).toHaveLength(5);
    expect(gameboard.getShipArr()[0].getPos()).toEqual(expect.any(Array));
    expect(gameboard.getShipArr()[0].getPos()[0]).toEqual(expect.any(Array));
    expect(gameboard.getShipArr()[0].getPos()[0]).toHaveLength(2);
  });
});

describe('Ship hit & sunk logic', () => {
  let gameboard = Gameboard();
  gameboard.createGameboard();
  gameboard.setupShips();

  // Take two hits
  const carrier = gameboard.getShipArr()[0];
  const battleship = gameboard.getShipArr()[1];
  const destroyer = gameboard.getShipArr()[4];
  const carrierPos = carrier.getPos();
  const destroyerPos = destroyer.getPos();

  // Hit in every position
  carrierPos.forEach(pos => {
    carrier.receiveHit(pos);
  });

  // Hit in only one position
  destroyer.receiveHit(destroyerPos[0]);


  test('Getting hit in all positions results in getting sunk', () => {
    expect(carrier.getShipStatus()).toEqual(false); // True === alive, False === sunk
  });

  test('Ships are alive if they have not been hit at all', () => {
    expect(battleship.getShipStatus()).toEqual(true);
  });

  test('Ships are alive if they have not been hit in every position', () => {
    expect(destroyer.getShipStatus()).toEqual(true);
  });
});