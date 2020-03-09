import React from 'react';
import {connect} from 'react-redux';
import { saveData, updateData } from '../actions'
import { setupForm } from '../actions/thunks'
import {getFormEdit } from '../selectors';

class UserForm extends React.Component {

    componentDidMount = () => {
        this.props.setupForm();
    }
    
    handleChange = (e) => {
        this.props.updateUser(e.target.id, e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = this.props.user;
        this.props.addUser(user);
    }

    render() {
        const {name, email, address, city, state, zip, phone} = this.props.user;
        return(
            <form>
                <label>Name </label>
                <input type='text' id='name' value={name} onChange={this.handleChange}/><br/>
                <label>Email Address </label>
                <input type='email' id='email' value={email} required onChange={this.handleChange}/><br/>
                <label>Street Address </label>
                <input type='text' id='address' value={address} onChange={this.handleChange}/><br/>
                <label>City </label>
                <input type='text' id='city' value={city} onChange={this.handleChange}/><br/>
                <label>State </label>
                <input type='text' id='state' value={state} onChange={this.handleChange}/><br/>
                <label>Zip Code </label>
                <input type='text' id='zip' value={zip} onChange={this.handleChange}/><br/>
                <label>Phone Number </label>
                <input type='text' id='phone' placeholder="i.e. (555) 555-5555" value={phone} onChange={this.handleChange}/><br/>
                <input type='submit' value='Save' onClick={this.handleSubmit}/>
            </form>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        user: getFormEdit(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => {
            dispatch(saveData(user))
        },
        updateUser: (inputId, value) => {
            dispatch(updateData(inputId, value))
        },
        setupForm: () => {
            dispatch(setupForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);