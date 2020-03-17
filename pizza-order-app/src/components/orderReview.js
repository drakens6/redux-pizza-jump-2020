import React from 'react'
import TabPanel from './tabPanel'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core'
import Box from '@material-ui/core/Box';

class orderList extends React.Component {

    render() {
        let userInfo = this.props.user
        let orderInfo = this.props.orders
        return (
            <Box justifyContent="center" >
                <TabPanel value='3' index='3'>
                    <h1> Hello {userInfo[0][1]}</h1>
                    <Card style={{ minWidth: 500, textAlign:'left'}}>
                        <CardContent>
                            <h2>Order Information</h2>
                            <h3>Customer</h3>
                            {userInfo.map((infoItem) => {
                                return (
                                    <p key={'title' + infoItem[0]}><b>{infoItem[0][0].toUpperCase()+infoItem[0].slice(1)}:</b> {infoItem[1]}</p>
                                )
                            })}
                            <hr/>
                            <h3>Food</h3>

                            {orderInfo.map((item, index) => {
                                return (
                                    <React.Fragment>
                                        <h4>Item #{index+1}</h4>
                                        {Object.entries(item).map(details => {
                                            return (
                                                <p key={'title' + details[0]}><b>{details[0][0].toUpperCase()+details[0].slice(1)}:</b> {details[1]}</p>
                                            )
                                        })}
                                        <br />
                                    </React.Fragment>
                                )
                            })}
                        </CardContent>
                    </Card>
                    <br/>
                    <Button variant="contained" color="primary">Finalize order</Button>
                </TabPanel>
            </Box>
        )
    }
}

const mapStateToProps = (state) => {
    let userInfo = Object.entries(state.User)
    let orders = state.Pizza.orders
    let orderItems = []

    orders.map(item => {
        orderItems.push(item.newOrder)
    })

    return {
        user: userInfo,
        orders: orderItems
    }
}


const FinalOrder = connect(
    mapStateToProps
)(orderList)

export default FinalOrder
