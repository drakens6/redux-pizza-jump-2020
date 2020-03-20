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

export default function customerInfo(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_USER:
            return action.data
        default:
            return state
    }
}


