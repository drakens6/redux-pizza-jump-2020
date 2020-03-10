import React from 'react';
import {connect} from 'react-redux';
import { updateBase } from '../actions'
import { getData } from '../selectors';

class PizzaBase extends React.Component {

    //handles form field changes
    handleChange = (e) => {
        this.props.update(e.target.name, e.target.value);
    }
    
    render() {
        const {sauce, dough} = this.props.data.pizza;
        return (
            <form>
                <h3>Pizza Base</h3>
                <label>How much sauce? </label><br/>
                <input type="radio" id="little" name="sauce" value="little" checked={'little' === sauce} onChange={this.handleChange}/>
                <label>A little sauce</label><br/>
                <input type="radio" id="normal" name="sauce" value="normal" checked={'normal' === sauce} onChange={this.handleChange}/>
                <label>Normal amount of sauce</label><br/>
                <input type="radio" id="lot" name="sauce" value="lot" checked={'lot' === sauce} onChange={this.handleChange}/>
                <label>A lot of sauce</label><br/>
                <br/>
                <label>Type of dough? </label><br/>
                <input type="radio" id="classic" name="dough" value="classic" checked={'classic' === dough} onChange={this.handleChange}/>
                <label>Classic</label><br/>
                <input type="radio" id="thin" name="dough" value="thin" checked={'thin' === dough} onChange={this.handleChange}/>
                <label>Thin Crust</label><br/>
                <input type="radio" id="deep" name="dough" value="deep" checked={'deep' === dough} onChange={this.handleChange}/>
                <label>Deep Dish</label><br/>
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
            dispatch(updateBase(inputId, value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBase);