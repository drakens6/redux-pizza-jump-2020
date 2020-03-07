import { ADD_USER, UPDATE_USER, ADD_BASE } from '../actions';
import {combineReducers} from 'redux';

const defaultUser = {
    name: '',
    email: 'test',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
}


function users(user = defaultUser, action) {
    switch(action.type) {
        case ADD_USER:
            return {
                    name: action.user.name,
                    email: action.user.email,
                    address: action.user.address,
                    city: action.user.city,
                    state: action.user.state,
                    zip: action.user.zip,
                    phone: action.user.phone
                }

        case UPDATE_USER:
            console.log(user);
                user[action.inputId] = action.value;
                console.log(user);
            return user

        default:
            return user
    }
}

const defaultPizza = {
    sauce: 'normal',
    dough: 'classic',
    toppings: []
}


function pizzas(pizza = defaultPizza, action) {
    switch(action.type) {
        case ADD_BASE:
            return 
        default:
            return pizza
    }
}

const reducers = combineReducers({
    users,
    pizzas
})

export default reducers;