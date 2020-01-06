import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './component/routes/login';
import Signup from './component/routes/signup';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div>
            <div>
              <Switch>
                <Route exact path="/" >
                  <div>Hi Hamada </div>
                </Route>
                <Route exact path="/login"  >
                  <LogIn></LogIn>
                </Route>
                <Route exact path="/signup"  >
                  <Signup></Signup>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
