import React from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked'
import DOMPurify from 'dompurify'

class Editor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: this.props.text
    }
  }
  handleChange(e){
    this.setState({
      text: e.target.value
    });
    this.props.handleTextUpdate(e.target.value)
  }
  render(){
    return (
      <textarea value={this.props.text} onChange={this.handleChange.bind(this)}/>
    );
  }
}

function Preview(props){
  let innerHTML = {__html: DOMPurify.sanitize(marked(props.inputText))}
  console.log(innerHTML)
  return <div dangerouslySetInnerHTML={innerHTML} />
}

function Guide(){
  return <h1> Guide </h1>
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text:'# Marked in the browser\n\nRendered by **marked**.'
    }
  }
  handleTextUpdate(updatedText){
    this.setState({
      text:updatedText
    });
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
          {/*<Guide />*/}
        </header>
        <div className="content">
          <Editor className="content-editor" inputText={this.state.text} handleTextUpdate={this.handleTextUpdate.bind(this)}/>
          <Preview className="content-preview" inputText={this.state.text}/>
        </div>
      </div>
    )
  }
};




export default App;
