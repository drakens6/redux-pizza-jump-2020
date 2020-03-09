import React from 'react';
import {connect} from 'react-redux';
import { saveData, updateToppings } from '../actions'
import { setupForm } from '../actions/thunks'
import { getFormEdit } from '../selectors';

class PizzaBase extends React.Component {
    constructor() {
        super();
        let set = new Set();
        this.state = {
            set: set
        }
    }
    componentDidMount() {
        this.props.setupForm();
    };

    handleChange = (e) => {
        if(!this.state.set.add.includes('pepperoni')) {
            this.setState({set: this.state.set.add(e.target.value)})
        } else {
            this.setState({set: this.state.set.delete(e.target.value)})
        }
        this.props.update(e.target.name, this.state.set.values());
    }

    handleSave = (e) => {
        e.preventDefault();
        const data = this.props.data;
        this.props.save(data);
    }
    
    render() {
        const {toppings} = this.props.data.pizza;
        return (
            <form>
                <label>What Toppings? </label><br/>
                <input type="checkbox" id='pepperoni' name='topping' value='pepperoni' checked={toppings.includes('pepperoni')} onChange={this.handleChange}/>
                <label> Pepperoni</label><br/>
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
            dispatch(updateToppings(inputId, value))
        },
        setupForm: () => {
            dispatch(setupForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBase);