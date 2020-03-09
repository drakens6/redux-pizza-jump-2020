import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'


export class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Name for order" />
                    <TextField 
                    hintText = "Enter Name"
                    floatingLabelText = "Name on ID"
                    onChange = {handleChange('fullName')}
                    defaultValue = {values.fullName}
                    required/>
                    <br/>
                    <TextField 
                    hintText = "(111)111-1111"
                    floatingLabelText = "Enter Phone number"
                    onChange = {handleChange('phoneNumber')}
                    defaultValue = {values.phoneNumber}
                    required/>
                    <br/>
                    <TextField 
                    hintText = "johnny@appleseed.com"
                    floatingLabelText = "Enter an email"
                    onChange = {handleChange('email')}
                    defaultValue = {values.email}
                    required/>
                    <br/>
                    <TextField 
                    hintText = "Address"
                    floatingLabelText = "Delivery Address"
                    onChange = {handleChange('deliveryAddress')}
                    defaultValue = {values.deliveryAddess}
                    required/>
                    <br/>
                    <RaisedButton
                    label = "continue"
                    primary = {true}
                    style = {styles.button}
                    onClick = {this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
