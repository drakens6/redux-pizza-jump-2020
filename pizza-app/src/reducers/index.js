import { ADD_USER, CREATE_PIZZA, UPDATE_VIEW } from '../constants/action-types';

const initialState = {
    user: {},
    pizza: {},
    view: ''
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER: 
            return {...state, user: action.payload };
        case CREATE_PIZZA:
            return {...state, pizza: action.payload };
        case UPDATE_VIEW:
            return {...state, view: action.payload};
        default:
            return state;
    }
}

export default rootReducer;