import { ADD_USER, CREATE_PIZZA } from '../constants/action-types';

const initialState = {
    user: {},
    pizza: {}
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER: 
            return {...state, user: action.payload };
        case CREATE_PIZZA:
            return {...state, pizza: action.payload };
        default:
            return state;
    }
}

export default rootReducer;