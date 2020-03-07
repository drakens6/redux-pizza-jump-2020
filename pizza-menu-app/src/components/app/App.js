import React from 'react';
//import PropTypes from 'prop-types'

import './App.css';

// Views
import AddCustomer from '../../components/views/addCustomer'
import AddPizzaSauceAndCrust from '../../components/views/addPizzaSauceAndCrust'
import AddPizzaToppings from '../../components/views/addPizzaToppings'
import DisplayFinalOrder from '../../components/views/displayFinalOrder'

class App extends React.Component{
  render() {
    return(
      <div>
        <AddCustomer/>
        <AddPizzaSauceAndCrust/>
        <AddPizzaToppings/>
        <DisplayFinalOrder/>
      </div>
    )
  }
}
export default App
