import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Col, Row } from 'react-bootstrap';
import { nextMenu } from '../actions/menu';

const ReviewOrder = ({ nextMenu, customerRed, pizzaRed }) => {
  const handleNext = e => {
    e.preventDefault();
    nextMenu();
  };

  return (
    <Fragment>
      <h1 className="display-4">Review Order</h1>
      <p>Please review your order.</p>
      <div>
        <Row>
          <Col>Name</Col>
          <Col>{customerRed.name}</Col>
        </Row>
        <Row>
          <Col>Email</Col>
          <Col>{customerRed.email}</Col>
        </Row>
      </div>
      <p className="mt-3">We think everything's fine, just click confirm.</p>
      <Button variant="success" type="submit" onClick={e => handleNext(e)}>
        Confirm Order
      </Button>
    </Fragment>
  );
};

ReviewOrder.propTypes = {};

const mapStateToProps = state => ({
  customerRed: state.customer,
  pizzaRed: state.pizza,
});

const mapDispatchToProps = dispatch => ({
  nextMenu: () => dispatch(nextMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewOrder);
