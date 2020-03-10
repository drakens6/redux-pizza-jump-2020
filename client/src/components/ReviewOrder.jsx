import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Col, Row } from 'react-bootstrap';
import { nextMenu } from '../actions/menu';

import { TOPPINGS, SAUCE_LEVELS, CRUST_SIZES } from '../config/constants';

const ReviewOrder = ({ nextMenu, customerRed, pizzaRed }) => {
  const handleNext = e => {
    e.preventDefault();
    nextMenu();
  };

  console.log(TOPPINGS);
  const selectedToppings = TOPPINGS.reduce((accumulator, topping) => {
    if (pizzaRed.toppings.includes(topping.value)) {
      accumulator.push(topping.label);
    }
    return accumulator;
  }, []);

  console.log(selectedToppings);

  return (
    <Fragment>
      <h1 className="display-4">Review Order</h1>
      <div className="mb-3">
        <p className="lead mb-1">Pizza</p>
        <Row>
          <Col>Sauce Level</Col>
          <Col>
            {
              SAUCE_LEVELS.find(sauce => sauce.value === pizzaRed.sauceLevel)
                .label
            }
          </Col>
        </Row>
        <Row>
          <Col>Crust Size</Col>
          <Col>
            {
              CRUST_SIZES.find(crust => crust.value === pizzaRed.crustSize)
                .label
            }
          </Col>
        </Row>
        <Row>
          <Col>Toppings</Col>
          <Col>{selectedToppings.join(', ')}</Col>
        </Row>
      </div>
      <div className="mb-3">
        <p className="lead mb-1">Customer</p>
        <Row>
          <Col>Name</Col>
          <Col>{customerRed.name}</Col>
        </Row>
        <Row>
          <Col>Email</Col>
          <Col>{customerRed.email}</Col>
        </Row>
        <Row>
          <Col>Street</Col>
          <Col>{customerRed.street}</Col>
        </Row>
        <Row>
          <Col>City</Col>
          <Col>{customerRed.city}</Col>
        </Row>
        <Row>
          <Col>State</Col>
          <Col>{customerRed.state}</Col>
        </Row>
        <Row>
          <Col>Phone</Col>
          <Col>{customerRed.phone}</Col>
        </Row>
      </div>
      <p>
        <i>Please review your order.</i>
      </p>
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
