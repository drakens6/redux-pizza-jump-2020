import React from 'react'

import {
    BrowserRouter as Router, Switch, Route,
     Link, useParams
} from 'react-router-dom'

// components / views
import AddCustomer from './v/addCustomer'
import { checkPropTypes } from 'prop-types'

export default function Routing(props) {
  
    return(
        <Router>
            {props.links.map( link=> {
                return(
                    <button
                        onClick={ () =>props.changePage(link.to)}>
                            <Link to={link.to}>{link.name}</Link>
                        </button>
                )
            })}

            <Switch>
                <Route path="/" exact component = {AddCustomer}/>

            </Switch>
        </Router>
    )
}