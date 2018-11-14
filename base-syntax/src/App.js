import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "Aurelien"
  }

  changeNameHandler = (event) => {
    this.setState({
        username: event.target.value
    });
  }

  render() {
    const inputStyle = {
      border: '1px solid blue',
      margin: 'auto',
      textAlign: 'center',
      font: 'inherit',
      pointer: 'cursor'
    }

    return (
      <div className="App">
        <UserInput
          style={inputStyle}
          changed={this.changeNameHandler}
          value={this.state.username} />

        <UserOutput username={this.state.username} />
        <UserOutput username="Maxime" />
        <UserOutput username="Tom" />
        <UserOutput username="Abi" />
        <UserOutput username="Alicia" />
      </div>
    );
  }
}

export default App;
