import React, { Fragment, useState } from 'react'
import {useHistory} from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import store from '../redux/store'
import { addUser } from '../redux/actions/actions';
import { InputLabel, Button} from '@material-ui/core'

function UserForm({ handleSubmit }) {

    const history = useHistory()
    let [model, update] = useState({
        name: '',
        number: '',
        email: '',
        address: '',
        zip: '',
        city: '',
        state: ''
    })

    let handleChange = (e) => {
        const { name, value } = e.target
        update(
            { ...model, [name]: value }
        )

    }

    const handleClick = () => {
        history.push('/order')
    }

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(model).map((field) => {
                return (
                    <Fragment key={'key_' + field}>
                        <InputLabel htmlFor={field} style={{textDecorationLine: 'underline', padding: '5px'}}>{field[0].toUpperCase() + field.slice(1)}</InputLabel>
                        <Field key={'key_' + field} name={field} component="input" type="text" onChange={handleChange} />
                    </Fragment>
                )
            })}
            <div>
                <br/>
                <Button type="submit" variant="contained" color="primary" style={{margin: '10px'}}>Save</Button>
                <Button variant="contained" color="primary" onClick={handleClick} style={{margin: '10px'}}>Next</Button>
            </div>
        </form>
    )
}

const Form = reduxForm({
    form: 'User'

})(UserForm)

export default connect(

    dispatch => ({
        onSubmit: data => store.dispatch(addUser(data))
    })
)(Form)

