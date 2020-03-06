import {
  SET_CRUST_TYPE,
  SET_SAUCE_LEVEL,
  ADD_TOPPING,
  REMOVE_TOPPING,
  CLEAR_TOPPINGS,
} from '../actions/types';

const initialState = {
  sauceLevel: '',
  crustType: '',
  toppings: [],
};

export const pizza = (state = initialState, action) => {
  switch (action.type) {
    case SET_SAUCE_LEVEL:
      return {
        ...state,
        sauceLevel: action.payload,
      };
    case SET_CRUST_TYPE:
      return {
        ...state,
        crustType: action.payload,
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
    default:
      return state;
  }
};
