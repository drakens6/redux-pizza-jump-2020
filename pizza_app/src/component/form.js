import React, { Component } from 'react'

export default class form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'Please write an essay about your favorite DOM element.',
          first_name : '',
          last_name: '',
          address: '',
          phone: '',
          email: ''
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
        this.setState({value: event.target.value});
      }

      firstNamehandleChange(event) {
        this.setState({first_name: event.target.value});
      }

      lastNamehandleChange(event) {
        this.setState({last_name: event.target.value});
      }

      addresshandleChange(event) {
        this.setState({address: event.target.value});
      }

      emailhandleChange(event) {
        this.setState({email: event.target.value});
      }

      phonehandleChange(event) {
        this.setState({phone: event.target.value});
      }
    
      handleSubmit(event) {
        this.props.cb(this.state.first_name, this.state.last_name, this.state.address, this.state.phone, this.state.email);
        alert('Input saved!');
        event.preventDefault();
      }


    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} action="/sauce">
        <label>
        First Name:
        <input value={this.state.first_name} onChange={this.firstNamehandleChange} />
      </label>
      <br></br>
      <label>
      Last Name:
      <input value={this.state.last_name} onChange={this.lastNamehandleChange} />
    </label>
    <br></br>
    <label>
    Address:
    <input value={this.state.address} onChange={this.addresshandleChange} />
  </label>
  <br></br>
    <label>
    Email:
    <input value={this.state.email} onChange={this.emailhandleChange} />
  </label>
  <br></br>
  <label>
  Phone number:
  <input value={this.state.phone} onChange={this.phonehandleChange} />
</label>
<br></br>


        <input type="submit" value="Submit" />
      </form>
       </div>
    );
        
    }
 }




 