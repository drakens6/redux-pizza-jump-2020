import React from "react";
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import './App.css'

import Home from './components/Home';
import PizzaBase from './components/PizzaBase';

export default class App extends React.Component {

    render() {
      return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <button><Link to="/">Home</Link></button>
                </li>
                <li>
                  <button><Link to="/base">Pizza Base</Link></button>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/base">
                <PizzaBase />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  
}