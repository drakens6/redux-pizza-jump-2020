import { combineReducers } from 'redux';

import { menu } from './menu';
import { pizza } from './pizza';
import { customer } from './customer';

export default combineReducers({
  menu,
  pizza,
  customer,
});
