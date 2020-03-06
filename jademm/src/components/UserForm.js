import React, {useState} from 'react';
import {connect} from 'react-redux';
import { addUser } from '../actions'

class UserForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: ''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone
        }
        
        this.props.addUser(user);
    }

    render() {
        return(
            <form>
                <label>Name </label>
                <input type='text' id='name' value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/><br/>
                <label>Email Address </label>
                <input type='email' id='email' value={this.state.email} required onChange={(e) => this.setState({email: e.target.value})}/><br/>
                <label>Street Address </label>
                <input type='text' id='address' value={this.state.address} onChange={(e) => this.setState({address: e.target.value})}/><br/>
                <label>City </label>
                <input type='text' id='city' value={this.state.city} onChange={(e) => this.setState({city: e.target.value})}/><br/>
                <label>State </label>
                <input type='text' id='state' value={this.state.state} onChange={(e) => this.setState({state: e.target.value})}/><br/>
                <label>Zip Code </label>
                <input type='text' id='zip' value={this.state.zip} onChange={(e) => this.setState({zip: e.target.value})}/><br/>
                <label>Phone Number </label>
                <input type='text' id='phone' placeholder="i.e. (555) 555-5555" value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})}/><br/>
                <input type='submit' value='Create New User' onClick={this.handleSubmit}/>
            </form>
        )
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      addUser: (user) => {
        dispatch(addUser(user))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);