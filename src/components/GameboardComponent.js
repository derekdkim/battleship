import React from 'react';
import Gridpiece from './Gridpiece.js';

class GameboardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      grid: [[-1, -1, -1, -1, -1, -1, -1, -1], 
             [-1, -1, -1, -1, -1, -1, -1, -1], 
             [-1, -1, -1, -1, -1, -1, -1, -1], 
             [-1, -1, -1, -1, -1, -1, -1, -1], 
             [-1, -1, -1, -1, -1, -1, -1, -1], 
             [-1, -1, -1, -1, -1, -1, -1, -1], 
             [-1, -1, -1, -1, -1, -1, -1, -1],
             [-1, -1, -1, -1, -1, -1, -1, -1]]
    }
  }

  render() {
    console.log(this.state.grid);
    return(
      <div>
        <p>Grid</p>
        { this.state.grid.map((row, y) => row.map((item, x) => <Gridpiece key={`${y}${x}`} id={`${y}${x}`} value={item} />)) }
      </div>
    );
  }
}

export default GameboardComponent;