import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import PizzaForm from './PizzaForm';
import Toppings from './Toppings';
import UserForm from './UserForm';
import Receipt from './Receipt';

const App = (props) => {

    const onViewChange = () => {
        switch(props.view) {
            case "toppings":
                return <Toppings />
            case "user":
                return <UserForm />
            case "receipt":
                return <Receipt />
            default:
                return <PizzaForm />
        }
    }
    return (
        <Container>
            <h1>Pizza Delivery App</h1>
            {onViewChange()}
        </Container>
    )
}

const mapStateToProps = (state) => ({
    view: state.view
})

export default connect(mapStateToProps, null)(App);