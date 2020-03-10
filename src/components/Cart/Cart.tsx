import React, { Component } from 'react'
import './Cart.scss'
import { IPizzaToppings, InitialState, IPizzaProps, IPizza } from '../../models/store.model'
import { mapStateToProps, mapDispatchToProps } from '../../store/actions/pizza.actions'
import { connect } from 'react-redux'

@connect(mapStateToProps, mapDispatchToProps)
export default class Cart extends Component<InitialState, IPizzaProps> {

    render() {
        return (
            <div className="Cart">
                <div className="Cart__Container">
                    <div className="Cart__Container-Header">
                        <h3>Shopping Cart</h3>
                    </div>
                    <ul className="Cart__Container-Item">
                        {
                            this.props.cart.map((pizza: IPizza) => (
                                <li className="Cart__Item">
                                    <div className="Cart__Item-Key">
                                        {pizza.Name}
                                    </div>
                                    <div className="Cart__Item-Value">
                                        {pizza.Total}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}