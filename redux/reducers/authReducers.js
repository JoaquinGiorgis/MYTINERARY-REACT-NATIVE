const initialState = {
    loggedUser: null
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOG_USER': // new_user action
            return {
                ...state,
                loggedUser: action.payload.response
            }

        case 'DISCONNECT_USER':
            localStorage.clear()
            return {
                ...state,
                loggedUser: null
            }
           
        
        default:
            return state
    }

}

module.exports = authReducer