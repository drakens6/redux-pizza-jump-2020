import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux'

import store from './redux/store'
import './index.css';

// import App from './components/app/App'

import * as serviceWorker from './serviceWorker';
import Root from './components/Root'


ReactDOM.render(
    <Root store ={store}/>,
    document.getElementById('root')
)

serviceWorker.unregister();
