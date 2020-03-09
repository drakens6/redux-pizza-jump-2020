import React, { Component } from 'react';

import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  //This must be a functional component
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <div className={classes.OrderSummary}>
        <h3>Your Order</h3>
        <p>A delicious pizza with following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}$</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType='Danger' clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </div>
    );
  }
}

export default OrderSummary;
