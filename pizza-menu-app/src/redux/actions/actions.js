/* 
    for now, just implement customer name and email
*/


import {
    ADD_CUST_NAME, ADD_CUST_EMAIL,
    ADD_PIZZA_CRUST, ADD_PIZZA_SAUCE, ADD_PIZZA_TOPPING,
    TOGGLE_CUST_INFO, TOGGLE_PIZZA_INFO
} from './actionTypes'

/* action creators */
export function addCustName(text){
    return { type: ADD_CUST_NAME, text}
}

export function addCustEmail(text){
    return { type: ADD_CUST_EMAIL, text }
}

export function addPizzaCrust(index){
    return { type: ADD_PIZZA_CRUST, index}
}

export function addPizzaSauce(index){
    return { type: ADD_PIZZA_SAUCE, index }
}

export function addPizzaTopping(index) {
    return { type: ADD_PIZZA_TOPPING, index}
}

export function toggleCustInfo(index){
    return { type: TOGGLE_CUST_INFO, index}
}

export function togglePizzaInfo(index){
    return { type: TOGGLE_PIZZA_INFO, index}
}