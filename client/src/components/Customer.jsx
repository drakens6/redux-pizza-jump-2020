import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Form, Button } from 'react-bootstrap';

const Customer = props => {
  return (
    <Fragment>
      <h1 className="display-4">Customer and Shipping</h1>
      <Form>
        <Form.Group controlId="customerForm.name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name..." />
        </Form.Group>
        <Form.Group controlId="customerForm.email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="customerForm.streetAddress">
          <Form.Label>Street Address</Form.Label>
          <Form.Control type="text" placeholder="Street and Apartment Number" />
        </Form.Group>
        <Form.Group controlId="customerForm.city">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Bellevue" />
        </Form.Group>
        <Form.Group controlId="customerForm.state">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="WA" />
        </Form.Group>
        <Form.Group controlId="customerForm.phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <div className="ml-auto">
          <Button variant="success" type="submit">
            Next
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

Customer.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
