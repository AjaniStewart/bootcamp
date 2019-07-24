
import React, { Component } from 'react';
import './App.css';
import './Ticker'
import Tickers from './Ticker.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Cryptocurrency Ticker</h2>
        </div>
        <Tickers />
      </div>
    );
  }
}

export default App;

