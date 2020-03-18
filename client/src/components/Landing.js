import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import { nextMenu } from '../actions/menu';

// This view is displayed when the App is first loaded or a new order is to be made
const Landing = ({ nextMenu }) => {
  const handleClick = e => {
    e.preventDefault();
    // Navigate user to the first step of the order (sauce and crust)
    nextMenu();
  };

  return (
    <Fragment>
      <div className="text-center">
        <h1 className="display-4">Welcome to Anton's Pizza</h1>
        <Button variant="success" onClick={e => handleClick(e)}>
          Order my Pizza, Now!
        </Button>
      </div>
    </Fragment>
  );
};

Landing.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  nextMenu: () => dispatch(nextMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
