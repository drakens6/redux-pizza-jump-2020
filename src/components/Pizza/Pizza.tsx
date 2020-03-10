import React, { Component } from 'react'
import './Pizza.scss'
import { IPizzaToppings } from '../../models/store.model'

type Props = {
    toppings: IPizzaToppings[]
}


export default class Pizza extends Component<Props> { 

    
    render() {
        return (
            <div className="Pizza">
                <div className="Pizza__Board">
                    {
                        this.props.toppings.map((topping: IPizzaToppings, index: number) => {
                            return (
                                <div style={this.setZIndex(index)} key={index}>
                                    <div className={`Pizza__Topping Pizza__Topping--${topping.name.toLowerCase()}`}></div>
                                    <div className={`Pizza__Topping Pizza__Topping--${topping.name.toLowerCase()}`}></div>
                                    <div className={`Pizza__Topping Pizza__Topping--${topping.name.toLowerCase()}`}></div>
                                    <div className={`Pizza__Topping Pizza__Topping--${topping.name.toLowerCase()}`}></div>
                                    <div className={`Pizza__Topping Pizza__Topping--${topping.name.toLowerCase()}`}></div>
                                </div>
                            )
                        })
                    }
                    <div className="Pizza__Sauce"></div>
                    <div className="Pizza__Base"></div>
                </div>
            </div>
        )
    }

    private setZIndex(index: number): { zIndex: number } {
        return { zIndex: index + 3 }
    }
}