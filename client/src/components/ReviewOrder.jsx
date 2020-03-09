import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Button } from 'react-bootstrap';
import { nextMenu } from '../actions/menu';

const ReviewOrder = ({ nextMenu }) => {
  const handleNext = e => {
    e.preventDefault();
    nextMenu();
  };

  return (
    <Fragment>
      <h1 className="display-4">Review Order</h1>
      <p>Please review your order.</p>
      <p>...</p>
      <p>We think everything's fine, just click confirm.</p>
      <Form onSubmit={e => handleNext(e)}>
        <div className="ml-auto">
          <Button variant="success" type="submit">
            Confirm Order
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

ReviewOrder.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  nextMenu: () => dispatch(nextMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewOrder);
