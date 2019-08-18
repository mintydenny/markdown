import React from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked'
import DOMPurify from 'dompurify'

class Editor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: this.props.inputText
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
      <textarea value={this.props.inputText} onChange={this.handleChange.bind(this)} />
    );
  }
}

function Preview(props){
  let innerHTML = {__html: DOMPurify.sanitize(marked(props.inputText))}
  console.log(innerHTML)
  return <div id={"preview"} dangerouslySetInnerHTML={innerHTML} />
}

function Guide(){
  return <h1> Guide </h1>
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text:'# This is a header. \n\n'
      + '## This is a subheader. \n\n'
      +  'This is a [website] \n\n'
      + 'You can **bold**, *italicize*, ~~strikethrough~~ texts! \n\n'
      + 'You can even display code: \n\n'
      + '`print(\'hello world!\')` \n\n'
      + '>This creates a block quote \n\n'
      + '--- \n'
      + 'Todo \n'
      + '1. Add an adjustable slidebar\n'
      + '2. Add a guide on a side nav bar\n'
      + '[website]: https://dennymin.com/Markdown/'

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
          <div className="App-header-elem">
            <div className="App-title">
              Markdown Editor
            </div>
            <div className="App-credit">
              Made by <a href="https://dennymin.com/" target="_blank"> Denny Min </a>
            </div>
          </div>
        {/*<Guide />*/}
      </header>
      <div className="main-container">
        <div className="content-wrapper" id="editor-wrapper">
          <div className="content-wrapper-padding" id="editor-wrapper-padding">
            <Editor className="content-editor" inputText={this.state.text} handleTextUpdate={this.handleTextUpdate.bind(this)}/>
          </div>
        </div>
        <div className="content-wrapper" id="preview-wrapper">
          <div className="content-wrapper-padding" id="preview-wrapper-padding">
            <Preview className="content-preview" inputText={this.state.text}/>
          </div>
        </div>
      </div>
    </div>
  )
}
};




export default App;
