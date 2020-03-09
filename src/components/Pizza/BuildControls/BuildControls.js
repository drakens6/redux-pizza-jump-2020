import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salamis', type: 'salamis' },
  { label: 'Vegs', type: 'vegs' },
  { label: 'Mushrooms', type: 'mushrooms' },
  { label: 'Corn', type: 'corns' },
  { label: 'Sauce', type: "sauce"}
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Current Price: {props.price.toFixed(2)}$</p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}>
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
