import React from 'react'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'

class AddCustomer extends React.Component{

    state = {
        newCustName: '',
        newCustEmail:'',
        newCustPhone:'',
        newCustAddress:''
    }

    
    handleAddClick = () => {
        // console.log("[3. EVENT HANDLER]: ", this.state)
        const action = {
            type: 'ADD_CUSTOMER',
            payload: {
                id: this.props.orders.length+1,
                name:this.state.newCustName,
                email: this.state.newCustEmail,
                phone:this.state.newCustPhone,
                address:this.state.newCustAddress
            }
        }
        // console.log("[4. ACTION OBJECT]: ", action)

        this.props.dispatch(action)
    }

    render() {
        //console.log("[2. Props in AddCustomer]: ", this.props)
        return (
            <div>
                <label> Name: 
                    <input 
                        type="text" name="name" 
                        value={this.state.newCustName}
                        onChange= {event => 
                            this.setState({newCustName: event.target.value})
                        }
                    />
                </label>
                <br/>

                <label> Email:  
                    <input 
                        type="email" name="email"
                        value={this.state.newCustEmail}
                        onChange={event => 
                            this.setState({newCustEmail: event.target.value})
                        }
                    />
                </label>
                <br/>
                
                <label> Phone:  
                    <input 
                        type="text" name="phone"
                        value={this.state.newCustPhone}
                        onChange={event =>
                            this.setState({newCustPhone: event.target.value})
                        }
                    />
                </label>
                <br/>

                <label> Address: 
                    <input 
                        type="text" name="address"
                        value={this.state.newCustAddress}
                        onChange={event =>
                            this.setState({newCustAddress: event.target.value})
                        }
                    />
                </label>
                <br/>
                
                <button onClick={this.handleAddClick}>Add New Customer</button>
           </div>
        )
    }
}

// state is coming from the redux store
function mapStateToProps(state){
    // console.log('[1. State of the store, mapStateToProps ]', state)
    return{
        //customers:state.customers
        orders:state.orders
    }
}

export default withRouter(connect(mapStateToProps)(AddCustomer))