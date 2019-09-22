import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username:"karthik",
  }
  changedNameHandler = (event)=>{
    this.setState({
      username:event.target.value
    });
  }
  render(){    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserInput changed={this.changedNameHandler} username={this.state.username}/>
          <UserOutput username={this.state.username} />
          <UserOutput username={this.state.username} />
        </header>
      </div>
    );
  }
}

export default App;
