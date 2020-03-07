import React, { Component } from 'react'

export default class sauce extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sauceLevel: '',
          crustType: '',
        };
        this.saucehandleChange = this.saucehandleChange.bind(this);
        this.crustTypehandleChange = this.crustTypehandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      saucehandleChange(event) {
        this.setState({sauceLevel: event.target.value});
      }

      crustTypehandleChange(event){
        this.setState({crustType: event.target.value});
      }
    
      handleSubmit(event) {
        this.props.cb(this.state.sauceLevel , this.state.crustType);
        alert('Input saved!');
        event.preventDefault();
      }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} action="/toppings">
            <label>
              Enter the amount of sauce level:
              <input value={this.state.sauceLevel} onChange={this.saucehandleChange} />
            </label>
            <br></br>
            <label>
            Enter what type of crust do you want: (Thin, Flatbread, Thick, Traditional Pan, Deep dish, Sicilian)
            <input value={this.state.crustType} onChange={this.crustTypehandleChange} />
          </label>

            <input type="submit" value="Submit" />
          </form>
            </div>
        )
    }
}


