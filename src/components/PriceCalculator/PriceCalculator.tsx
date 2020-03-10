import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap'

import './PriceCalculator.scss'
import { mapStateToProps, mapDispatchToProps } from '../../store/actions/pizza.actions';
import { Link } from 'react-router-dom';
import Pizza from '../Pizza/Pizza';
import { InitialState, IPizzaProps, IPizzaToppings, IPizza } from '../../models/store.model';

type Props = {
    target: IPizza
}

@connect(mapStateToProps, mapDispatchToProps)
export default class PriceCalculator extends Component<Props> {

    private readonly pizzaCost: number = 7
    private calculateTotalFromToppings(toppings: IPizzaToppings[]): number {
        let total = 0;
        for (let i = 0; i < toppings.length; i++) {
            if (toppings[i].isAdded) {
                total += toppings[i].price
            }
        }

        total += this.pizzaCost
        return total
    }

    render() {

        let total = this.calculateTotalFromToppings(this.props.target.Toppings)

        let toppings = this.props.target.Toppings.filter(topping => topping.isAdded === true)

        return (
            <div className="Calculator__Enclosure">
                {
                    toppings.map((topping: IPizzaToppings, index: number) => (
                        <div className="Calculator__Enclosure-Value">
                            <span>{topping.name}</span>
                            <span>{`$${topping.price.toFixed(2)}`}</span>
                        </div>
                    ))
                }
                <div className="Calculator__Enclosure-PizzaCost">
                    <span>Base Price</span>
                    <span>{`$${this.pizzaCost.toFixed(2)}`}</span>
                </div>
                <div className="Calculator__Enclosure-Total">
                    <strong>Total:</strong>
                    <strong>${ total.toFixed(2) }</strong>
                </div>
            </div>
        )
    }

}
