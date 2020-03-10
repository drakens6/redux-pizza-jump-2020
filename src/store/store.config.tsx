import { applyMiddleware, combineReducers, compose, createStore, Middleware } from 'redux';
import { dispatch } from 'react-redux'
// import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { reducerMap } from './index';
import { composeWithDevTools } from 'redux-devtools-extension'
import sagaInitializer from './effects/pizza.effects';
import createSagaMiddleware from 'redux-saga'
import { SET_SELECTED_PIZZA } from './types/action.types';

import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'


export default function configureAppStore(history, initialState?) {
    const middleware: Middleware[] = [
        routerMiddleware(history)
    ];

    const rootReducer = combineReducers({
        ...reducerMap,
        router: connectRouter(history)
    });

    // const enhancers = [];
    // const windowIfDefined = typeof window === 'undefined' ? null : window

    // const store = createStore(pizzaMakerReducer, composeWithDevTools())

    // if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    //     enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    // }

    const sagaMiddleware = createSagaMiddleware()

    const options: ConfigureStoreOptions = {
        reducer: rootReducer,
        middleware: [...middleware, sagaMiddleware],
        devTools: true,
        preloadedState: initialState
    }

    const store = configureStore(options)

    sagaMiddleware.run(sagaInitializer)

    return store

}
