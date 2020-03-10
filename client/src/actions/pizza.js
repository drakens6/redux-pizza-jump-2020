import {
  SET_SAUCE_LEVEL,
  SET_CRUST_SIZE,
  SET_TOPPINGS,
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

export const setToppings = toppings => {
  return {
    type: SET_TOPPINGS,
    payload: toppings,
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
