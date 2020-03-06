import { SET_CUSTOMER, CLEAR_CUSTOMER } from '../actions/types';

const initialState = {
  name: '',
  email: '',
  address: '',
  phone: '',
};

export const customer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMER:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_CUSTOMER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
