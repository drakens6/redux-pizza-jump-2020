

export const SAVE_DATA = 'SAVE_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const UPDATE_BASE = 'UPDATE_BASE';
export const UPDATE_TOPPINGS = 'UPDATE_TOPPINGS';
export const SET_UP_FORM = 'SET_UP_FORM';
export const EDIT_FORM_PENDING = 'EDIT_FORM_PENDING';
export const EDIT_FORM_SUCCESS = 'EDIT_FORM_SUCCESS';

export function saveData(data) {
    return {
        type: SAVE_DATA,
        data
    }
}

export function updateData(inputId, value) {
    return {
        type: UPDATE_DATA,
        inputId,
        value
    }
}

export function updateBase(inputId, value) {
    return {
        type: UPDATE_BASE,
        inputId,
        value
    }
}

export function updateToppings(inputId, values) {
    return {
        type: UPDATE_TOPPINGS,
        inputId,
        values
    }
}

export function setUpForm(values) {
    return {
        type: SET_UP_FORM,
        values
    }
}

export function editFormPending() {
    return {
        type: EDIT_FORM_PENDING
    }
}

export function editFormSuccess(values) {
    return {
        type: EDIT_FORM_SUCCESS,
        values
    }
}
