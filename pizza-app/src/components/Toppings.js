import React, { useState } from 'react';
import { Form, Checkbox, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createPizza, updateView } from '../actions';

const meat = [
  { label: "pepperoni", value: "pepperoni" },
  { label: "sausage", value: "sausage" },
  { label: "canadian ham", value: "canadian ham" },
  { label: "beef", value: "beef" },
  { label: "anchovies", value: "anchovies" },
]

const veggies = [
  { label: "red bell peppers", value: "red bell peppers" },
  { label: "green bell peppers", value: "green bell peppers" },
  { label: "onions", value: "onions" },
  { label: "black olives", value: "black olives" },
  { label: "artichokes", value: "artichokes" },
];

const cheeses = [
  { label: "mozzarella", value: "mozzarella" },
  { label: "goat", value: "goat" },
  { label: "feta", value: "feta" },
  { label: "gorgonzola", value: "gorgonzola" },
  { label: "smoked gouda", value: "smoked gouda" },
]

const Toppings = (props) => {
  const [selections, setSelections] = useState([]);

  const onSelectionChange = (topping) => {
    let newSelections;
    if (!selections.includes(topping)) {
      newSelections = [...selections, topping];
    } else {
      newSelections = selections.filter(selection => selection !== topping);
    }
    setSelections(newSelections);
  }

  const updatePizza = () => {
    const newPizza = {...props.pizza, selections};
    console.log(newPizza);
    props.modifyPizza(newPizza);
    props.updateView("user");
  }

  return (
    <div>
      {console.log(props.pizza)}
      <h4>Toppings</h4>
      <Form onSubmit={updatePizza}>
        <Form.Field style={{ marginBottom: 15 }}>
          <label>Cheese(s):</label>
          {cheeses.map((cheese, index) => {
            return <Checkbox key={index} label={cheese.label} style={{ paddingRight: 20 }} onChange={((e, { value }) => onSelectionChange(cheese.value))} />
          })}
        </Form.Field>
        <Form.Field style={{ marginBottom: 15 }}>
          <label>Veggies:</label>
          {veggies.map((veg, index) => {
            return <Checkbox key={index} label={veg.label} style={{ paddingRight: 20 }} onChange={((e, { value }) => onSelectionChange(veg.value))} />
          })}
        </Form.Field>
        <Form.Field style={{ marginBottom: 15 }}>
          <label>Meat:</label>
          {meat.map((m, index) => {
            return <Checkbox key={index} label={m.label} style={{ paddingRight: 20 }} onChange={((e, { value }) => onSelectionChange(m.value))} />
          })}
        </Form.Field>
        <Button type="submit">Add Toppings</Button>
      </Form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pizza: state.pizza,
})

const mapDispatchToProps = (dispatch) => {
  return {
    modifyPizza: (pizza) => dispatch(createPizza(pizza)),
    updateView: (view) => dispatch(updateView(view))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toppings);