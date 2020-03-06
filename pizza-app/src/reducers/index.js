import { ADD_USER, ADD_LOCATION } from '../constants/action-types';

const initialState = {
    user: '',
    location: ''
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER: 
            return {...state, user: action.payload };
        case ADD_LOCATION:
            return {...state, location: action.payload };
        default:
            return state;
    }
}

export default rootReducer;