import React from 'react';
import {connect} from 'react-redux';
import { addUser, updateUser } from '../actions'

class UserForm extends React.Component {
    
    handleChange = (e) => {
        console.log(e.target.id);
        console.log(e.target.value);
        this.props.updateUser(e.target.id, e.target.value);
    }
    //props isn't updating fast enough
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        const user = {
            name: this.props.name,
            email: this.props.email,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            phone: this.props.phone
        }
        
        this.props.addUser(user);
    }

    render() {
        return(
            <form>
                <label>Name </label>
                <input type='text' id='name' value={this.props.name} onChange={this.handleChange}/><br/>
                <label>Email Address </label>
                <input type='email' id='email' value={this.props.email} required onChange={this.handleChange}/><br/>
                <label>Street Address </label>
                <input type='text' id='address' value={this.props.address} onChange={this.handleChange}/><br/>
                <label>City </label>
                <input type='text' id='city' value={this.props.city} onChange={this.handleChange}/><br/>
                <label>State </label>
                <input type='text' id='state' value={this.props.state} onChange={this.handleChange}/><br/>
                <label>Zip Code </label>
                <input type='text' id='zip' value={this.props.zip} onChange={this.handleChange}/><br/>
                <label>Phone Number </label>
                <input type='text' id='phone' placeholder="i.e. (555) 555-5555" value={this.props.phone} onChange={this.handleChange}/><br/>
                <input type='submit' value='Create New User' onClick={this.handleSubmit}/>
            </form>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return {
        name: state.users.name,
        email: state.users.email,
        address: state.users.address,
        city: state.users.city,
        state: state.users.state,
        zip: state.users.zip,
        phone: state.users.phone
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => {
            dispatch(addUser(user))
        },
        updateUser: (inputId, value) => {
            dispatch(updateUser(inputId, value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);