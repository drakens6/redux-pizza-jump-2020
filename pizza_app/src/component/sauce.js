import React, { Component } from "react";
import { TextField, MenuItem, Button, FormLabel } from "@material-ui/core";

export default class sauce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sauceLevel: "",
      crustType: ""
    };
    this.saucehandleChange = this.saucehandleChange.bind(this);
    this.crustTypehandleChange = this.crustTypehandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  saucehandleChange(event) {
    this.setState({ sauceLevel: event.target.value });
  }

  crustTypehandleChange(event) {
    this.setState({ crustType: event.target.value });
  }

  handleSubmit(event) {
    this.props.cb(this.state.sauceLevel, this.state.crustType);
    alert("Input saved!");
    event.preventDefault();
  }

  render() {
    const crustTypes = [
      {
        value: "Thin",
        label: "Thin"
      },
      {
        value: "Flatbread",
        label: "Flatbread"
      },
      {
        value: "Thick",
        label: "Thick"
      },
      {
        value: "Traditional Pan",
        label: "Traditional Pan"
      },
      {
        value: "Deep dish",
        label: "Deep dish"
      },
      {
        value: "Sicilian",
        label: "Sicilian"
      }
    ];

    return (
      <div>
        <form onSubmit={this.handleSubmit} action="/toppings">
          <FormLabel style={{fontWeight: 'bold'}}>
            Sauce level: &nbsp;
            <TextField
              type="number"
              value={this.state.sauceLevel}
              onChange={this.saucehandleChange}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{ min: "0", max: "10", step: "1" }}
            />
          </FormLabel>
          <br></br>
          <br></br>
          <FormLabel style={{fontWeight: 'bold'}}>
            Please select your crust type": (Thin, Flatbread, Thick, Traditional
            Pan, Deep dish, Sicilian) <br></br>
            <TextField
              id="crust type"
              select
              label="Select"
              value={this.state.crustType}
              onChange={this.crustTypehandleChange}
              helperText="Please select the crust type"
            >
              {crustTypes.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <br></br>
            <br></br>
            <inpu
              value={this.state.crustType}
              onChange={this.crustTypehandleChange}
            />
          </FormLabel>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
