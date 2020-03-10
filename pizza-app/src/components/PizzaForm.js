import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Rating, Select, Button } from 'semantic-ui-react';
import { createPizza } from '../actions';

const crustOptions = [
  { key: "hand-tossed", text: "Hand-tossed", value: "hand-tossed" },
  { key: "thin-crust", text: "Thin crust", value: "thin-crust" },
  { key: "deep-dish", text: "Deep dish", value: "deep-dish" },
]

const sizeOptions = [
  {key: 6, text: "6\"", value: 6},
  {key: 9, text: "9\"", value: 9},
  {key: 12, text: "12\"", value: 12},
  {key: 15, text: "15\"", value: 15}
]

const PizzaForm = (props) => {

  const [size, setSize] = useState(6);
  const [type, setType] = useState("hand-tossed");
  const [level, setLevel] = useState(3);

  const rateChange = (e, {rating}) => {
    return setLevel(rating);
  }

  const onPizzaCreate = () => {
    const pizza = { size, crust: type, sauce: level };
    props.createPizza(pizza);
  } 

  return (
    <Container>
      <h3>Pizza selections</h3>
      <Form onSubmit={onPizzaCreate}>
      <Form.Field control={Select} options={sizeOptions} label="Size" onChange={(e, {value}) => setSize(value)}/>
        <Form.Field control={Select} options={crustOptions} label="Crust Type:" onChange={(e, {value}) => setType(value)}/>
        <Form.Field>
          <label>Sauce: </label>
          <Rating defaultRating={level} maxRating={5} onRate={rateChange} size="massive"/>
        </Form.Field>
        <Button type="submit">Create Pizza</Button>
      </Form>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPizza: (pizza) => dispatch(createPizza(pizza)),
  }
} 

export default connect(null, mapDispatchToProps)(PizzaForm);