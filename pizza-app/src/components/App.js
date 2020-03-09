import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import UserForm from './UserForm';
import PizzaForm from './PizzaForm';

const App = (props) => {
    return (
        <Container>
            <h1>Pizza Delivery App</h1>
            <UserForm />
            <PizzaForm />
        </Container>
    )
}

export default App;