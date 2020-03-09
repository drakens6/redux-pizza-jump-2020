import { SAVE_DATA, UPDATE_DATA, UPDATE_BASE, SET_UP_FORM, EDIT_FORM_PENDING, EDIT_FORM_SUCCESS } from '../actions';
import {combineReducers} from 'redux';

const initialState = {
    data: {
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        pizza: {
            sauce: 'normal',
            dough: 'classic',
            toppings: []
        },
    },
    edit: {
        status: null,
        data: {
            name: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
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
            console.log(action.data)
            return action.data
        
        default:
            return state
    }
}

function editReducer(state = initialState.edit, action) {
    switch(action.type) {
        case UPDATE_DATA:
            const newForm = {...state.data}
            newForm[action.inputId] = action.value;

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