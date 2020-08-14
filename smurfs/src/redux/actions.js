import axios from 'axios'
export const getAllSmurfs = () => {
    return async (dispatch) => {
        dispatch({ type: 'GET_SMURFS_START' })
        try {
            let response = await axios.get('http://localhost:3333/smurfs')
            let smurfs = response.data
            dispatch({type: 'GET_SMURFS', payload: {smurfs}})
        } catch (error) {
            console.log('Failed')
            console.log(error)
        }
    }
}