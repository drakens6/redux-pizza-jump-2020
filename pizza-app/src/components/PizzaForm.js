import React from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button, Select } from 'semantic-ui-react';

const crustOptions = [
  {key: "hand-tossed", text: "Hand-tossed", value: "hand-tossed"},
  {key: "thin-crust", text: "Thin crust", value: "thin-crust"},
  {key: "deep-dish", text: "Deep dish", value: "deep-dish"},
]

const PizzaForm = (props) => {
  return (
    <Container>
      <h3>Pizza selections</h3>
      <Form>
        <Form.Field>
          <label>Crust type: </label>
          <Select options={crustOptions} compact control="hand-tossed"></Select>
        </Form.Field>
      </Form>
    </Container>
  )
}

export default connect()(PizzaForm);