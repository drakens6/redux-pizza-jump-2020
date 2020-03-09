import { ADD_USER, ADD_LOCATION, CREATE_PIZZA } from '../constants/action-types';

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const addLocation = (location) => {
    return {
        type: ADD_LOCATION,
        payload: location
    }
}

export const createPizza = (pizza) => {
    return {
        type: CREATE_PIZZA,
        payload: pizza
    }
}