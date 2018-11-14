import React, { Component } from 'react';

import './App.css';
import ValidateComponent from './ValidateComponent/ValidateComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {

  state = {
    output: '',
    chars: []
  }

  updateOutput = (event) => {
    this.setState({
      output: event.target.value,
      chars: event.target.value.split('')
    });
  }

  removeChar = (charIndex) => {
    const chars = [...this.state.chars];
    chars.splice(charIndex, 1);
    this.setState({
      output: chars.join(''),
      chars: chars
    });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={event => {this.updateOutput(event)}} value={this.state.output}/>
        <p>{this.state.output}</p>

        <ValidateComponent textLength={5}/>

        {this.state.chars.map((char, index) => {
          return <CharComponent char={char} click={() => this.removeChar(index)}/>
        })}
      </div>
    );
  }
}

export default App;
