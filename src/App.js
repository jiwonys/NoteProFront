import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to NotePro
        </p>
        <a
          className="App-link"
          href="http://localhost:8080/createSticky/1/blue/1/2/thisisfirst"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create a Sticky
        </a>
        <a
          className="App-link"
          href="http://localhost:8080/load"
          target="_blank"
          rel="noopener noreferrer"
        >
          Load Sticky
        </a>
        <a
          className="App-link"
          href="http://localhost:8080/deleteAll"
          target="_blank"
          rel="noopener noreferrer"
        >
          Delete All Stickies
        </a>
        <a
          className="App-link"
          href="http://localhost:8080/save"
          target="_blank"
          rel="noopener noreferrer"
        >
          Save Stickies
        </a>
      </header>
    </div>
  );
}

export default App;
