import { ADD_USER, ADD_LOCATION, CREATE_PIZZA } from '../constants/action-types';

const initialState = {
    user: '',
    location: '',
    pizza: {}
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER: 
            return {...state, user: action.payload };
        case ADD_LOCATION:
            return {...state, location: action.payload };
        case CREATE_PIZZA:
            return {...state, pizza: action.payload };
        default:
            return state;
    }
}

export default rootReducer;