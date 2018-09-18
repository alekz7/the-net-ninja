import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComponent from './components/TodoComponent'

var myCheese = {name: 'panela', smellFactor: 'strong', price: '3.50'}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TodoComponent mssg="I like cheese" data={myCheese}/>
      </div>
    );
  }
}

export default App;
