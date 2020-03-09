import {getFormEdit, getUserData} from '../selectors';
import { editFormSuccess, editFormPending, setUpForm} from './index';


export function setupForm() {
  return function _resetForm(dispatch, getState) {
    const form = getUserData(getState());
    dispatch(setUpForm(form));
  }
}


export function saveForm() {
  return function _saveForm(dispatch, getState) {
    dispatch(editFormPending());
    const form = getFormEdit(getState());
    dispatch(editFormSuccess(form));
  }
}