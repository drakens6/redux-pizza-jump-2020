import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { TOPPINGS } from '../config/constants';

import { Button } from 'react-bootstrap';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { setToppings, clearToppings } from '../actions/pizza';
import { nextMenu, previousMenu } from '../actions/menu';

const animatedComponents = makeAnimated();

export const UnconnectedToppings = ({
  pizza,
  nextMenu,
  setToppings,
  clearToppings,
  previousMenu,
}) => {
  const handlePrev = (e) => {
    e.preventDefault();
    // Navigate user to the previous step
    previousMenu();
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Navigate user to the next step
    nextMenu();
  };

  const handleChange = (selectedOptions) => {
    const toppingValues =
      selectedOptions === null
        ? []
        : selectedOptions.map((topping) => topping.value);
    setToppings(toppingValues);
  };

  const isToppingSelected = (testValue) => {
    for (let value of pizza.toppings) {
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
        data-test="multi-select-toppings"
      />
      <div className="mt-3">
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
          type="button"
          onClick={(e) => handleNext(e)}
          data-test="button-next"
        >
          Next
        </Button>
      </div>
    </Fragment>
  );
};

UnconnectedToppings.propTypes = {
  pizza: PropTypes.object.isRequired,
  setToppings: PropTypes.func.isRequired,
  clearToppings: PropTypes.func.isRequired,
  nextMenu: PropTypes.func.isRequired,
  previousMenu: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pizza: state.pizza,
});

const mapDispatchToProps = (dispatch) => ({
  setToppings: (toppings) => dispatch(setToppings(toppings)),
  clearToppings: () => dispatch(clearToppings()),
  nextMenu: () => dispatch(nextMenu()),
  previousMenu: () => dispatch(previousMenu()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedToppings);
