import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
// import Info from './components/info';
import Sauce from './components/sauce';
import Toppings from './components/toppings';
import CheckOut from './components/checkout';
import Home from './components/info';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      phone: '',
      sauce_level: '',
      crust_type: '',
      pepperoni: '',
      sausage: '',
      bacon: ''
    }
  }

  customerInfo = (firstName, lastName, email, address, phone) => {
    this.setState({ firstName: firstName, lastName: lastName, email: email, address: address, phone: phone });
  }

  sauceInfo = (sauce_level, crust_type) => {
    this.setState({ sauce_level: sauce_level, crust_type: crust_type });
  }

  toppingsInfo = (pepperoni, sausage, bacon) => {
    this.setState({ pepperoni: pepperoni, sausage: sausage, bacon: bacon });
  }

  render() {
    return (
      <Router>
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <nav>
            <ul>
              <li><Link to='/'>Customer Info</Link></li>
              <li><Link to='/sauce'>Sauce</Link></li>
              <li><Link to='/toppings'>Toppings</Link></li>
              <li><Link to='/checkout'>Check Out</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path='/sauce'><Sauce cb2={this.sauceInfo} /></Route>
            <Route path='/toppings'><Toppings cb3={this.toppingsInfo} /></Route>
            <Route path='/checkout'><CheckOut firstName={this.state.firstName} lastName={this.state.lastName}
            email={this.state.email} address={this.state.address} phone={this.state.phone} 
            sauce_level={this.state.sauce_level} crust_type={this.state.crust_type} 
            pepperoni={this.state.pepperoni} sausage={this.state.sausage} bacon={this.state.bacon}/></Route>
            <Route path='/'><Home cb={this.customerInfo} /></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

// const Headline = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//     </div>
//   )
// }




// function Home() {
//   return (
//     <Info />
//   )
// }
// function Sauce_Func() {
//   return (
//     <Sauce />
//   )
// }
// function Toppings_Func() {
//   return (
//     <Toppings />
//   )
// }
// function Checkout_Func() {
//   return (
//     <CheckOut />
//   )
// }

export default App;