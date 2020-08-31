import React from 'react';

class Gridpiece extends React.Component {
  render() {
    return(
      <div id={this.props.id}>
        {this.props.value}
      </div>
    );
  }
}

export default Gridpiece;