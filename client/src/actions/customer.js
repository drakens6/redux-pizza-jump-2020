import { SET_CUSTOMER, CLEAR_CUSTOMER } from './types';

export const setCustomer = ({ name, email, street, phone, city, state }) => {
  return {
    type: SET_CUSTOMER,
    payload: {
      name: name.trim(),
      email: email.trim(),
      street: street.trim(),
      phone: phone.trim(),
      city: city.trim(),
      state: state.trim(),
    },
  };
};

export const clearCustomer = () => {
  return {
    type: CLEAR_CUSTOMER,
  };
};
