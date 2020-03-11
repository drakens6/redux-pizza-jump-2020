import { combineReducers, createStore } from 'redux'
import { reducer as formReducer, initialize } from 'redux-form'
import Pizza from './reducers/pizza'
import User from './reducers/customer'

const initialState = {
    user: {
        name: '',
        number: '',
        email: '',
        address: '',
        zip: '',
        city: '',
        state: ''
    },
    base: {
        size: '',
        crust: '',
        sauce: ''
    },
    top: {
        veggies: '',
        meats: '',
        cheese: ''
    },
    orders: []
}

const reducers = combineReducers({ Pizza, User, form: formReducer })

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

// Log the initial state
console.log(store.getState())
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
//const unsubscribe = store.subscribe(() => console.log(store.getState()))

//dispatch actions
//store.dispatch({})

// Stop listening to state updates
// unsubscribe()