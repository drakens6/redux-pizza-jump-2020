import React, { useState, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import TabPanel from './tabPanel'
import { FormControl } from '@material-ui/core';
import { InputLabel, Input, FormHelperText, Button } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import store from '../redux/store'
import { addUser } from '../redux/actions/actions';

const useStyles = makeStyles({
    root: {
        minWidth: 600
    },
    bullet: {
        display: 'inline-block',
        margin: '0 10px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 10,
    },
    pos: {
        marginBottom: 40,
    },
});

function UserInfo({ dispatch }) {

    let [model, update] = useState({
        name: '',
        number: '',
        email: '',
        address: '',
        zip: '',
        city: '',
        state: ''
    })

    const classes = useStyles();
    const handleChange = (e) => {
        let select = model
      //  update(e.value)
    }

    return (
        <Box justifyContent="center">
            <TabPanel value='1' index='1'>

                <h2>Enter Your Order Information</h2>
                <Card className={classes.root}>
                    <CardContent>
                        {/* onSubmit={handleSubmit} */}
                        <form >
                            {Object.keys(model).map((field, index) => {
                                return (
                                    <Fragment>
                                        <InputLabel htmlFor="my-input">{field}</InputLabel>
                                        {/* <Field name={field} component="input" type="text" /> */}
                                        <Input id={field} type='text' name={field} onChange={handleChange} required="true"/>
                                    </Fragment>
                                )
                            })}
                            <br /><br />
                            <Button type="submit" variant="contained" color="primary" href="/order">Customize Pizza</Button>
                        </form>
                    </CardContent>
                </Card>

            </TabPanel>
        </Box>
    )
}

const myReduxForm = reduxForm({
    form: 'contact'
})(UserInfo)


export default connect(
    dispatch => ({
        onSubmit: data => dispatch(addUser(data))
    })
)(myReduxForm)

{/* <React.Fragment>
<FormControl key={field} onSubmit={props.addUser}>
    <InputLabel htmlFor="my-input">{field}</InputLabel>
    <Input id={field} type='text' ref={props.inputElement} onChange={props.onChangeUser} required="true"/> */}
{/* <FormHelperText id="my-helper-text">Enter your {field}</FormHelperText> */ }
// </FormControl>

// <br />
// </React.Fragment>



//
{/* <div>
                                       
<label htmlFor={field}>{field}</label>
<Field id={field} type='text' name={field} component="input" required="true" />
<br />
</div> */}