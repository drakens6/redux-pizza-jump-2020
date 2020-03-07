/* not sure if i need this?? */

import { connect } from 'react-redux'
import App from '../app/App'

const mapStateToProps = state => ({
    message: state.message
})

const IndexContainer = connect(
    mapStateToProps
)(App)

export default IndexContainer