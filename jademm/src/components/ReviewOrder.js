import React from 'react';
import {connect} from 'react-redux';
import { getData } from '../selectors';

class ReviewOrder extends React.Component {

    
    render() {
        const data = this.props.data;
        return (
            <form>
                <h1>Review Order</h1>
                <h3>Pizza: </h3>
                <p>Crust: {data.pizza.dough}</p>
                <p>Sauce: {data.pizza.sauce}</p>
                <p>Toppings: </p><br/>
                <ul>
                {data.pizza.toppings.map(item => {
                    return <li>{item}</li>
                })} 
                </ul>

                <h3>Customer Information</h3>
                <p>{data.user.name}</p>
                <p>{data.user.email}</p>
                <p>{data.user.address}</p>
                <p>{data.user.city}, {data.user.state} {data.user.zip}</p>
                <p>{data.user.phone}</p>

            </form>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        data: getData(state)
    }
}

export default connect(mapStateToProps)(ReviewOrder);