import { SAVE_DATA, UPDATE_USER, UPDATE_BASE, UPDATE_TOPPINGS, SET_UP_FORM } from '../actions';
import {combineReducers} from 'redux';

const initialState = {
    data: { 
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
        },
    },
    //place holder for transitional data
    edit: {
        data: {
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
            },
        }
    }
}

//Redundant function that saves the current state in form to data
function saveReducer(state = initialState.data, action) {
    switch(action.type) {
        case SAVE_DATA:
            return state
        
        default:
            return state
    }
}

function editReducer(state = initialState.edit, action) {
    switch(action.type) {
        //Updates the user data to edit.data
        case UPDATE_USER:
            const newForm = {...state.data}
            newForm.user[action.inputId] = action.value;

            return {
                    data: newForm
            }

        //updates the pizza base data
        case UPDATE_BASE:
            const newBase = {...state.data}
            newBase.pizza[action.inputId] = action.value;

            return {
                data: newBase
            }

        //updates the toppings array, removing item if already in array
        case UPDATE_TOPPINGS:
            let newTop = {...state.data}
           
            if(!newTop.pizza.toppings.includes(action.value)) {
                newTop.pizza.toppings.push(action.value);
            } else {
                newTop.pizza.toppings = state.data.pizza.toppings.filter(item => {
                    return item !== action.value
                })
            }

            return {
                data: newTop
            }

        //sets edit.data to data
        case SET_UP_FORM:
            return {
                data: action.values
            }

        default:
            return state
    }
}

const reducers = combineReducers({
    data: saveReducer,
    edit: editReducer
})

export default reducers;