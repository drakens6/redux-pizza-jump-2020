
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_BASE = 'UPDATE_BASE';
export const UPDATE_TOPPINGS = 'UPDATE_TOPPINGS';

//Update the user data in form on change
export function updateUser(inputId, value) {
    return {
        type: UPDATE_USER,
        inputId,
        value
    }
}

//update pizza base form content on change
export function updateBase(inputId, value) {
    return {
        type: UPDATE_BASE,
        inputId,
        value
    }
}

//update toppings array on change
export function updateToppings(inputId, value) {
    return {
        type: UPDATE_TOPPINGS,
        inputId,
        value
    }
}

