

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const ADD_BASE = 'ADD_BASE';

export function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}

export function updateUser(inputId, value) {
    return {
        type: UPDATE_USER,
        inputId,
        value
    }
}

export function addBase(sauce, dough) {
    return {
        type: ADD_BASE,
        sauce,
        dough
    }
}