import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { resetMenu } from '../actions/menu';
import { clearCustomer } from '../actions/customer';
import { resetPizza } from '../actions/pizza';

const Confirmation = ({ resetMenu }) => {
  useEffect(() => {
    setTimeout(() => {
      clearCustomer();
      resetPizza();
      resetMenu();
    }, 6000);
  });

  return (
    <Fragment>
      <h1 className="display-4">Order Confirmation</h1>
      <p>Thank you for your order!</p>
      <p>Your pizza may arrive shortly... or not at all :p</p>
    </Fragment>
  );
};

Confirmation.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  resetMenu: () => dispatch(resetMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
