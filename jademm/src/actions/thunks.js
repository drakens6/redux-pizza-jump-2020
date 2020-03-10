import { getData } from '../selectors';
import { setUpForm} from './index';


//Gets the data from the main data holder to get for the form fields
export function setupForm() {
  return function _resetForm(dispatch, getState) {
    const form = getData(getState());
    dispatch(setUpForm(form));
  }
}