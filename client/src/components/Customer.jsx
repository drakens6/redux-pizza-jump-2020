import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Form, Button } from 'react-bootstrap';
import { setCustomer } from '../actions/customer';
import { nextMenu } from '../actions/menu';

const Customer = ({ customerRed, setCustomer, nextMenu }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    street: '',
    city: '',
    state: '',
    phone: '',
  });

  const isValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.street.trim() &&
    formData.city.trim() &&
    formData.state.trim() &&
    formData.phone.trim();

  useEffect(() => {
    setFormData(() => ({ ...customerRed }));
  }, []);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // const name = e.target.name;
    // const value = e.target.value;
    // setFormData(data => {
    //   return {
    //     ...data,
    //     [name]: value,
    //   };
    // });
  };

  const handleNext = e => {
    e.preventDefault();
    console.log('Next!');
    setCustomer(formData);
    nextMenu();
  };

  return (
    <Fragment>
      <h1 className="display-4">Customer and Shipping</h1>
      <Form onSubmit={e => handleNext(e)}>
        <Form.Group controlId="customerForm.name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name..."
            name="name"
            value={formData.name}
            onChange={e => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="customerForm.email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={formData.email}
            onChange={e => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="customerForm.street">
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Street and Apartment Number"
            name="street"
            value={formData.street}
            onChange={e => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="customerForm.city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Bellevue"
            name="city"
            value={formData.city}
            onChange={e => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="customerForm.state">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="WA"
            name="state"
            value={formData.state}
            onChange={e => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="customerForm.phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="phone"
            value={formData.phone}
            onChange={e => handleInputChange(e)}
          />
        </Form.Group>
        <Button variant="success" type="submit" disabled={!isValid}>
          Review Order
        </Button>
      </Form>
    </Fragment>
  );
};

Customer.propTypes = {};

const mapStateToProps = state => ({
  customerRed: state.customer,
});

const mapDispatchToProps = dispatch => ({
  setCustomer: data => dispatch(setCustomer(data)),
  nextMenu: () => dispatch(nextMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
