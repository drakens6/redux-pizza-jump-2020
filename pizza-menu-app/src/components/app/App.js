import React from 'react';
//import PropTypes from 'prop-types'

import './App.css';

// import AddCustomer from '../v/addCustomer'

// Views
//import AddCustomer from '../../components/views/addCustomer'
// import AddPizzaSauceAndCrust from '../../components/views/addPizzaSauceAndCrust'
// import AddPizzaToppings from '../../components/views/addPizzaToppings'
// import DisplayFinalOrder from '../../components/views/displayFinalOrder'

// import Routing from '../routing'

class App extends React.Component{

  constructor() {
    super()
    this.state = {
      currentPage: 1,
      links: [
        { 'name':'page1', 'to': 1},
        { 'name': 'page2', 'to': 2}
      ]
      // links: [
      //   { 'name': 'Add Customer', 'to': 1 },
      //   { 'name': 'Add Sauce and Crust', 'to': 2 },
      //   { 'name': 'Add Toppings', 'to': 3},
      //   { 'name': 'Final Order', 'to': 4}
      // ]
    }
    this.changePage = this.changePage.bind(this)
    
  }

  changePage(newPageTo){
    this.setState({currentPage:newPageTo})
  }
  
  render() {
    return(
      <div>
        {/* <Routing
          links={this.state.links}
          changePage={this.changePage}
        /> */}
        <h1>Welcome to the Pizza Menu App!</h1>



        {/* <AddCustomer/> */}
        {/* <AddPizzaSauceAndCrust/>
        <AddPizzaToppings/>
        <DisplayFinalOrder/> */}
      </div>
    )
  }
}
export default App
