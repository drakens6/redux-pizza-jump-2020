import React from 'react'
import TabPanel from './tabPanel'
import PropTypes from 'prop-types'
//import Item from './orderItem'
import { connect } from 'react-redux'
import store from '../redux/store'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'
import { arrayInsert } from 'redux-form'


class orderList extends React.Component {

    render() {
        let userInfo = this.props.user
        //  let classes = useStyles();
        return (
            <TabPanel value='3' index='3'>
                <h1> Hello {userInfo.name}</h1>
                <Card>
                    <CardContent>
                        <h2>Order Information</h2>
                        <h3>Customer</h3>
                        {userInfo.map((infoItem, index) => {
                           // let {title, value} = [...infoItem]
                            return (
                                <p><b>{infoItem[0]}:</b> {infoItem[1]}</p>
                            )
                        })}
                        <br></br>
                        <h3>Food</h3>
                    </CardContent>
                </Card>
                <br/>
                <Button variant="contained" color="primary" >Finalize order</Button>
            </TabPanel>

        )
    }
}

const mapStateToProps = (state) => { 
    let values = Object.entries(state.User)
    return { user: values}
}

// const mapDispatchToProps = (dispatch) => {
//     return { onGetUser: store.getState().user}
// }

const FinalOrder = connect(
    mapStateToProps

   //mapDispatchToProps
)(orderList)

export default FinalOrder
