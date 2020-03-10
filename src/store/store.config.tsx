import { applyMiddleware, combineReducers, compose, createStore, Middleware } from 'redux';
import { dispatch } from 'react-redux'
// import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { reducerMap } from './index';
import { composeWithDevTools } from 'redux-devtools-extension'
import sagaInitializer from './effects/pizza.effects';
import createSagaMiddleware from 'redux-saga'
import { SET_SELECTED_PIZZA } from './types/action.types';

import { configureStore, ConfigureStoreOptions, getDefaultMiddleware } from '@reduxjs/toolkit'

export default function configureAppStore(history, initialState?) {

    const rootReducer = combineReducers({
        ...reducerMap,
        router: connectRouter(history)
    });

    const sagaMiddleware = createSagaMiddleware()

    const middleware = [
        sagaMiddleware,
        routerMiddleware(history), 
    ]

    const store = createStore(
        rootReducer,
        initialState,
        compose(composeWithDevTools(applyMiddleware(...middleware)))
    ) 
    
    sagaMiddleware.run(sagaInitializer)


    return store

}
