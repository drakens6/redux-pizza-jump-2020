import React from "react";
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import Home from './components/Home'

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
              </ul>
            </nav>

            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  
}