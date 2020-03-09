import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './PizzaIngredient.css';

class PizzaIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case 'dough':
        ingredient = <div className={classes.dough} />;
        break;
      case 'sauce':
        ingredient = (
          <div className={classes.sauces}>
            <div className={classes.sauces}/>
          </div>
        );
        break;
      case 'salamis':
        ingredient = (
          <div className={classes.salamis}>
            <div className={classes.sal1} />
            <div className={classes.sal2} />
            <div className={classes.sal3} />
            <div className={classes.sal4} />
            <div className={classes.sal5} />
            <div className={classes.sal6} />
            <div className={classes.sal7} />
            <div className={classes.sal8} />
            <div className={classes.sal9} />
            <div className={classes.sal10} />
            <div className={classes.sal11} />
          </div>
        );
        break;
      case 'mushrooms':
        ingredient = (
          <div className={classes.mushrooms}>
            <div className={classes.mushroom1}>
              <div className={classes.stem} />
              <div className={classes.cup} />
            </div>
            <div className={classes.mushroom2}>
              <div className={classes.stem} />
              <div className={classes.cup} />
            </div>
            <div className={classes.mushroom3}>
              <div className={classes.stem} />
              <div className={classes.cup} />
            </div>
            <div className={classes.mushroom4}>
              <div className={classes.stem} />
              <div className={classes.cup} />
            </div>
            <div className={classes.mushroom5}>
              <div className={classes.stem} />
              <div className={classes.cup} />
            </div>
            <div className={classes.mushroom6}>
              <div className={classes.stem} />
              <div className={classes.cup} />
            </div>
            <div className={classes.mushroom7}>
              <div className={classes.stem} />
              <div className={classes.cup} />
            </div>
            <div className={classes.mushroom8}>
              <div className={classes.stem} />
              <div className={classes.cup} />
            </div>
            <div className={classes.mushroom9}>
              <div className={classes.stem} />
              <div className={classes.cup} />
            </div>
          </div>
        );
        break;
      case 'corns':
        ingredient = (
          <div className={classes.corns}>
            <div className={classes.corn1} />
            <div className={classes.corn2} />
            <div className={classes.corn3} />
            <div className={classes.corn4} />
            <div className={classes.corn5} />
            <div className={classes.corn6} />
            <div className={classes.corn7} />
            <div className={classes.corn8} />
            <div className={classes.corn9} />
            <div className={classes.corn10} />
            <div className={classes.corn11} />
            <div className={classes.corn12} />
          </div>
        );
        break;
      case 'vegs':
        ingredient = (
          <div className={classes.vegs}>
            <div className={classes.veg1} />
            <div className={classes.veg2} />
            <div className={classes.veg3} />
            <div className={classes.veg4} />
            <div className={classes.veg5} />
            <div className={classes.veg6} />
            <div className={classes.veg7} />
            <div className={classes.veg8} />
            <div className={classes.veg9} />
            <div className={classes.veg10} />
            <div className={classes.veg11} />
            <div className={classes.veg12} />
          </div>
        );
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

PizzaIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default PizzaIngredient;
