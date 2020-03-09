import React from 'react'
import TabPanel from './tabPanel'
import PropTypes from 'prop-types'
import Item from './orderItem'
import { connect } from 'react-redux'

// const OrderList = ({ items, onItemClick }) => (
//     <ul>
//         {items.map((item, index) => {
//             <Item key={index} {...item} onClick={() => onItemClick(index)} />
//         })}
//     </ul>
// )

function orderList({ items, onItemClick }) {
    return (
        <TabPanel value='3' index='3'>
            <h2>Review</h2>
            {/* <ul>
                {items.map((item, index) => {
                   return (
                    <Item key={index} {...item} onClick={() => onItemClick(index)} />
                   )
                })}
            </ul> */}
        </TabPanel>

    )
}

orderList.propTypes ={
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            order: PropTypes.object.isRequired
        }).isRequired
    ).isRequired,
    onItemClick: PropTypes.func.isRequired
}

const FinalOrder = connect()(orderList)

export default FinalOrder