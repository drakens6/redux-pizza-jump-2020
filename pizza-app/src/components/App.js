import React from 'react';
import { Container } from 'semantic-ui-react';

import PizzaForm from './PizzaForm';
import Toppings from './Toppings';
import UserForm from './UserForm';

const App = (props) => {
    return (
        <Container>
            <h1>Pizza Delivery App</h1>
            {/* <UserForm /> */}
            <PizzaForm />
            <Toppings />
        </Container>
    )
}

export default App;