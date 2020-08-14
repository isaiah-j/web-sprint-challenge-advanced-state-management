const INITIAL_STATE = {
    errors: [],
    isFetching: false,
    smurfs: []
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_SMURFS':
            return {
                ...state,
                smurfs: action.payload.smurfs
            }
        default:
            return state
    }
}