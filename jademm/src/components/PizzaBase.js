import React from 'react';
import {connect} from 'react-redux';
import { saveData, updateBase } from '../actions'
import { setupForm } from '../actions/thunks'
import { getFormEdit } from '../selectors';

class PizzaBase extends React.Component {
    componentDidMount() {
        this.props.setupForm();
    };

    handleChange = (e) => {
        this.props.update(e.target.name, e.target.value);
    }

    handleSave = (e) => {
        e.preventDefault();
        const data = this.props.data;
        this.props.save(data);
    }
    
    render() {
        const {sauce, dough} = this.props.data.pizza;
        return (
            <form>
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
                <input type='submit' value='Save' onClick={this.handleSave}/>

            </form>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        data: getFormEdit(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       save: (data) => {
            dispatch(saveData(data))
        },
        update: (inputId, value) => {
            dispatch(updateBase(inputId, value))
        },
        setupForm: () => {
            dispatch(setupForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBase);