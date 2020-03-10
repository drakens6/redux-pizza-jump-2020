import {
  SET_CRUST_SIZE,
  SET_SAUCE_LEVEL,
  SET_TOPPINGS,
  CLEAR_TOPPINGS,
  RESET_PIZZA,
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
    case SET_TOPPINGS:
      return {
        ...state,
        toppings: action.payload,
      };
    case CLEAR_TOPPINGS:
      return Object.assign({}, state, { toppings: [] });
    case RESET_PIZZA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
