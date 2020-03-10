import React, { Component } from "react";
import { FormLabel, Input, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      address: "",
      phone: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.firstNamehandleChange = this.firstNamehandleChange.bind(this);
    this.lastNamehandleChange = this.lastNamehandleChange.bind(this);
    this.addresshandleChange = this.addresshandleChange.bind(this);
    this.emailhandleChange = this.emailhandleChange.bind(this);
    this.phonehandleChange = this.phonehandleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  firstNamehandleChange(event) {
    this.setState({ first_name: event.target.value });
  }

  lastNamehandleChange(event) {
    this.setState({ last_name: event.target.value });
  }

  addresshandleChange(event) {
    this.setState({ address: event.target.value });
  }

  emailhandleChange(event) {
    this.setState({ email: event.target.value });
  }

  phonehandleChange(event) {
    this.setState({ phone: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.cb(
      this.state.first_name,
      this.state.last_name,
      this.state.address,
      this.state.phone,
      this.state.email,
      1
    );
    this.props.history.push("/sauce");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormLabel style={{ fontWeight: "bold" }}>
            First Name: &nbsp;
            <Input
              placeholder="First Name"
              value={this.state.first_name}
              onChange={this.firstNamehandleChange}
              inputProps={{ "aria-label": "description" }}
            />
          </FormLabel>
          <br></br>
          <br></br>
          <FormLabel style={{ fontWeight: "bold" }}>
            Last Name:&nbsp;
            <Input
              placeholder="Last Name"
              value={this.state.last_name}
              onChange={this.lastNamehandleChange}
              inputProps={{ "aria-label": "description" }}
            />
          </FormLabel>
          <br></br>
          <br></br>
          <FormLabel style={{ fontWeight: "bold" }}>
            Address: &nbsp;
            <Input
              placeholder="Address"
              value={this.state.address}
              onChange={this.addresshandleChange}
              inputProps={{ "aria-label": "description" }}
            />
          </FormLabel>
          <br></br>
          <br></br>
          <FormLabel style={{ fontWeight: "bold" }}>
            Email:
            <Input
              placeholder="Email"
              value={this.state.email}
              onChange={this.emailhandleChange}
              inputProps={{ "aria-label": "description" }}
            />
          </FormLabel>
          <br></br>
          <br></br>
          <FormLabel style={{ fontWeight: "bold" }}>
            Phone number:
            <Input
              placeholder="Phone number"
              value={this.state.phone}
              onChange={this.phonehandleChange}
              inputProps={{ "aria-label": "description" }}
            />
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

export default withRouter(form);
