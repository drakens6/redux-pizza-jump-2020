import React from 'react';
import { Container } from 'semantic-ui-react';
import UserForm from './UserForm';

const App = () => {
    return (
        <Container>
            <h1>Pizza Delivery App</h1>
            <UserForm />
        </Container>
    )
}

export default App;