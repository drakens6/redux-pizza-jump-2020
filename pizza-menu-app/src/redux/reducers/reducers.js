import pizza from './pizza'
import customer from './customer'
import { combineReducers } from 'redux'
/*
const initialState = {
    message:'Welcome to the pizza menu app!'
}

export default function reducer(state = initialState){
    return state
}
*/
const pizzaMenuApp = combineReducers({
    pizza,
    customer
})

export default pizzaMenuApp