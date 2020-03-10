import { UPDATE_USER, UPDATE_BASE, UPDATE_TOPPINGS } from '../actions';
import {combineReducers} from 'redux';

const initialState = {
        user: {
            name: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: ''
        },
        pizza: {
            sauce: 'normal',
            dough: 'classic',
            toppings: []
        }
}

function reducer(state = initialState, action) {
    switch(action.type) {
        //Updates the user data to edit.data
        case UPDATE_USER:
            const newForm = {...state}
            newForm.user[action.inputId] = action.value;

            return newForm

        //updates the pizza base data
        case UPDATE_BASE:
            const newBase = {...state}
            newBase.pizza[action.inputId] = action.value;

            return newBase

        //updates the toppings array, removing item if already in array
        case UPDATE_TOPPINGS:
            let newTop = {...state}
           
            if(!newTop.pizza.toppings.includes(action.value)) {
                newTop.pizza.toppings.push(action.value);
            } else {
                newTop.pizza.toppings = state.pizza.toppings.filter(item => {
                    return item !== action.value
                })
            }

            return newTop

        default:
            return state
    }
}

const reducers = combineReducers({
    data: reducer
})

export default reducers;