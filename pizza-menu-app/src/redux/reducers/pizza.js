import {
    ADD_PIZZA_CRUST, ADD_PIZZA_SAUCE, ADD_PIZZA_TOPPING
} from '../actions/actionTypes'

export default function pizza( pizzaInfo = [], action) {
    switch(action.type){
        case ADD_PIZZA_CRUST:
            return [
                ...pizzaInfo,
                {
                    index: action.index,
                    
                }
            ]    

        case ADD_PIZZA_SAUCE:
            return [

            ]
            
        case ADD_PIZZA_TOPPING:
            return [
                
            ]

        default:
            return pizzaInfo
    }
}