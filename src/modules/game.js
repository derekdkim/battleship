import { Player } from './player.js';
import { cpuPlayer } from './cpuPlayer.js';

const Game = () => {
  let player = Player();
  let cpu = cpuPlayer();
  let gameOver = false;

  const commenceGame = () => {
    while (!gameOver) {
      alternateTurn();
    }
    console.log(`${determineWinner()} victory!`);
  }

  const alternateTurn = () => {
    if (!player.isPlayerTurn()) {
      player.setPlayerTurn(true);
      // Allow player to click a grid to select target pos
      let targetPos = [0, 0];
      player.playTurn(targetPos);
      determineWinner();
    } else {
      player.setPlayerTurn(false);
      cpu.CPUTurn();
      determineWinner();
    }
  }

  const determineWinner = () => {
    if (player.getShipsLeft() === 0) {
      gameOver = true;
      return 'Player';
    } else if (cpu.getShipsLeft() === 0) {
      gameOver = true;
      return 'Computer';
    }
  }

  return { commenceGame };
}

export { Game };