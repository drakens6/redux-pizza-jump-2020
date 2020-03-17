import {
    ADD_ORDER, DELETE_PIZZA, ADD_PIZZA
} from '../actions/actionTypes'

let initialState = {
    pizza: {
        size: '',
        crust: '',
        sauce: '',
        veggies: '',
        meats: '',
        cheese: ''
    },
    orders: []
}

export default function pizzaOrder(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_ORDER:
            return {
                orders: [
                    ...state.orders,
                    {
                        newOrder: action.data
                    }
                ]
            }
        case ADD_PIZZA:
            return action.data
        case DELETE_PIZZA:
            const pizzaOrders = state.orders.filter((item, index) => {
                return index !== action.index
            })
            return pizzaOrders
        default:
            return state
    }
}