import React from 'react';
import logo from './logo.svg';
import './App.css';
import Guide from './Guide';
import Editor from './Editor';
import Preview from './Preview'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text:""
    }
  }

  render(){
    return(
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
          <Editor />
          <Preview inputText={this.state.text}/>
        </div>
      </div>
    )
  }
};


export default App;
