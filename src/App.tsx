import React from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';
import { Route, Redirect } from 'react-router';


import EditPizza from './components/EditPizza/EditPizza'
import Account from './components/Account/Account'
import Orders from './components/Orders/Orders'
import Home from './components/Home/Home';
import { mapStateToProps, mapDispatchToProps } from './store/actions/pizza.actions';
import { connect } from 'react-redux';
import { InitialState } from './models/store.model';
import Cart from './components/Cart/Cart';

class App extends React.Component<InitialState, {}> {
  
  componentDidMount() {
    this.props.fetchPizzaRecipes()
  }

  render() {
    return (
      <div className="Global__Container">
        <Layout>
          <Route exact path='/menu' component={Home} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/edit/:id' component={EditPizza} />
          <Route exact path='/orders' component={Orders} />
          <Route exact path='/cart' component={Cart} />
          <Redirect exact from="/" to="/menu" />
        </Layout>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

