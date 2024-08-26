import React from 'react';
import './App.css';
import Matrix from './Components/Matrix';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>3 x 3 Matrix </h1>
        <p>When you click on a box - color change to green</p>
        <p>When you click on the last box, all colors change to orange in sequence of their clicks</p>
        <Matrix />
      </div>
    );
  }
}

export default App;
