import AsyncStorage from '@react-native-async-storage/async-storage'
import {Alert } from 'react-native';
import axios from 'axios'



const authActions = {
    newClient: (newUser) => {
        return async (dispatch, getState) => {

            const respuesta = await axios.post('https://mytinerarybackend.herokuapp.com/api/user/register', newUser)

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
            const respuesta = await axios.post('https://mytinerarybackend.herokuapp.com/api/user/login', user)
            if(!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({type:'LOG_USER', payload: respuesta.data})
        }
    },

    logFromAsyncStorage: (token) => {
        return async (dispatch, getState)=>{
            try{
                const respuesta = await axios.post('https://mytinerarybackend.herokuapp.com/api/user/localstorage', {token}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                if (respuesta.data.success) {
                    console.log(respuesta)
                }

                dispatch({type: 'LOG_USER', payload:{response: {...respuesta.data.response}}})
            } catch (error) {
                if(error.response.status === 401) {
                   Alert.alert('Acceso denegado!')
                    //   AsyncStorage.clear()
                }
            }
        }
    }, 
    cargarComentarios: newComment => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/itineraries/', newComment)
            
            
            if(respuesta.data.success === true) {
                const respuesta = await axios.get('http://localhost:4000/api/itineraries/'+newComment.ciudadId)
                dispatch({type: "ID_CITY_ITINERARIES", payload: respuesta.data.respuesta})
                
            }

            
        }
    },

    
}

export default authActions