import { SET_PIZZA_RECIPES, SET_SELECTED_PIZZA, ADD_TOPPING } from "../types/action.types"
import { InitialState } from "../../models/store.model"

export const initialState: InitialState = {
    customerInfo: null,
    pizzas: [],
    selectedPizza: null,
    router: null
}

export default function pizzaMakerReducer(state = initialState, action) {
    switch(action.type) {

        case SET_PIZZA_RECIPES: {
            return {
                ...state,
                pizzas: action.pizzas
            }
        }

        case SET_SELECTED_PIZZA: {
            return {
                ...state,
                selectedPizza: state.pizzas[action.key]
            }
        }

        case ADD_TOPPING: {
            const toppings = state.pizzas[action.pizzaKey].Toppings[action.toppingKey]
            const newToppings = state.pizzas[action.pizzaKey].Toppings.slice()
            newToppings.splice(action.toppingKey, 0, { ...toppings, isAdded: !toppings.isAdded })

            // const result = {
            //     ...state.pizzas,
            //     [action.pizzaKey]: [
            //         ...state.pizzas[action.pizzaKey].Toppings,
                    
            //     ]
            // }

            return state

        }

        default: {
            return state
        }

    }
}