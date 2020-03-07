/* View for adding a customer */

// TODO: implementation for adding customer address and phone number
// currently accepts name and email, just for set up purposes

import React from 'react'
import { connect } from 'react-redux'
//import { addCustName, addCustEmail } from '../redux/actions/actions'

const style = {
    'background-color':'lightyellow'
}

let AddCustomer=  ( {dispatch} ) => {


    let input 
    return(
        <div style={style}>
            <h1>Hi new customer! Add your information here</h1>
            {/* <form
                onSubmit = { 
                    e => { onFormSubmit(input, e, dispatch) }
                }
                >
                    <input ref={node => { input = node }} placeholder='name' />
                    <input ref={node => { input = node }} placeholder='email'/>
                    <button type="submit">Add Me!</button>
            </form> */}

            <form
            >
                <label>
                    Name: 
                    <input type="text" name="name"/>
                </label>
                <br/>
                <label>
                    Email:  
                    <input type="email" name="email"/>
                </label>
                <br/>
                <label>
                    Phone:  
                    <input type="text" name="phone"/>
                </label>
                <br/>
                <label>
                    Address: 
                    <input type="text" name="address"/>
                </label>
                <br/>
                <input type="submit" value="Add Me!"/>
            </form>
        </div>
    )
}

/*
function onFormSubmit (input, event, dispatch) {
    event.preventDefault()
    if (!input.value.trim()){
        return
    }
    dispatch(addCustName(input.value))
    dispatch(addCustEmail(input.value))// most likely not right 
    input.value=''
}
*/

AddCustomer = connect()(AddCustomer)
export default AddCustomer