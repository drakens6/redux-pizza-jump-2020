import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { resetMenu } from '../actions/menu';
import { clearCustomer } from '../actions/customer';
import { resetPizza } from '../actions/pizza';

export const UnconnectedConfirmation = ({
  name,
  resetMenu,
  clearCustomer,
  resetPizza,
  resetDelay,
}) => {
  useEffect(() => {
    // navigate back to the Landing view after 7 seconds, clearing all the Redux states
    setTimeout(() => {
      clearCustomer();
      resetPizza();
      resetMenu();
    }, resetDelay);
  }, [resetDelay, clearCustomer, resetPizza, resetMenu]);

  return (
    <Fragment>
      <h1 className="display-4">Order Confirmation</h1>
      <p data-test="message">Thank you for your order, {name}!</p>
    </Fragment>
  );
};

UnconnectedConfirmation.propTypes = {
  name: PropTypes.string.isRequired,
  resetMenu: PropTypes.func.isRequired,
  clearCustomer: PropTypes.func.isRequired,
  resetPizza: PropTypes.func.isRequired,
  resetDelay: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.customer.name,
});

const mapDispatchToProps = (dispatch) => ({
  resetMenu: () => dispatch(resetMenu()),
  clearCustomer: () => dispatch(clearCustomer()),
  resetPizza: () => dispatch(resetPizza()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedConfirmation);
