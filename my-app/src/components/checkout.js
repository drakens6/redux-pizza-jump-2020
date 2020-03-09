import React, { Component } from 'react'

class CheckOut extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.firstName}</h1>
                <h1>{this.props.lastName}</h1>
                <h1>{this.props.email}</h1>
                <h1>{this.props.address}</h1>
                <h1>{this.props.phone}</h1>
                <h1>{this.props.sauce_level}</h1>
                <h1>{this.props.crust_type}</h1>
                <h1>{this.props.pepperoni}</h1>
                <h1>{this.props.sausage}</h1>
                <h1>{this.props.bacon}</h1>
            </div>
        )
    }
}

export default CheckOut;