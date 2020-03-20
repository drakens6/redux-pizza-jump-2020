import { combineReducers, createStore } from 'redux'
import { reducer as formReducer} from 'redux-form'
import Pizza from './reducers/pizza'
import User from './reducers/customer'

const reducers = combineReducers({ Pizza, User, form: formReducer })

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
