import React, { useState } from 'react'
import TabPanel from './tabPanel'
import { FormControl } from '@material-ui/core';
import { InputLabel, Input, FormHelperText, Button } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

function UserInfo(props) {
    // const styleObj = {
    //     // border: "1px solid black",
    //     padding: "100px"
    // }

    const useStyles = makeStyles({
        root: {
            minWidth: 600,
            width: '100%'

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
    return (
        <TabPanel value='1' index='1'>
            <h2>User Forms</h2>
            <Card className={classes.root}>
                <CardContent>
                    {Object.keys(model).map((field, index) => {

                        return (
                            <React.Fragment>
                                <FormControl>
                                    <InputLabel htmlFor="my-input">{field}</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" />
                                    {/* <FormHelperText id="my-helper-text">`Enter your ${field}`</FormHelperText> */}
                                </FormControl>
                                <br />
                            </React.Fragment>
                        )
                    })
                    }
                    <br /><br />
                    <Button variant="contained" color="primary">Start Order</Button>
                </CardContent>
            </Card>
        </TabPanel>
    )
}

export default UserInfo

