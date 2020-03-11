import React, { Fragment, useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import store from '../redux/store'
import { addUser } from '../redux/actions/actions';
import { InputLabel, Button, Input } from '@material-ui/core'

function UserForm(props) {

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


    let { handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(model).map((field, index) => {
                return (
                    <Fragment key={'key_' + field}>
                        <InputLabel htmlFor={field}>{field}</InputLabel>
                        <Field key={'key_' + field} name={field} component="input" type="text" onChange={handleChange} />
                        {/* <Input key={'key_' + field} title={field} type='text' name={field} required={true} onChange={handleChange}/> */}
                    </Fragment>
                )
            })}
            <br /><br />
            {/* href="/order" */}
            <Button type="submit" variant="contained" color="primary">Save</Button>
            {/* <Button variant="contained" color="primary" href="/order">Customize Pizza</Button> */}
        </form>
    )
}

const Form = reduxForm({
    form: 'User'

})(UserForm)

const mapStateToProps = (state) => {
    return { user: state.user }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: data => dispatch(addUser(data))
    }
}


export default connect(
  //  mapStateToProps,
   // mapDispatchToProps
    dispatch => ({
        onSubmit: data => store.dispatch(addUser(data))
    })
)(Form)

