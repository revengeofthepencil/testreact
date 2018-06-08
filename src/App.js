import React, { Component } from 'react';
import './App.css';
import WordCounter from './WordCounter';


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
        <p className="App-intro">
         Here is the word counter stuff:
            <WordCounter text="Count the words in here." targetWordCount={10} />
        </p>
      </div>
    );
  }
}

export default App;
