/* View for adding a pizza's toppings */

import React from 'react'
import { connect } from 'react-redux'

const style = {
    'background-color':'lavender'
}

const toppings = [
    'pepperoni', 'sausage', 'pineapple', 'potato', 'mushrooms',
    'red pepper', 'green pepper', 'mango', 'spinach', 'parmesean', 
    'tomatoes' 
]

let AddPizzaToppings=  ( {dispatch} ) => {
    let input 
    return(
        <div style={style}>
            <h1>Add your pizza toppings here</h1>
            <h2>Toppings: </h2>
            {
                toppings.map( item => {
                    return(
                        <React.Fragment>
                            <input type="radio" id={item} name={item} value={item}/>
                            <label for={item}>{item}</label>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

AddPizzaToppings = connect()(AddPizzaToppings)
export default AddPizzaToppings