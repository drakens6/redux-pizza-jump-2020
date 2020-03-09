/* View for adding a pizza's sauce and crust */

import React from 'react'
import { connect } from 'react-redux'

const style = {
    'background-color':'lightblue'
}

const sauces = [
    'tomato', 'olive oil', 'marinara', 'none'
]
const crusts = [
    'regular', 'thick crust', 'thin crust', 'gluten-free'
]

let AddPizzaSauceAndCrust=  ( {dispatch} ) => {

    let input 
    return(
        <div style={style}>
            <h1>Add your pizza's sauce and crust here</h1>
            <h2>Sauces: </h2>
            {
                sauces.map( item => {
                    return(
                        <React.Fragment>
                            <input type="radio" id={item} name={item} value={item}/>
                            <label for={item}>{item}</label>
                        </React.Fragment>
                    )
                })
            }
            <h2>Crust Types:</h2>
            {
                crusts.map( item => {
                    return(
                        <React.Fragment>
                            <input type="radio" id={item} name={item} value={item}/>
                            <label for={item}>{item}</label>
                        </React.Fragment>
                    )
                })
            }
            <br />
            <button>Add to my pizza</button>
        </div>
    )
}

AddPizzaSauceAndCrust = connect()(AddPizzaSauceAndCrust)
export default AddPizzaSauceAndCrust