import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react';

const Receipt = (props) => {
    return (
        <Card>
            {console.log(props.user)}
            <Card.Header>Pizza Order for {props.user.name}</Card.Header>
            <Card.Content>
                {props.pizza.size}" {props.pizza.crust} with level: {props.pizza.sauce} sauce
                topped with: 
                <ul>
                    {props.pizza.selections.map(item => <li>{item}</li> )}
                </ul>
            </Card.Content>
            <Card.Content>
                <Button>Confirm</Button>
                <Button>Cancel</Button>
            </Card.Content>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    pizza: state.pizza
})


export default connect(mapStateToProps, null)(Receipt);