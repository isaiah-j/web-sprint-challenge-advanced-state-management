import React, { useEffect } from 'react'
import { getAllSmurfs } from '../../redux/actions'
import { connect } from 'react-redux'
import Smurf from '../../components/smurf/smurf'

const SmurfsPage = ({ getAllSmurfs, smurfs }) => {
    useEffect(() => {
        getAllSmurfs()
    }, [])

    return (
        <div>
            <h1>Smurfs page</h1>
            {
                smurfs.map(smurf => {
                    const { name, age, height, id } = smurf
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