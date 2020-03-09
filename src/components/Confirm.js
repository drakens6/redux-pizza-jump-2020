import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'


export class Confirm extends Component {
    continue = e =>{
        e.preventDefault();
        //Proccess Form in back end
        this.props.nextStep();
    };
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const {values:{fullName,
            phoneNumber,
            email,
            deliveryAddess,
            crustType,
            sauceLevel,
            toppingOne,
            toppingTwo,
            toppingThree}} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Order" />
                    
                    <List>
                    <ListItem 
                    primaryText = "Name on Order"
                    secondaryText = {fullName}
                    />
                    <ListItem 
                    primaryText = "Contact Phone"
                    secondaryText = {phoneNumber}
                    />
                    <ListItem 
                    primaryText = "Email"
                    secondaryText = {email}
                    />
                    <ListItem 
                    primaryText = "Delivery address"
                    secondaryText = {deliveryAddess}
                    />
                    <ListItem 
                    primaryText = "Crust"
                    secondaryText = {crustType}
                    />
                    <ListItem 
                    primaryText = "Sauce"
                    secondaryText = {sauceLevel}
                    />
                    <ListItem 
                    primaryText = "Toppings"
                    secondaryText = {toppingOne}
                    />
                    <ListItem 
                    primaryText = "Additional Toppings"
                    secondaryText = {toppingTwo}
                    />
                    <ListItem 
                    primaryText = "Additional Toppings"
                    secondaryText = {toppingThree}
                    />

                    </List>
                    <RaisedButton
                    label = "back"
                    primary = {false}
                    style = {styles.button}
                    onClick = {this.back}
                    />
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

export default Confirm;
