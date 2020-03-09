import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import { nextMenu } from '../actions/menu';

const Landing = ({ nextMenu }) => {
  const handleClick = e => {
    nextMenu();
  };
  return (
    <Fragment>
      <div className="text-center">
        <h1 className="display-4">Welcome to Anton's Pizza Shop</h1>
        <Button variant="success" onClick={e => handleClick(e)}>
          Get my Pizza, Now!
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
