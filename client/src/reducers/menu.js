import { NEXT_MENU, RESET_MENU } from '../actions/types';

const initialState = {
  step: 0,
};

export const menu = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MENU:
      return {
        step: state.step + 1,
      };
    case RESET_MENU:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
