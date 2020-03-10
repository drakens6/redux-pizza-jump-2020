import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addUser } from '../actions';

const UserForm = (props) => {
  const [user, setUser] = useState('');
  const [street, setStreet] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.submitUser(user);
    setUser('');
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
        <input placeholder="Name" type="text" value={user} onChange={(e) => setUser(e.target.value)} required/>
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </Form.Field>
      <Form.Field>
        <label>Phone</label>
        <input placeholder="Phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
      </Form.Field>
      <h4>Location to Deliver to</h4>
      <Form.Field>
        <label>Street</label>
        <input placeholder="street" value={street} onChange={(e) => setStreet(e.target.value)} required/>
      </Form.Field>
      <Form.Field>
        <label>City</label>
        <input placeholder="Location" value={city} onChange={(e) => setCity(e.target.value)} required/>
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => dispatch(addUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);