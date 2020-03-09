export function getUserData(state) {
    return state.data;
  }
  
  export function getFormEdit(state) {
    return state.edit.data;
  }
  
  export function getHasChanged(state) {
    return state.edit.changed;
  }