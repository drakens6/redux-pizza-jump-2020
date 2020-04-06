import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Main from './components/Main';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './store';

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
