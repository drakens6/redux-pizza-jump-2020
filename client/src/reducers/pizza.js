import {
  SET_CRUST_SIZE,
  SET_SAUCE_LEVEL,
  ADD_TOPPING,
  REMOVE_TOPPING,
  CLEAR_TOPPINGS,
  CLEAR_PIZZA,
} from '../actions/types';

const initialState = {
  sauceLevel: 0,
  crustSize: 8,
  toppings: [],
};

export const pizza = (state = initialState, action) => {
  switch (action.type) {
    case SET_SAUCE_LEVEL:
      return {
        ...state,
        sauceLevel: action.payload,
      };
    case SET_CRUST_SIZE:
      return {
        ...state,
        crustSize: action.payload,
      };
    case ADD_TOPPING:
      return {
        ...state,
        toppings: [...state.toppings, action.payload],
      };
    case REMOVE_TOPPING:
      return {
        ...state,
        toppings: state.toppings.filter(topping => topping !== action.payload),
      };
    case CLEAR_TOPPINGS:
      return Object.assign({}, state, { toppings: [] });
    case CLEAR_PIZZA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
