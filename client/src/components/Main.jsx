import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Landing from './Landing';
import SauceCrust from './SauceCrust';
import Customer from './Customer';
import Toppings from './Toppings';
import ReviewOrder from './ReviewOrder';
import Confirmation from './Confirmation';

const Main = ({ step }) => {
  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    // Display a proper component based on the order step.
    // We can alternatively use routing, but this works just as fine.
    <div data-test="component-main">
      {step === 0 && <Landing />}
      {step === 1 && <SauceCrust />}
      {step === 2 && <Toppings />}
      {step === 3 && <Customer />}
      {step === 4 && <ReviewOrder />}
      {step === 5 && <Confirmation resetDelay={5000} />}
    </div>
  );
};

Main.propTypes = {
  step: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.menu.step,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
