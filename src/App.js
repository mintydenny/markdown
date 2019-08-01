import React from 'react';
import logo from './logo.svg';
import './App.css';
import Guide from './Guide';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <div className="App-title">
            Markdown Editor
          </div>
        </nav>
        <Guide />
      </header>
      <div className="content">

      </div>
    </div>
  );
}

export default App;
