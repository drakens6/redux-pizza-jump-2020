/* View for displaying a final order */

import React from 'react'
import { connect } from 'react-redux'

const style = {
    'background-color':'lightpink'
}

let DisplayFinalOrder=  ( {dispatch} ) => {

    let input 
    return(
        <div style={style}>
            <h1>View your final order here</h1>
            
            <form>
                <label>Name: </label> <br/>
                <label>Email:</label><br/>
                <label>Pizza Sauce: </label><br/>
                <label>Pizza Crust: </label><br/>
                <label>Pizza Toppings:</label><br/>

                <input type="submit" value="Confirm"/>
            </form>
        </div>
    )
}

DisplayFinalOrder = connect()(DisplayFinalOrder)
export default DisplayFinalOrder