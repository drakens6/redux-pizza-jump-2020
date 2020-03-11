import React, { useState, Fragment } from 'react'

import TabPanel from './tabPanel'
import { FormControl } from '@material-ui/core';
import { InputLabel, Input, FormHelperText, Button } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import UserForm from './userForm'
import { Field, reduxForm } from 'redux-form'
import { addUser } from '../redux/actions/actions';
import { connect } from 'react-redux'

function UserInfo (props) {

    let useStyles =  makeStyles({
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

    let classes = useStyles();

  
    // render() {
        return (
            <Box justifyContent="center">
                <TabPanel value='1' index='1'>

                    <h2>Enter Your Order Information</h2>
                    <Card className={classes.root}>
                        <CardContent>
                            <UserForm ></UserForm>
                        </CardContent>
                    </Card>

                </TabPanel>
            </Box>
        )
    // }
}


export default UserInfo

