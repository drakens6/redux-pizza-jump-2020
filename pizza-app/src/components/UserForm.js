import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addUser, updateView } from '../actions';

const UserForm = (props) => {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      street,
      email,
      city,
      phone
    }
    props.addUser(user);
    props.updateView("receipt");
    setName('');
    setStreet('');
    setEmail('');
    setCity('');
    setPhone('');
    return;
  }

  return (
    <Form onSubmit={(e) => onFormSubmit(e)}>
      <Form.Field>
        <label>Name</label>
        <input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off"/>
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off"/>
      </Form.Field>
      <Form.Field>
        <label>Phone</label>
        <input placeholder="Phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="off"/>
      </Form.Field>
      <h4>Location to Deliver to</h4>
      <Form.Field>
        <label>Street</label>
        <input placeholder="street" value={street} onChange={(e) => setStreet(e.target.value)} autoComplete="off"/>
      </Form.Field>
      <Form.Field>
        <label>City</label>
        <input placeholder="Location" value={city} onChange={(e) => setCity(e.target.value)} autoComplete="off"/>
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
    updateView: (view) => dispatch(updateView(view))
  }
}

export default connect(null, mapDispatchToProps)(UserForm);