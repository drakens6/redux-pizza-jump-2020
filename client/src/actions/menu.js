import { NEXT_MENU, PREVIOUS_MENU, RESET_MENU } from './types';

export const nextMenu = () => {
  return {
    type: NEXT_MENU,
  };
};

export const previousMenu = () => {
  return {
    type: PREVIOUS_MENU,
  };
};

export const resetMenu = () => {
  return {
    type: RESET_MENU,
  };
};
