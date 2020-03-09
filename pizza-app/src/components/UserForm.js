import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import store from '../store';
import { addUser, addLocation } from '../actions';

const UserForm = (props) => {
  const [user, setUser] = useState('');
  const [location, setLocation] = useState('');

  const onUserChange = (e) => {
    setUser(e.target.value);
  }

  const onLocationChange = (e) => {
    setLocation(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    store.dispatch(addUser(user));
    store.dispatch(addLocation(location));
    setUser('');
    setLocation('');
    return;
  }

  return (
    <Form onSubmit={(e) => onFormSubmit(e)}>
      <Form.Field>
        <label>Name</label>
        <input placeholder="Name" value={user} onChange={(e) => onUserChange(e)}/>
      </Form.Field>
      <Form.Field>
        <label>Location to deliver to</label>
        <input placeholder="Location" value={location} onChange={(e) => onLocationChange(e)}/>
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default connect(null, { })(UserForm);