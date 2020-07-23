import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../screens/login/Login';
import Home from '../screens/home/Home';


class Controller extends Component {



  render() {
    return (
      <Router>
        <div className="main-container">
          <Route exact path='/' render={(props) => <Login/>} />
          <Route exact path='/home' render={(props) => <Home/>} />
        </div>
      </Router>
    )
  }
}

export default Controller;
