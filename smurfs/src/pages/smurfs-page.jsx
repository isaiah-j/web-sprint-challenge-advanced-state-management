import React from 'react'
import { getAllSmurfs } from '../redux/actions'
import { connect } from 'react-redux'
import Smurf from '../components/smurf/smurf'
const SmurfsPage = ({ getAllSmurfs, smurfs }) => {
    console.log(smurfs)

    return (
        <div>
            <h1 onClick={getAllSmurfs}>Smurfs page</h1>
            {
                smurfs.map(smurf => {
                    const {name, age, height, id} = smurf
                    return <Smurf key={id} age={age} height={height} name={name}></Smurf>
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return { smurfs: state.smurfs }
}

export default connect(mapStateToProps, { getAllSmurfs })(SmurfsPage)