import * as actions from '../types/action.types'
import { createAction } from '@reduxjs/toolkit'
export const mapStateToProps = state => {
    return {
        pizzas: state.pizzaReducer.pizzas,
        router: state.router,
        selectedPizza: state.pizzaReducer.selectedPizza
    }
}

export const mapDispatchToProps = dispatch => {
    return {
               addTopping: (toppingKey, pizzaKey)  => dispatch({ type: actions.ADD_TOPPING, toppingKey: toppingKey, pizzaKey: pizzaKey }),
              createOrder: order    => dispatch({ type: actions.CREATE_ORDER, order: order }),
        fetchPizzaRecipes: ()       => dispatch({ type: actions.FETCH_PIZZA_RECIPES }),

    }
}