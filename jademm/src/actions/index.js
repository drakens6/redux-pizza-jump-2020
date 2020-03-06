

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';

export function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        user
    }
}