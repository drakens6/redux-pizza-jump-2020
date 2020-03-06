import { ADD_USER, ADD_LOCATION } from '../constants/action-types';

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