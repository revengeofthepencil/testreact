import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WordCounter from './WordCounter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         Here is the word counter stuff:
            <WordCounter text="Count the words in here." targetWordCount={10} />
        </p>
      </div>
    );
  }
}

export default App;
