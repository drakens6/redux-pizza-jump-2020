import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Col, Row } from 'react-bootstrap';
import { nextMenu, previousMenu } from '../actions/menu';

import { TOPPINGS, SAUCE_LEVELS, CRUST_SIZES } from '../config/constants';

export const UnconnectedReviewOrder = ({
  nextMenu,
  previousMenu,
  customer,
  pizza,
}) => {
  const handlePrev = (e) => {
    e.preventDefault();
    // Navigate user to the previous step
    previousMenu();
  };

  const handleNext = (e) => {
    e.preventDefault();
    nextMenu();
  };

  // map and filter the selected toppings
  const selectedToppings = TOPPINGS.reduce((accumulator, topping) => {
    if (pizza.toppings.includes(topping.value)) {
      accumulator.push(topping.label);
    }
    return accumulator;
  }, []);

  return (
    <Fragment>
      <h1 className="display-4">Review Order</h1>
      <div className="mb-3">
        <p className="lead mb-1">Pizza</p>
        <Row>
          <Col data-test="label-sauce-level">Sauce Level</Col>
          <Col>
            {
              // map sauce level id to string
              SAUCE_LEVELS.find((sauce) => sauce.value === pizza.sauceLevel)
                .label
            }
          </Col>
        </Row>
        <Row>
          <Col data-test="label-crust-size">Crust Size</Col>
          <Col>
            {
              // map crust size id to string
              CRUST_SIZES.find((crust) => crust.value === pizza.crustSize).label
            }
          </Col>
        </Row>
        <Row>
          <Col data-test="label-toppings">Toppings</Col>
          <Col>{selectedToppings.join(', ')}</Col>
        </Row>
      </div>
      <div className="mb-3">
        <p className="lead mb-1">Customer</p>
        <Row>
          <Col data-test="label-customer-name">Name</Col>
          <Col>{customer.name}</Col>
        </Row>
        <Row>
          <Col data-test="label-customer-email">Email</Col>
          <Col>{customer.email}</Col>
        </Row>
        <Row>
          <Col data-test="label-customer-street">Street</Col>
          <Col>{customer.street}</Col>
        </Row>
        <Row>
          <Col data-test="label-customer-city">City</Col>
          <Col>{customer.city}</Col>
        </Row>
        <Row>
          <Col data-test="label-customer-state">State</Col>
          <Col>{customer.state}</Col>
        </Row>
        <Row>
          <Col data-test="label-customer-phone">Phone</Col>
          <Col>{customer.phone}</Col>
        </Row>
      </div>
      <p>
        <i>Please review your order.</i>
      </p>
      <Button
        variant="secondary"
        type="button"
        onClick={(e) => handlePrev(e)}
        data-test="button-back"
      >
        Back
      </Button>{' '}
      <Button
        variant="success"
        type="submit"
        onClick={(e) => handleNext(e)}
        data-test="button-next"
      >
        Confirm Order
      </Button>
    </Fragment>
  );
};

UnconnectedReviewOrder.propTypes = {
  pizza: PropTypes.object.isRequired,
  customer: PropTypes.object.isRequired,
  nextMenu: PropTypes.func.isRequired,
  previousMenu: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  customer: state.customer,
  pizza: state.pizza,
});

const mapDispatchToProps = (dispatch) => ({
  nextMenu: () => dispatch(nextMenu()),
  previousMenu: () => dispatch(previousMenu()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedReviewOrder);
