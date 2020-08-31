import React from 'react';
import PlayerComponent from './PlayerComponent.js';
import { Game } from '../modules/game.js';

class GameComponent extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <PlayerComponent />
        <PlayerComponent />
      </div>
    );
  }
}

export default GameComponent;