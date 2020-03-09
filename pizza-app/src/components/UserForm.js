import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
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
    props.submitUser(user);
    props.submitLocation(location);
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

const mapStateToProps = (state) => ({
  user: state.user,
  location: state.location
})

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => dispatch(addUser(user)),
    submitLocation: (location) => dispatch(addLocation(location))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);