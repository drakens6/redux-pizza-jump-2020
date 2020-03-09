import React from 'react';
import classes from './BuildControl.css';

const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.added}>
        Add
      </button>
      <button className={classes.More} onClick={props.removed}>
        Remove
      </button>
    </div>
  );
};

export default buildControl;
