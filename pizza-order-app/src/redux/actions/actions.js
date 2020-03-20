import {
    ADD_USER, ADD_ORDER, ADD_PIZZA, DELETE_PIZZA
} from './actionTypes'


//action creators 
export function addUser(data){
    return {type: ADD_USER, data}
}

export function addOrder(data){
    return {type: ADD_ORDER, data}
}

export function addPizza(data){
    return {type: ADD_PIZZA, data}
}

export function deletePizza(index){
    return {type: DELETE_PIZZA, index}
}