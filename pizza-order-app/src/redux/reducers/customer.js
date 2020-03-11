import {
    ADD_USER
} from '../actions/actionTypes'


let initialState = {
    name: '',
    number: '',
    email: '',
    address: '',
    zip: '',
    city: '',
    state: ''
}

export default function pizzaOrder(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_USER:
            state = action.data
            return state
        default:
            return state
    }
}


