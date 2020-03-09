import React from 'react'
import TabPanel from './tabPanel'
import Box from '@material-ui/core/Box';
import {Button} from '@material-ui/core'

function Home(props) {
    return (
        <TabPanel value='0' index='0'>
            {/* <Box justifyContent="center"> */}
                <h1>Hello Home</h1>
                <Button variant="contained" color="primary" href="/user">Start Order</Button>
            {/* </Box> */}
        </TabPanel>
    )
}
export default Home