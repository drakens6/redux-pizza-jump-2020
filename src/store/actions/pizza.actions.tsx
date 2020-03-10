import * as actions from '../types/action.types'

export const mapStateToProps = state => {
    return {
        customerInfo: state.pizzaReducer.customerInfo,
        pizzas: state.pizzaReducer.pizzas,
        router: state.router
    }
}

export const mapDispatchToProps = dispatch => {
    return {
               addTopping: (toppingKey, pizzaKey)  => dispatch({ type: actions.ADD_TOPPING, toppingKey: toppingKey, pizzaKey: pizzaKey }),
              createOrder: order    => dispatch({ type: actions.CREATE_ORDER, order: order }),
        fetchPizzaRecipes: ()       => dispatch({ type: actions.FETCH_PIZZA_RECIPES }),

    }
}