

export const SAVE_DATA = 'SAVE_DATA';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_BASE = 'UPDATE_BASE';
export const UPDATE_TOPPINGS = 'UPDATE_TOPPINGS';
export const SET_UP_FORM = 'SET_UP_FORM';

//Save current data in form
export function saveData(data) {
    return {
        type: SAVE_DATA, 
        data
    }
}

//Update the user data in form as it is being entered
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

//get form state on page load
export function setUpForm(values) {
    return {
        type: SET_UP_FORM,
        values
    }
}

