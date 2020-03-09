import { SET_SAUCE_LEVEL, SET_CRUST_SIZE } from './types';

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
