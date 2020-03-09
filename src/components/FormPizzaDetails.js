import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'



export class FormPizzaDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };
    
    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter pizza details" />
                    <TextField 
                    hintText = "Regular, Thin, Stuffed cheese"
                    floatingLabelText = "Enter crust type"
                    onChange = {handleChange('crustType')}
                    defaultValue = {values.crustType}
                    required/>
                    <br/>
                    <TextField 
                    hintText = "Light, Medium, Heavy"
                    floatingLabelText = "Enter sauce level"
                    onChange = {handleChange('sauceLevel')}
                    defaultValue = {values.sauceLevel}
                    required/>
                    <br/>
                    <TextField 
                    hintText = "None, Chicken, Pineapples"
                    floatingLabelText = "Topping One"
                    onChange = {handleChange('toppingOne')}
                    defaultValue = {values.toppingOne}
                    required="true"/>
                    <br/>
                    <TextField 
                    hintText = "Ham, Peppers, Extra cheese"
                    floatingLabelText = "Topping Two"
                    onChange = {handleChange('toppingTwo')}
                    defaultValue = {values.toppingTwo}
                    />
                    <br/>
                    <TextField 
                    hintText = "Ham, Peppers, Extra cheese"
                    floatingLabelText = "Topping Three"
                    onChange = {handleChange('toppingThree')}
                    defaultValue = {values.toppingThree}
                    />
                    <br/>
                    <RaisedButton
                    label = "back"
                    primary = {false}
                    style = {styles.button}
                    onClick = {this.back}
                    />
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

export default FormPizzaDetails
