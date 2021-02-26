import axios from 'axios'
import Swal from 'sweetalert2'


const authActions = {
    newClient: (newUser) => {
        return async (dispatch, getState) => {

            const respuesta = await axios.post('http://192.168.0.19:4000/api/user/register', newUser)

            if(!respuesta.data.success) {
                return respuesta.data
            }

            
            dispatch({type: 'LOG_USER', payload: respuesta.data})
        }
    },

    disconnectUser: () => {
        return (dispatch, getState) => {
            dispatch({type: 'DISCONNECT_USER'})
        }
    },

    loginClient: (user) => { // Borra loggeduser del state y se deslogea 
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://192.168.0.19:4000/api/user/login', user)
            if(!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({type:'LOG_USER', payload: respuesta.data})
        }
    },

    
}

export default authActions