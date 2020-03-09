import {
  SET_SAUCE_LEVEL,
  SET_CRUST_SIZE,
  ADD_TOPPING,
  REMOVE_TOPPING,
  CLEAR_TOPPINGS,
  RESET_PIZZA,
} from './types';

export const setSauceLevel = sauceLevel => {
  return {
    type: SET_SAUCE_LEVEL,
    payload: parseInt(sauceLevel),
  };
};

export const setCrustSize = crustSize => {
  return {
    type: SET_CRUST_SIZE,
    payload: parseInt(crustSize),
  };
};

export const addTopping = ({ name, id }) => {
  return {
    type: ADD_TOPPING,
    payload: {
      name: name.trim(),
      id: id,
    },
  };
};

export const removeTopping = id => {
  return {
    type: REMOVE_TOPPING,
    payload: id,
  };
};

export const clearToppings = () => {
  return {
    type: CLEAR_TOPPINGS,
  };
};

export const resetPizza = () => {
  return {
    type: RESET_PIZZA,
  };
};
