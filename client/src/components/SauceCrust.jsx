import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Button } from 'react-bootstrap';

import { setSauceLevel, setCrustSize } from '../actions/pizza';
import { nextMenu } from '../actions/menu';

const SauceCrust = ({ pizzaRed, setSauceLevel, setCrustSize }) => {
  useEffect(() => {}, []);

  const handleNext = e => {
    e.preventDefault();
    nextMenu();
  };

  const handleCrustSizeSelect = e => {
    setCrustSize(e.target.value);
    console.log(e.target.value);
  };

  const handleSauceLevelSelect = e => {
    setSauceLevel(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Fragment>
      <h1 className="display-4">Sauce and Crust</h1>
      <Form onSubmit={e => handleNext(e)}>
        <Form.Group controlId="sauceCrust.crustSize">
          <Form.Label>Crust Diameter</Form.Label>
          <Form.Control
            as="select"
            defaultValue={pizzaRed.crustSize.toString()}
            onChange={e => handleCrustSizeSelect(e)}
          >
            <option value="8">8 inch - Mini</option>
            <option value="10">10 inch - Small</option>
            <option value="12">12 inch - Medium</option>
            <option value="14">14 inch - Large</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="sauceCrust.sauceLevel">
          <Form.Label>Sauce Level</Form.Label>
          <Form.Control
            as="select"
            defaultValue={pizzaRed.sauceLevel.toString()}
            onChange={e => handleSauceLevelSelect(e)}
          >
            <option value="0">Sauceless Border</option>
            <option value="1">Regular Portion</option>
            <option value="2">Light Portion</option>
            <option value="3">Extra Portion</option>
          </Form.Control>
        </Form.Group>

        <div className="ml-auto">
          <Button variant="success" type="submit">
            Next
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

SauceCrust.propTypes = {};

const mapStateToProps = state => ({
  pizzaRed: state.pizza,
});

const mapDispatchToProps = dispatch => ({
  setSauceLevel: level => dispatch(setSauceLevel(level)),
  setCrustSize: size => dispatch(setCrustSize(size)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SauceCrust);
