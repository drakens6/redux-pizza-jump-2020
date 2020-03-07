import React, { Component } from 'react'

export default class toppings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pepperoni: '',
            pineapple: '',
            spinach: '',
            sausage: '',
            bacon: '',
            onion:'',
            mushroom: ''
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
        this.setState({pepperoni: event.target.value});
      }

      pineapplehandleChange(event) {
        this.setState({pineapple: event.target.value});
      }

      spinachhandleChange(event) {
        this.setState({spinach: event.target.value});
      }

      sausagehandleChange(event) {
        this.setState({sausage: event.target.value});
      }

      baconhandleChange(event) {
        this.setState({bacon: event.target.value});
      }

      onionhandleChange(event) {
        this.setState({onion: event.target.value});
      }

      mushroomhandleChange(event) {
        this.setState({mushroom: event.target.value});
      }


     
      handleSubmit(event) {
        this.props.cb(this.state.pepperoni , this.state.pineapple, this.state.spinach, this.state.sausage, this.state.bacon, this.state.onion, this.state.mushroom);
        alert('Input saved!');
        event.preventDefault();  
    }

    render() {
        return (
            <div>
            <h1>Enter the amount of addtional toppings: (light, normal, extra, double)</h1>
            <form onSubmit={this.handleSubmit} >
            <label>
              pepperoni:
              <input value={this.state.pepperoni} onChange={this.pepperonihandleChange} />
            </label>
            <br></br>
            <label>
            pineapple:
            <input value={this.state.pineapple} onChange={this.pineapplehandleChange} />
          </label>
          <br></br>
          <label>
          spinach:
          <input value={this.state.spinach} onChange={this.spinachhandleChange} />
        </label>
        <br></br>
        <label>
        sausage:
        <input value={this.state.sausage} onChange={this.sausagehandleChange} />
      </label>
      <br></br>
    <label>
    bacon:
    <input value={this.state.bacon} onChange={this.baconhandleChange} />
  </label>
  <br></br>
  <label>
  onion:
  <input value={this.state.onion} onChange={this.onionhandleChange} />
</label>
<br></br>
<label>
mushroom:
<input value={this.state.mushroom} onChange={this.mushroomhandleChange} />
</label>
<br></br>
            

            <input type="submit" value="Submit" />
          </form>
            </div>
        )
    }
}







