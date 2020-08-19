import { Player } from '../modules/player.js';
import { cpuPlayer } from '../modules/cpuPlayer.js';

describe ('Player & Computer common tests', () => {
  let player = Player();
  let cpu = cpuPlayer();

  test('Both players both correctly receive ships left', () => {
    expect(player.getShipsLeft()).toEqual(5);
    expect(cpu.getShipsLeft()).toEqual(5);
  });
});

describe ('CPU', () => {
  let cpu = cpuPlayer();

  test('Random targets are correctly determined', () => {
    const target = cpu.CPUTurn();
    expect(target).toEqual(expect.any(Array));
    expect(target[0]).toEqual(expect.any(Number));
    expect(target[1]).toEqual(expect.any(Number));
  });
});