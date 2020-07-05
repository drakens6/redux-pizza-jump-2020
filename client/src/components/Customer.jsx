import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Form, Button } from 'react-bootstrap';
import { setCustomer } from '../actions/customer';
import { nextMenu, previousMenu } from '../actions/menu';

export const UnconnectedCustomer = ({
  customer,
  setCustomer,
  nextMenu,
  previousMenu,
}) => {
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
    setFormData(() => ({ ...customer }));
  }, [customer]);

  const handleInputChange = (e) => {
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

  const handlePrev = (e) => {
    e.preventDefault();
    // Navigate user to the previous step
    previousMenu();
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Update the global customer state
    setCustomer(formData);
    // Navigate user to the next step
    nextMenu();
  };

  return (
    <Fragment>
      <h1 className="display-4">Customer and Shipping</h1>
      <Form onSubmit={(e) => handleNext(e)}>
        <Form.Group controlId="customerForm.name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name..."
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
            data-test="input-customer-name"
          />
        </Form.Group>
        <Form.Group controlId="customerForm.email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
            data-test="input-customer-email"
          />
        </Form.Group>
        <Form.Group controlId="customerForm.street">
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Street and Apartment Number"
            name="street"
            value={formData.street}
            onChange={(e) => handleInputChange(e)}
            data-test="input-customer-street"
          />
        </Form.Group>
        <Form.Group controlId="customerForm.city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Bellevue"
            name="city"
            value={formData.city}
            onChange={(e) => handleInputChange(e)}
            data-test="input-customer-city"
          />
        </Form.Group>
        <Form.Group controlId="customerForm.state">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="WA"
            name="state"
            value={formData.state}
            onChange={(e) => handleInputChange(e)}
            data-test="input-customer-state"
          />
        </Form.Group>
        <Form.Group controlId="customerForm.phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange(e)}
            data-test="input-customer-phone"
          />
        </Form.Group>
        <Button
          variant="secondary"
          type="button"
          onClick={(e) => handlePrev(e)}
          data-test="button-back"
        >
          Back
        </Button>{' '}
        <Button
          variant="success"
          type="submit"
          disabled={!isValid}
          data-test="button-next"
        >
          Review Order
        </Button>
      </Form>
    </Fragment>
  );
};

UnconnectedCustomer.propTypes = {
  customer: PropTypes.object.isRequired,
  setCustomer: PropTypes.func.isRequired,
  nextMenu: PropTypes.func.isRequired,
  previousMenu: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  customer: state.customer,
});

const mapDispatchToProps = (dispatch) => ({
  setCustomer: (data) => dispatch(setCustomer(data)),
  nextMenu: () => dispatch(nextMenu()),
  previousMenu: () => dispatch(previousMenu()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedCustomer);
