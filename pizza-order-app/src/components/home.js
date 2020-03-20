import React from 'react'
import {useHistory} from 'react-router-dom'
import TabPanel from './tabPanel'
import { Button } from '@material-ui/core'

function Home() {
    const history = useHistory()

    const handleClick = () => {
        history.push('/user')
    }
    return (
        <TabPanel value='0' index='0'>
            <div>
                <h1>Welcome to Pizza Shop!</h1>
                <Button variant="contained" color="primary" onClick={handleClick}>Start Order</Button>
            </div>
        </TabPanel>
    )
}
export default Home