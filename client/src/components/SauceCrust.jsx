import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Button } from 'react-bootstrap';

import { setSauceLevel, setCrustSize } from '../actions/pizza';
import { nextMenu } from '../actions/menu';

import { CRUST_SIZES, SAUCE_LEVELS } from '../config/constants';

const SauceCrust = ({ pizzaRed, setSauceLevel, setCrustSize, nextMenu }) => {
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
            {CRUST_SIZES.map(crust => {
              return (
                <option key={crust.value} value={crust.value.toString()}>
                  {crust.label}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="sauceCrust.sauceLevel">
          <Form.Label>Sauce Level</Form.Label>
          <Form.Control
            as="select"
            defaultValue={pizzaRed.sauceLevel.toString()}
            onChange={e => handleSauceLevelSelect(e)}
          >
            {SAUCE_LEVELS.map(sauce => {
              return (
                <option key={sauce.value} value={sauce.value.toString()}>
                  {sauce.label}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Button variant="success" type="submit">
          Next
        </Button>
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
  nextMenu: () => dispatch(nextMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SauceCrust);
