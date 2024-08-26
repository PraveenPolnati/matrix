// import React from 'react';
import { Component } from 'react';
import './index.css';

class Matrix extends Component {
  state = {
    colors: Array(9).fill('white'),
    clickSequence: [],
  };

  handleClick = (index) => {
    const { colors, clickSequence } = this.state;

    if (index === 8) {
      const newColors = colors.map((color, i) =>
        clickSequence.includes(i) ? 'orange' : color
      );
      this.setState({ colors: newColors });
    } else {
      const newColors = [...colors];
      newColors[index] = 'green';
      if (!clickSequence.includes(index)) {
        this.setState({
          colors: newColors,
          clickSequence: [...clickSequence, index],
        });
      } else {
        this.setState({ colors: newColors });
      }
    }
  };

  render() {
    const { colors } = this.state;

    return (
      <div className="matrix">
        {colors.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => this.handleClick(index)}
          ></div>
        ))}
      </div>
    );
  }
}

export default Matrix;
