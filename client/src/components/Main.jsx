import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SauceCrust from './SauceCrust';
import Customer from './Customer';
import Toppings from './Toppings';
import ReviewOrder from './ReviewOrder';

const Main = menuRed => {
  return (
    <div>
      <SauceCrust />
      <Toppings />
      <Customer />
      <ReviewOrder />
    </div>
  );
};

Main.propTypes = {};

const mapStateToProps = state => ({
  menuRed: state.menu,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
