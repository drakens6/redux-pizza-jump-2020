import React, { Component } from "react";
import FormUserDetails from './FormUserDetails';
import FormPizzaDetails from './FormPizzaDetails';
import Confirm from './Confirm';


export class UserForm extends Component {
  state = {
    step: 1,
    fullName: "",
    phoneNumber: "",
    email: "",
    deliveryAddess: "",
    crustType: "",
    sauceLevel: "",
    toppingOne: "",
    toppingTwo: "",
    toppingThree: ""
  };

  //Proceed to the next step in the form
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //Go back to the previous step in the form
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //Handle the fields changing
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    
    const {
      fullName,
      phoneNumber,
      email,
      deliveryAddess,
      crustType,
      sauceLevel,
      toppingOne,
      toppingTwo,
      toppingThree
    } = this.state;
    
    const values = { fullName,
        phoneNumber,
        email,
        deliveryAddess,
        crustType,
        sauceLevel,
        toppingOne,
        toppingTwo,
        toppingThree}

    switch(step){
        case 1:
            return(
                <FormUserDetails
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
                />
            );
        case 2:
            return(
                <FormPizzaDetails
                prevStep = {this.prevStep}
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
                />
            );
        case 3:
            return(
                <Confirm
                prevStep = {this.prevStep}
                nextStep = {this.nextStep}
                values = {values}
                />
            );
        case 4:
            return (<h1>Thank you for your order</h1>)

            default:
                return (<h1>PIZZA PIZZA</h1>)
    }
  }
}

export default UserForm;
