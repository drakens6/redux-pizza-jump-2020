import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Landing from './Landing';
import SauceCrust from './SauceCrust';
import Customer from './Customer';
import Toppings from './Toppings';
import ReviewOrder from './ReviewOrder';
import Confirmation from './Confirmation';

const Main = ({ menuRed }) => {
  useEffect(() => {
    console.log(menuRed);
  }, []);

  return (
    // Display a proper component based on the order step.
    // We can alternatively use routing, but this works just as fine.
    <div>
      {menuRed.step === 0 && <Landing />}
      {menuRed.step === 1 && <SauceCrust />}
      {menuRed.step === 2 && <Toppings />}
      {menuRed.step === 3 && <Customer />}
      {menuRed.step === 4 && <ReviewOrder />}
      {menuRed.step === 5 && <Confirmation />}
    </div>
  );
};

Main.propTypes = {};

const mapStateToProps = state => ({
  menuRed: state.menu,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
