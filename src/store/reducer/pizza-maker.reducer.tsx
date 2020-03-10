import { SET_PIZZA_RECIPES, SET_SELECTED_PIZZA, ADD_TOPPING } from "../types/action.types"
import { InitialState, IPizza } from "../../models/store.model"
import { createReducer, createSlice } from '@reduxjs/toolkit'
export const initialState: InitialState = {
    customerInfo: null,
    pizzas: [],
    selectedPizza: {
        id: "",
        Name: "",
        Price: 0,
        Toppings: []
    },
    router: null
}

export function pizzaMakerReducer(state = initialState, action) {
    switch(action.type) {

        case SET_PIZZA_RECIPES: {
            return {
                ...state,
                pizzas: action.pizzas
            }
        }

        case "@@router/LOCATION_CHANGE": {
            const path = action.payload.location.pathname as string
            const id = parseInt(path.split('/')[2])
            
            if (isNaN(id)) {
                return {
                    ...state
                }
            }

            return {
                ...state,
                selectedPizza: state.pizzas[id]
            }
        }

        case SET_SELECTED_PIZZA: {
            return {
                ...state,
                selectedPizza: state.pizzas[action.key]
            }
        }

        case ADD_TOPPING: {
            const selection = state.selectedPizza

            const isAdded = !selection.Toppings[action.toppingKey].isAdded
            const topping = { ...selection.Toppings[action.toppingKey], isAdded: isAdded }

            selection.Toppings.splice(action.toppingKey, 1, topping)

            const result = {
                ...state,
                selectedPizza: {
                    ...selection,
                    ...selection.Toppings
                }
            }

            return result

        }

        default: {
            return state
        }

    }
}