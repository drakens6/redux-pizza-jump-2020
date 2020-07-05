import { NEXT_MENU, PREVIOUS_MENU, RESET_MENU } from '../actions/types';

const initialState = {
  step: 0,
};

export const menu = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MENU:
      return {
        step: state.step + 1,
      };

    case PREVIOUS_MENU:
      return {
        step: Math.max(state.step - 1, 0),
      };
    case RESET_MENU:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
