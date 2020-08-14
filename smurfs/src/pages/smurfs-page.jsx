import React from 'react'
import { getAllSmurfs } from '../redux/actions'
import { connect } from 'react-redux'
const SmurfsPage = ({ getAllSmurfs }) => {
    return (
        <div>
            <h1 onClick={getAllSmurfs}>Smurfs page</h1>
        </div>
    )
}

const mapStateToProps = () => {
    
}

export default connect(() => {}, { getAllSmurfs })(SmurfsPage)