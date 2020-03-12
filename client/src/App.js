import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Main from './components/Main';

import { Container } from 'react-bootstrap';

import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Main />
      </Container>
    </Provider>
  );
}

export default App;
