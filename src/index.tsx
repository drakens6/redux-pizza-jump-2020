import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { Provider } from "react-redux"
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import configureAppStore from './store/store.config';

import * as serviceWorker from './serviceWorker'

import './assets/index'

declare const module: any

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
const history = createBrowserHistory({ basename: baseUrl })

const store = configureAppStore(history);


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

module.hot.accept()
