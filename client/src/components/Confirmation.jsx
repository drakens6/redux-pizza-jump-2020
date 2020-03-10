import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { resetMenu } from '../actions/menu';
import { clearCustomer } from '../actions/customer';
import { resetPizza } from '../actions/pizza';

const Confirmation = ({
  customerRed,
  resetMenu,
  clearCustomer,
  resetPizza,
}) => {
  useEffect(() => {
    setTimeout(() => {
      clearCustomer();
      resetPizza();
      resetMenu();
    }, 7000);
  });

  return (
    <Fragment>
      <h1 className="display-4">Order Confirmation</h1>
      <p>Thank you for your order, {customerRed.name}!</p>
      <p>Your pizza may arrive shortly... or not at all :p</p>
    </Fragment>
  );
};

Confirmation.propTypes = {};

const mapStateToProps = state => ({
  customerRed: state.customer,
});

const mapDispatchToProps = dispatch => ({
  resetMenu: () => dispatch(resetMenu()),
  clearCustomer: () => dispatch(clearCustomer()),
  resetPizza: () => dispatch(resetPizza()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
