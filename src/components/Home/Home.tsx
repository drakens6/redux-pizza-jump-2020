import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from 'reactstrap'

import './Home.scss'
import { mapStateToProps, mapDispatchToProps } from '../../store/actions/pizza.actions';
import { Link } from 'react-router-dom';
import Pizza from '../Pizza/Pizza';
import { InitialState, IPizzaProps, IPizzaToppings, IPizza } from '../../models/store.model';


@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component<InitialState, IPizzaProps> {
   
    private getToppings(toppings: IPizzaToppings[]): IPizzaToppings[] {
        return toppings.filter((topping: IPizzaToppings) => topping.isAdded === true)
    }

    private handleSetSelectedPizza(index: number): void {
        
    }

    render() {
        return (
            <div className="Pizza__Enclosure">
                {
                    this.props.pizzas.map((pizza: IPizza, index: number) => (
                        <div key={index} className="Pizza__Enclosure-Item">
                            <div className="Item__Image">
                                <Pizza toppings={this.getToppings(pizza.Toppings)}></Pizza>
                            </div>
                            <div className="Item__Title">
                                { pizza.Name } - ${ pizza.Price }
                            </div>
                            <div className="Item__Action">
                                <Button onClick={() => this.handleSetSelectedPizza(index)} tag={Link} to={`/edit/${index}`} color="info">View pizza</Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }

    public setPizzaView(): JSX.Element[] {
        return this.props.pizzas.map((pizza: any, index: number) => (
            <div key={index} className="Pizza__Enclosure-Item">
                <div className="Item__Image">

                </div>
                <div className="Item__Title">
                    { pizza.Name }
                </div>
                <div className="Item__Action">
                    <Button tag={Link} to={`/edit/${index}`} color="info">View pizza</Button>
                </div>
            </div>
        ))
    } 

    public setDefaultView(): JSX.Element[] {
        return Array.from({ length: 10 }, (_, value) => {
            return (
                <div key={value} className="Pizza__Enclosure-Item">
                    <div className="Item__Image">

                    </div>
                    <div className="Item__Title">
                        Pizza # {value}
                    </div>
                    {/* <div className="Item__Action">
                        <Button tag={Link} to={`/edit/${value}`} color="info">View pizza</Button>
                    </div> */}
                </div>
            )
        })
    }
}
