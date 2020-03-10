import { ADD_USER, CREATE_PIZZA, UPDATE_VIEW } from '../constants/action-types';

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const createPizza = (pizza) => {
    return {
        type: CREATE_PIZZA,
        payload: pizza
    }
}

export const updateView = (view) => {
    return {
        type: UPDATE_VIEW,
        payload: view
    }
}