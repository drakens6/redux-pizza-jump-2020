import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../components/app/App'
import AddCustomer from '../components/v/addCustomer'
import AddPizzaSauceAndCrusts from '../components/v/addPizzaSauceAndCrust'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      {/* <Route path="/:filter?" component={App} /> */}
      <Route path="/app" component={App} />
      <Route path="/addcustomer" component={AddCustomer} />
      <Route path="/addsaucecrust" component={AddPizzaSauceAndCrusts} />

    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root