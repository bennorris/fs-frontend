import React, { Component } from 'react';
import './App.css';
import SentenceContainer from './components/SentenceContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">First Sentences</h1>
        </header>
        <SentenceContainer />
      </div>
    );
  }
}

export default App;
