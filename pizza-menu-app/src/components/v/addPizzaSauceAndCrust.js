import React from 'react'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'

class AddPizzaSauceAndCrust extends React.Component{

    // state = {
    //     newCustName: '',
    //     newCustEmail:'',
    //     newCustPhone:'',
    //     newCustAddress:''
    // }

    
    // handleAddClick = () => {
    //     console.log("[3. EVENT HANDLER]: ", this.state)
    //     const action = {
    //         type: 'ADD_CUSTOMER',
    //         payload: {
    //             id: this.props.customers.length+1,
    //             name:this.state.newCustName,
    //             email: this.state.newCustEmail,
    //             phone:this.state.newCustPhone,
    //             address:this.state.newCustAddress
    //         }
    //     }
    //     console.log("[4. ACTION OBJECT]: ", action)

    //     this.props.dispatch(action)
    // }

    render() {
        // console.log("[2. Props in AddSauceCrust]: ", this.props)
        return (
            <div >
                <h1>Add your pizza's sauce and crust here</h1>
            <h2>Sauces: </h2>
            {
                this.props.sauces.map( sauce => {
                    return(
                        <div>
                            <input type="radio" key={sauce.id}/>
                            <label>{sauce.name}</label>  
                        </div>
                        // <li key={sauce.id}>{sauce.name}</li>
                    )
                    // return(
                    //     <React.Fragment>
                    //         <input type="radio" key={item.id} id={item} name={item} value={item}/>
                    //         <label for={item}>{item}</label>
                    //     </React.Fragment>
                    // )
                })
            }
            <h2>Crust Types:</h2>
            {
                this.props.crusts.map( crust => {
                    return (
                        <li key={crust.id}>{crust.name}</li>
                    )
                    // return(
                    //     <React.Fragment>
                    //         <input type="radio" key={item.id} id={item} name={item} value={item}/>
                    //         <label for={item}>{item}</label>
                    //     </React.Fragment>
                    // )
                })
            }
            <br />
            <button>Add to my pizza</button>
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