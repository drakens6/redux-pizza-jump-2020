import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { TOPPINGS } from '../config/constants';

import { Form, Button } from 'react-bootstrap';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { setToppings, clearToppings } from '../actions/pizza';
import { nextMenu } from '../actions/menu';

const animatedComponents = makeAnimated();

const Toppings = ({ pizzaRed, nextMenu, setToppings, clearToppings }) => {
  const handleNext = e => {
    e.preventDefault();
    nextMenu();
  };

  const handleChange = selectedOptions => {
    const toppingValues =
      selectedOptions === null
        ? []
        : selectedOptions.map(topping => topping.value);
    setToppings(toppingValues);
  };

  const isToppingSelected = testValue => {
    for (let value of pizzaRed.toppings) {
      if (value === testValue) {
        return true;
      }
    }
    return false;
  };

  const availableToppings = [];
  const selectedToppings = [];

  for (let topping of TOPPINGS) {
    if (isToppingSelected(topping.value)) {
      selectedToppings.push(topping);
    } else {
      availableToppings.push(topping);
    }
  }

  return (
    <Fragment>
      <h1 className="display-4">Toppings</h1>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        value={selectedToppings}
        options={availableToppings}
        onChange={handleChange}
        isMulti
      />
      <div className="mt-3">
        <Button variant="success" type="button" onClick={e => handleNext(e)}>
          Ok
        </Button>
      </div>
    </Fragment>
  );
};

Toppings.propTypes = {};

const mapStateToProps = state => ({
  pizzaRed: state.pizza,
});

const mapDispatchToProps = dispatch => ({
  setToppings: toppings => dispatch(setToppings(toppings)),
  clearToppings: () => dispatch(clearToppings()),
  nextMenu: () => dispatch(nextMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toppings);
