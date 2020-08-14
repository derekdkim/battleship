import { Ship } from '../modules/ship.js';
import { Gameboard } from '../modules/gameboard.js';


describe('Ship Placement', () => {
  test('Correctly randomizes position', () => {
    let gameboard = Gameboard();
    gameboard.createGameboard();
    const testShip0 = Ship(3);
    const testShip1 = Ship(3);
    const testShip2 = Ship(3);

    testShip0.placeShip(gameboard);
    testShip1.placeShip(gameboard);
    testShip2.placeShip(gameboard);

    // placeShip() will return positions of the ship in an array
    expect(testShip0.getPos() && testShip1.getPos()).not.toEqual(testShip2.getPos());
  });

  test('Larger ship placement test to assess if they avoid stacking with already existing ships', () => {
    let gameboard = Gameboard();
    gameboard.createGameboard();
    const testShip0 = Ship(5);
    const testShip1 = Ship(4);
    const testShip2 = Ship(3);
    const testShip3 = Ship(3);
    const testShip4 = Ship(2);

    testShip0.placeShip(gameboard);
    testShip1.placeShip(gameboard);
    testShip2.placeShip(gameboard);
    testShip3.placeShip(gameboard);
    testShip4.placeShip(gameboard);

    expect(testShip0.getPos()).not.toEqual(testShip1.getPos());

  });
});

xdescribe('Ship game logic', () => {
  let gameboard = [[0, 0]];
  const testShip0 = Ship(2);
  testShip0.placeShip(gameboard);

  // Take two hits
  const hitTestMsg = testShip0.hit(0, 0);
  testShip0.hit(0, 1);
  testShip0.isSunk();

  test('Hits are correctly registered', () => {
    expect(hitTestMsg).toEqual([[0, 0], 1]); // .hit() returns [[x, y], positions remaining]
  });

  test('Ships are sunk when all positions are hit', () => {
    expect(testShip0.alive).toEqual(false);
  });
});