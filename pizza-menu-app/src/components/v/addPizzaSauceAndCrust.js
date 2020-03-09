import React from 'react'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'

class AddPizzaSauceAndCrust extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            newPizzaCrust:'',
            newPizzaSauce:''
        }
        this.handleAddClick=this.handleAddClick.bind(this)
    }
  

   handleAddClick = () =>  {
       console.log("[3. EVENT HANDLER]: ", this.state)
        const action = {
            type: 'ADD_CRUST_SAUCE',
            payload: {
                pizzaCrust: this.state.newPizzaCrust,
                pizzaSauce:this.state.newPizzaSauce
            }
        }
        console.log("[4. ACTION OBJECT]: ", action)

        this.props.dispatch(action)
    }
        // console.log("[2. Props in AddSauceCrust]: ", this.props)
        render(){
        return (
            <div>
                <h1> Build Your Pizza Now! </h1>

                <h2>Select One Crust Type:</h2>
                
                   {
                    this.props.crusts.map( crust => {
                        return(
                            <div key={crust.id}>
                                <input 
                                    type="radio" 
                                    key={crust.id} 
                                    id={crust.id}
                                    name={this.state.newPizzaCrust}
                                    value={crust.name} 
                                    onChange={ event=>
                                        this.setState({newPizzaCrust:event.currentTarget.value})
                                    }
                                />
                                <label>{crust.name}</label>   
                            </div>
                        )
                    })
                }
                <br />

                <h2>Select One Pizza Sauce: </h2>
                {
                this.props.sauces.map( sauce => {
                    return(
                        <div key={sauce.id}>
                            <input 
                                type="radio" 
                                key={sauce.id} 
                                id={sauce.id}
                                name={this.state.newPizzaSauce} 
                                value={sauce.name} 
                                onChange={event => 
                                    this.setState({newPizzaSauce:event.currentTarget.value})
                                }
                            />
                            <label>{sauce.name}</label>   
                        </div>
                    )
                })
                }
                <br/>
                
                <button onClick={this.handleAddClick}>Add to my pizza</button>
           </div>
        )
    }
}
  

// state is coming from the redux store
function mapStateToProps(state){
    console.log('[1. State of the store, mapStateToProps ]', state)
    return{
        sauces:state.sauces,
        crusts:state.crusts
    }
}

export default withRouter(connect(mapStateToProps)(AddPizzaSauceAndCrust))