
import initialState from './initialState'

function reducer( state = initialState, action={} ){
    console.log('[5. REDUCER]: ', 'STATE', state, ' ACTION: ', action)
    switch(action.type) {
        case 'ADD_CUSTOMER':
            return [...state.orders, {...action.payload}]

        case 'ADD_CRUST_SAUCE':
            return [...state.orders, {...action.payload}]

        default:
            return state
    }
}

export default reducer