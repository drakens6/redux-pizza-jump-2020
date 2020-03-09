import { combineReducers, createStore } from 'redux'
import { reducer as formReducer} from 'redux-form'
import PizzaOrder from './reducers/pizzaOrder'

const reducers = combineReducers({PizzaOrder, form: formReducer})

const store = createStore(reducers)

export default store

// Log the initial state
//console.log(store.getState())
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
//const unsubscribe = store.subscribe(() => console.log(store.getState()))

//dispatch actions
//store.dispatch({})

// Stop listening to state updates
// unsubscribe()