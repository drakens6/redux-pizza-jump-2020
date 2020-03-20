import React from 'react'

import TabPanel from './tabPanel'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

import UserForm from './userForm'

function UserInfo (props) {
        return (
            <Box justifyContent="center">
                <TabPanel value='1' index='1'>

                    <h2>Enter Your Order Information</h2>
                    <Card style={{minWidth: 500}}>
                        <CardContent>
                            <UserForm ></UserForm>
                        </CardContent>
                    </Card>

                </TabPanel>
            </Box>
        )
}


export default UserInfo

