import * as actions from '../types/action.types'
import { createAction } from '@reduxjs/toolkit'
export const mapStateToProps = state => {
    return {
        pizzas: state.pizzaReducer.pizzas,
        router: state.router,
        selectedPizza: state.pizzaReducer.selectedPizza,
        cart: state.pizzaReducer.cart
    }
}

export const mapDispatchToProps = dispatch => {
    return {
               addTopping: (toppingKey, pizzaKey)  => dispatch({ type: actions.ADD_TOPPING, toppingKey: toppingKey, pizzaKey: pizzaKey }),
              createOrder: order                   => dispatch({ type: actions.CREATE_ORDER, order: order }),
        fetchPizzaRecipes: ()                      => dispatch({ type: actions.FETCH_PIZZA_RECIPES }),
           addPizzaToCart: (pizza)                 => dispatch({ type: actions.ADD_PIZZA_TO_CART, pizza: pizza })

    }
}