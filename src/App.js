import React, { Component } from 'react';
import whiteDiamond from './img/diamond-icon-white.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={whiteDiamond} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
