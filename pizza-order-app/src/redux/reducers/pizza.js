import {
    ADD_ORDER, DELETE_PIZZA, ADD_BASE, ADD_TOP
} from '../actions/actionTypes'

let initialState={
    base: {
        size: '',
        crust: '',
        sauce: ''
    },
    top: {
        veggies: '',
        meats: '',
        cheese: ''
    },
    orders: []
}

export default function pizzaOrder(state=initialState, action={}){
    switch(action.type){
        case ADD_ORDER:
            return [
                ...state.orders,
                {
                    text: action.text
                }
            ]
        case ADD_BASE:
            state.base = action.data
            return state.base
        case ADD_TOP:
            state.top = action.data
            return state.top
        case DELETE_PIZZA:
            const pizzaOrders = state.orders.filter((item, index) =>{
                return index !== action.index
            })
            console.log(pizzaOrders)
            return pizzaOrders
        default:
            return state.orders
    }
}