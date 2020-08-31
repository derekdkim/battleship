import React from 'react';
import { Gameboard } from '../modules/gameboard';
import GameboardComponent from './GameboardComponent';

class PlayerComponent extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <p>Someone's Turn!</p>  
        <div>
          <GameboardComponent />
        </div>
        <div>
          <p>Ship Display</p>
          {
              // Ship Status Display
          }
        </div>
      </div>
    );
  }
}

export default PlayerComponent;