import React, { Component } from 'react'
import { Button } from 'reactstrap'
import Pizza from '../Pizza/Pizza'
import { Link } from 'react-router-dom'
import './EditPizza.scss'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../store/actions/pizza.actions'
import { InitialState, IPizzaProps, IPizzaToppings } from '../../models/store.model'

@connect(mapStateToProps, mapDispatchToProps)
export default class EditPizza extends Component<InitialState, IPizzaProps> {

    private handleAddToppingOnCLick(toppingKey: number, pizzaKey: number): void {
        this.props.addTopping(toppingKey, pizzaKey)
    }

    getToppings(id: number): IPizzaToppings[] {
        console.log(id)
        if (typeof id !== 'number') return
        const toppings = this.props.pizzas[id].Toppings

        if (!toppings.length) return
        const result = Object.values(toppings).filter((topping: IPizzaToppings) => topping.isAdded === true)

        return result
    }

    render() {

        const path = this.props.router.location.pathname as string
        const id = parseInt(path.split('/')[2])

        console.log(this.props)
        return (
            <div className="EditPizza__Enclosure">
                <div className="EditPizza__Enclosure-Header">
                    <Button color="primary" tag={Link} to="/menu">Back</Button>
                    <h3>{this.props.pizzas[id].Name}</h3>
                    <Button color="primary" tag={Link} to="/menu">Save</Button>
                </div>
                <div className="EditPizza__Enclosure-Body">
                    <div className="Body__Pizza">
                        <Pizza toppings={this.getToppings(id)}></Pizza>
                    </div>
                    <div className="Body__Toppings">
                        {
                            Object.values(this.props.pizzas[id].Toppings).map((topping: IPizzaToppings, index: number) => (
                                <Button 
                                    className="Body__Toppings-Button" 
                                    onClick={() => this.handleAddToppingOnCLick(index, id)}
                                    key={`topping-${index}`}>
                                    <span className="Body__Toppings-Content">
                                        <span>{topping.name}</span>
                                        <div className={`Topping__Icon Body__Toppings-Icon--${topping.name.toLowerCase()}`}></div>
                                        {/* <img className="Body__Toppings-Icon" src={`/assets/${topping.name.toLowerCase()}.svg`} alt="Pizza Topping" /> */}
                                    </span>
                                    <span className={topping.isAdded ? "Body__Toppings-Visible" : ""}>
                                        <span className="Body__Toppings-Selected">&#10004;</span>
                                    </span>
                                </Button>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
