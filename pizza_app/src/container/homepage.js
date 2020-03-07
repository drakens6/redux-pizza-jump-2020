import React, { Component } from 'react'
import Form from '../component/form';
import Sauce from '../component/sauce';
import Toppings from '../component/toppings';
import Final from '../component/final';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name : '',
            last_name: '',
            address: '',
            phone: '',
            email: '',
            sauceLevel: '',
            crustType: '',

            pepperoni: '',
            pineapple: '',
            spinach: '',
            sausage: '',
            bacon: '',
            onion:'',
            mushroom: ''
          };
    }

    formCallBack = (first_name, last_name, address, phone, email) => {
        this.setState({first_name:first_name, last_name: last_name, address:address, phone:phone, email: email});
    }

    sauceAndToppingsCallBack = (sauceLevel, crustType) => {
        this.setState({sauceLevel:sauceLevel, crustType:crustType});
    }

    additionalToppingsCallBack = (pepperoni, pineapple, spinach, sausage, bacon, onion, mushroom) => {
        this.setState({pepperoni:pepperoni, pineapple:pineapple, spinach:spinach, sausage:sausage, bacon: bacon, onion: onion, mushroom:mushroom});
    }

    render() {
        return (
            <div>
            <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/sauce">Add Sauce and Crust</Link>
                </li>
                <li>
                  <Link to="/toppings">Add additional toppings</Link>
                </li>
                <li>
                <Link to="/final">Checkout</Link>
              </li>
              </ul>
      
              <hr />
      
              {/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
              */}
              <Switch>
                <Route exact path="/">
                  <Form cb={this.formCallBack}/>
                </Route>
                <Route path="/sauce">
                  <Sauce cb={this.sauceAndToppingsCallBack}/>
                </Route>
                <Route path="/toppings">
                  <Toppings cb={this.additionalToppingsCallBack}/>
                </Route>
                <Route path="/final">
                <Final data={this.state}/>
              </Route>
              </Switch>
            </div>
          </Router>
            </div>
        )
    }
}
