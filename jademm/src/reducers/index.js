import { SAVE_DATA, UPDATE_USER, UPDATE_BASE, UPDATE_TOPPINGS, SET_UP_FORM, EDIT_FORM_PENDING, EDIT_FORM_SUCCESS } from '../actions';
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
    edit: {
        status: null,
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
        changed: null
    }
}


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
        case UPDATE_USER:
            const newForm = {...state.data}
            newForm.user[action.inputId] = action.value;

            return {
                    ...state,
                    data: newForm,
                    changed: true
            }

        case UPDATE_BASE:
            const newBase = {...state.data}
            newBase.pizza[action.inputId] = action.value;

            return {
                ...state,
                data: newBase,
                changed: true
            }

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
                ...state,
                data: newTop,
                changed: true
            }

        case SET_UP_FORM:
            return {
                ...state,
                data: action.values,
                changed: false
            }
        
        case EDIT_FORM_PENDING:
            return {
                ...state,
                status: EDIT_FORM_PENDING
            }
        case EDIT_FORM_SUCCESS:
            return {
                status: EDIT_FORM_SUCCESS,
                data: action.values,
                changed: false
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