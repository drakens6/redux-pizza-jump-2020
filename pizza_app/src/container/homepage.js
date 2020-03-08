import React, { Component } from "react";
import Form from "../component/form";
import Sauce from "../component/sauce";
import Toppings from "../component/toppings";
import Final from "../component/final";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

export default class homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      first_name: "",
      last_name: "",
      address: "",
      phone: "",
      email: "",
      sauceLevel: "",
      crustType: "",

      pepperoni: "",
      pineapple: "",
      spinach: "",
      sausage: "",
      bacon: "",
      onion: "",
      mushroom: ""
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  getSteps() {
    return [
      "Enter your info",
      "Select sauce level and crust type",
      "Add additional toppings",
      "Review your order"
    ];
  }

  formCallBack = (first_name, last_name, address, phone, email, step) => {
    this.setState({
      first_name: first_name,
      last_name: last_name,
      address: address,
      phone: phone,
      email: email,
      step: step
    });
  };

  sauceAndToppingsCallBack = (sauceLevel, crustType, step) => {
    this.setState({ sauceLevel: sauceLevel, crustType: crustType, step: step });
  };

  additionalToppingsCallBack = (
    pepperoni,
    pineapple,
    spinach,
    sausage,
    bacon,
    onion,
    mushroom,
    step
  ) => {
    this.setState({
      pepperoni: pepperoni,
      pineapple: pineapple,
      spinach: spinach,
      sausage: sausage,
      bacon: bacon,
      onion: onion,
      mushroom: mushroom,
      step: step
    });
  };

  render() {
    const steps = this.getSteps();

    return (
      <div>
        <Stepper
          style={{ width: "70%", margin: "auto", marginBottom: "100px" }}
          activeStep={this.state.step}
          alternativeLabel
        >
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Form cb={this.formCallBack} />}
            ></Route>
            <Route
              path="/sauce"
              render={() => <Sauce cb={this.sauceAndToppingsCallBack} />}
            ></Route>
            <Route
              path="/toppings"
              render={() => <Toppings cb={this.additionalToppingsCallBack} />}
            ></Route>
            <Route
              path="/final"
              render={() => <Final data={this.state} />}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
