import {
    ADD_USER, ADD_PIZZA, DELETE_PIZZA
} from './actionTypes'


//action creators 
export function addUser(text){
    return {type: ADD_USER, text}
}

export function addPizza(text){
    return {type: ADD_PIZZA, text}
}

export function deletePizza(index){
    return {type: DELETE_PIZZA, index}
}