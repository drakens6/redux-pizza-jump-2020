import {
    ADD_PIZZA, DELETE_PIZZA, ADD_USER
} from '../actions/actionTypes'

export default function pizzaOrder(pizzas=[], action){
    switch(action.type){
        case ADD_USER:
            return {text: 'order information added'}
        case ADD_PIZZA:
            return [
                ...pizzas,
                {
                    text: action.text
                }
            ]
        case DELETE_PIZZA:
            const pizzaOrders = pizzas.filter((item, index) =>{
                return index !== action.index
            })
            console.log(pizzaOrders)
            return pizzaOrders
        default:
            return pizzas
    }
}