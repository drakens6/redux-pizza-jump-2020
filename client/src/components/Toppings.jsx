import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Button } from 'react-bootstrap';

import { addTopping, removeTopping, clearToppings } from '../actions/pizza';
import { nextMenu } from '../actions/menu';

const Toppings = ({
  pizzaRed,
  nextMenu,
  addTopping,
  removeTopping,
  clearToppings,
}) => {
  const handleNext = e => {
    e.preventDefault();
    nextMenu();
  };

  return (
    <Fragment>
      <h1 className="display-4">Toppings</h1>
      <p>Just go with the cheese!</p>
      <Form onSubmit={e => handleNext(e)}>
        <div className="ml-auto">
          <Button variant="success" type="submit">
            Next
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

Toppings.propTypes = {};

const mapStateToProps = state => ({
  pizzaRed: state.pizza,
});

const mapDispatchToProps = dispatch => ({
  addTopping: topping => dispatch(addTopping(topping)),
  removeTopping: id => dispatch(removeTopping(id)),
  clearToppings: () => dispatch(clearToppings()),
  nextMenu: () => dispatch(nextMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toppings);
