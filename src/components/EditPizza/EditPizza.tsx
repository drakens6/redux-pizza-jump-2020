import React, { Component } from 'react'
import { Button } from 'reactstrap'
import Pizza from '../Pizza/Pizza'
import { Link } from 'react-router-dom'
import './EditPizza.scss'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../store/actions/pizza.actions'
import { InitialState, IPizzaProps, IPizzaToppings } from '../../models/store.model'
import PriceCalculator from '../PriceCalculator/PriceCalculator'

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
        const result = toppings.filter((topping: IPizzaToppings) => topping.isAdded === true)

        return result
    }

    // componentWillReceiveProps(prevProp) {
    //     const path = this.props.router.location.pathname as string
    //     const id = parseInt(path.split('/')[2])
    //     this.props.setSelectedPizza(id)
    // }

    private getClassName(topping: IPizzaToppings): string {
        const className = topping.isAdded ? "Body__Toppings-Visible" : "Body__Toppings-Hidden"
        return className
    }

    render() {

        const path = this.props.router.location.pathname as string
        const id = parseInt(path.split('/')[2])

        console.log(this.props)
        return (
            <div className="EditPizza__Enclosure">
                <div className="EditPizza__Enclosure-Header">
                    <Button color="primary" tag={Link} to="/menu">Back</Button>
                    <h3>{this.props.selectedPizza.Name}</h3>
                    <Button color="primary" tag={Link} to="/cart">Add to cart</Button>
                </div>
                <div className="EditPizza__Enclosure-Body">
                    <div className="Body__Pizza">
                        <Pizza toppings={this.getToppings(id)}></Pizza>
                    </div>
                    <div className="Body__Toppings">
                        {
                            this.props.selectedPizza.Toppings.map((topping: IPizzaToppings, index: number) => (
                                <Button 
                                    className="Body__Toppings-Button" 
                                    onClick={() => this.handleAddToppingOnCLick(index, id)}
                                    key={`topping-${index}`}>
                                    <span className="Body__Toppings-Content">
                                        <span>{topping.name}</span>
                                        <div className={`Topping__Icon Body__Toppings-Icon--${topping.name.toLowerCase()}`}></div>
                                        {/* <img className="Body__Toppings-Icon" src={`/assets/${topping.name.toLowerCase()}.svg`} alt="Pizza Topping" /> */}
                                    </span>
                                    <div className={this.getClassName(topping)}>
                                        <span className="Body__Toppings-Selected">&#10004;</span>
                                    </div>
                                </Button>
                            ))
                        }
                    </div>
                </div>
                <div className="EditPizza__Enclosure-Calculator">
                    <PriceCalculator target={this.props.selectedPizza}></PriceCalculator>
                </div>
            </div>
        )
    }
}
