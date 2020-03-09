import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Rating, Select, Button } from 'semantic-ui-react';
import { createPizza } from '../actions';

const crustOptions = [
  { key: "hand-tossed", text: "Hand-tossed", value: "hand-tossed" },
  { key: "thin-crust", text: "Thin crust", value: "thin-crust" },
  { key: "deep-dish", text: "Deep dish", value: "deep-dish" },
]

const PizzaForm = (props) => {

  const [type, setType] = useState("hand-tossed");
  const [level, setLevel] = useState(3);

  const rateChange = (e, {rating}) => {
    return setLevel(rating);
  }

  const onPizzaCreate = () => {
    const pizza = { crust: type, sauce: level };
    props.createPizza(pizza);
  } 

  return (
    <Container>
      {console.log(`crust: ${type}, level: ${level}`)}
      <h3>Pizza selections</h3>
      <Form onSubmit={onPizzaCreate}>
        <Form.Field control={Select} options={crustOptions} label="Crust Type:" onChange={(e, {value}) => setType(value)}/>
        <Form.Field>
          <label>Sauce: </label>
          <Rating defaultRating={level} maxRating={5} onRate={rateChange}/>
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