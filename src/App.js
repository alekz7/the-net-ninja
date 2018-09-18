import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComponent from './components/TodoComponent'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

var myCheese = {name: 'panela', smellFactor: 'strong', price: '3.50'}

const About = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <h3>Estamos en About</h3>      
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Router>
          <div>
            <Route exact path='/' render={(props)=><TodoComponent mssg="I like cheese" data={myCheese} />}></Route>
            <Route path='/about' component={About}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
