import React from 'react';
import {connect} from 'react-redux';
import { updateToppings } from '../actions';
import { getData } from '../selectors';

class PizzaBase extends React.Component {
    handleChange = (e) => {
        this.props.update(e.target.name, e.target.value);
    }
    
    render() {
        const { toppings } = this.props.data.pizza;
        return (
            <form>
                <h3>Pizza Toppings</h3>
                <label>What Toppings? </label><br/>
                <input type="checkbox" id='pepperoni' name='topping' value='pepperoni' checked={toppings.includes('pepperoni')} onChange={this.handleChange}/>
                <label> Pepperoni</label><br/>
                <input type="checkbox" id='sausage' name='topping' value='sausage' checked={toppings.includes('sausage')} onChange={this.handleChange}/>
                <label> Sausage</label><br/>
                <input type="checkbox" id='bellPepper' name='topping' value='bellPepper' checked={toppings.includes('bellPepper')} onChange={this.handleChange}/>
                <label> Bell Pepper</label><br/>
                <input type="checkbox" id='tomato' name='topping' value='tomato' checked={toppings.includes('tomato')} onChange={this.handleChange}/>
                <label> Tomato</label><br/>
                <input type="checkbox" id='ham' name='topping' value='ham' checked={toppings.includes('ham')} onChange={this.handleChange}/>
                <label> Canadian Bacon</label><br/>
            </form>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        data: getData(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (inputId, value) => {
            dispatch(updateToppings(inputId, value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBase);