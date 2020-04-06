import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Button } from 'react-bootstrap';

import { setSauceLevel, setCrustSize } from '../actions/pizza';
import { nextMenu, previousMenu } from '../actions/menu';

import { CRUST_SIZES, SAUCE_LEVELS } from '../config/constants';

export const UnconnectedSauceCrust = ({
  pizza,
  setSauceLevel,
  setCrustSize,
  nextMenu,
  previousMenu,
}) => {
  useEffect(() => {}, []);

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

  const handleCrustSizeSelect = (e) => {
    // Update crust size state
    setCrustSize(e.target.value);
  };

  const handleSauceLevelSelect = (e) => {
    // Update sauce level state
    setSauceLevel(e.target.value);
  };

  return (
    <Fragment>
      <h1 className="display-4">Sauce and Crust</h1>
      <Form onSubmit={(e) => handleNext(e)}>
        <Form.Group controlId="sauceCrust.crustSize">
          <Form.Label>Crust Diameter</Form.Label>
          <Form.Control
            as="select"
            defaultValue={pizza.crustSize.toString()}
            onChange={(e) => handleCrustSizeSelect(e)}
            data-test="select-crust-size"
          >
            {CRUST_SIZES.map((crust) => {
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
            defaultValue={pizza.sauceLevel.toString()}
            onChange={(e) => handleSauceLevelSelect(e)}
            data-test="select-sauce-level"
          >
            {SAUCE_LEVELS.map((sauce) => {
              return (
                <option key={sauce.value} value={sauce.value.toString()}>
                  {sauce.label}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Button
          variant="secondary"
          type="button"
          onClick={(e) => handlePrev(e)}
          data-test="button-back"
        >
          Back
        </Button>{' '}
        <Button variant="success" type="submit" data-test="button-next">
          Next
        </Button>
      </Form>
    </Fragment>
  );
};

UnconnectedSauceCrust.propTypes = {
  pizza: PropTypes.object.isRequired,
  setSauceLevel: PropTypes.func.isRequired,
  setCrustSize: PropTypes.func.isRequired,
  nextMenu: PropTypes.func.isRequired,
  previousMenu: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pizza: state.pizza,
});

const mapDispatchToProps = (dispatch) => ({
  setSauceLevel: (level) => dispatch(setSauceLevel(level)),
  setCrustSize: (size) => dispatch(setCrustSize(size)),
  nextMenu: () => dispatch(nextMenu()),
  previousMenu: () => dispatch(previousMenu()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedSauceCrust);
