import React, { Component } from "react";
import { TextField, MenuItem, Button, FormLabel } from "@material-ui/core";

export default class toppings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pepperoni: "",
      pineapple: "",
      spinach: "",
      sausage: "",
      bacon: "",
      onion: "",
      mushroom: ""
    };
    this.mushroomhandleChange = this.mushroomhandleChange.bind(this);
    this.onionhandleChange = this.onionhandleChange.bind(this);
    this.baconhandleChange = this.baconhandleChange.bind(this);
    this.sausagehandleChange = this.sausagehandleChange.bind(this);
    this.spinachhandleChange = this.spinachhandleChange.bind(this);
    this.pepperonihandleChange = this.pepperonihandleChange.bind(this);
    this.pineapplehandleChange = this.pineapplehandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  pepperonihandleChange(event) {
    this.setState({ pepperoni: event.target.value });
  }

  pineapplehandleChange(event) {
    this.setState({ pineapple: event.target.value });
  }

  spinachhandleChange(event) {
    this.setState({ spinach: event.target.value });
  }

  sausagehandleChange(event) {
    this.setState({ sausage: event.target.value });
  }

  baconhandleChange(event) {
    this.setState({ bacon: event.target.value });
  }

  onionhandleChange(event) {
    this.setState({ onion: event.target.value });
  }

  mushroomhandleChange(event) {
    this.setState({ mushroom: event.target.value });
  }

  handleSubmit(event) {
    this.props.cb(
      this.state.pepperoni,
      this.state.pineapple,
      this.state.spinach,
      this.state.sausage,
      this.state.bacon,
      this.state.onion,
      this.state.mushroom
    );
    alert("Input saved!");
    event.preventDefault();
  }

  render() {
    const toppingsAmount = [
      {
        value: "Light",
        label: "Light"
      },
      {
        value: "Normal",
        label: "Normal"
      },
      {
        value: "Extra",
        label: "Extra"
      },
      {
        value: "Double",
        label: "Double"
      }
    ];

    return (
      <div>
        <h3>
          Enter the amount of addtional toppings: (light, normal, extra, double)
        </h3>
        <form onSubmit={this.handleSubmit}>
          <FormLabel style={{ fontWeight: "bold" }}>
            Pepperoni:
            <TextField
              size="small"
              id="standard-select-currency"
              select
              value={this.state.pepperoni}
              onChange={this.pepperonihandleChange}
              helperText="Select amount"
            >
              {toppingsAmount.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormLabel>
          <br></br>
          <br></br>
          <FormLabel style={{ fontWeight: "bold" }}>
            Pineapple:
            <TextField
              size="small"
              id="standard-select-currency"
              select
              value={this.state.pineapple}
              onChange={this.pineapplehandleChange}
              helperText="Select amount"
            >
              {toppingsAmount.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormLabel>
          <br></br>
          <br></br>
          <FormLabel style={{ fontWeight: "bold" }}>
            Spinach:
            <TextField
              size="small"
              id="standard-select-currency"
              select
              value={this.state.spinach}
              onChange={this.spinachhandleChange}
              helperText="Select amount"
            >
              {toppingsAmount.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormLabel>
          <br></br>
          <br></br>
          <FormLabel style={{ fontWeight: "bold" }}>
            Sausage:
            <TextField
              size="small"
              id="standard-select-currency"
              select
              value={this.state.sausage}
              onChange={this.sausagehandleChange}
              helperText="Select amount"
            >
              {toppingsAmount.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormLabel>
          <br></br>
          <br></br>
          <FormLabel style={{ fontWeight: "bold" }}>
            Bacon:
            <TextField
              size="small"
              id="standard-select-currency"
              select
              input
              value={this.state.bacon}
              onChange={this.baconhandleChange}
              helperText="Select amount"
            >
              {toppingsAmount.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormLabel>
          <br></br>
          <br></br>

          <FormLabel style={{ fontWeight: "bold" }}>
            Onion:
            <TextField
              size="small"
              id="standard-select-currency"
              select
              input
              value={this.state.onion}
              onChange={this.onionhandleChange}
              helperText="Select amount"
            >
              {toppingsAmount.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormLabel>
          <br></br>
          <br></br>

          <FormLabel style={{ fontWeight: "bold" }}>
            Mushroom:
            <TextField
              size="small"
              id="standard-select-currency"
              select
              input
              value={this.state.mushroom}
              onChange={this.mushroomhandleChange}
              helperText="Select amount"
            >
              {toppingsAmount.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormLabel>
          <br></br>
          <br></br>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
