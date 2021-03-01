import axios from 'axios'

const itineraryActions = {
    mostrarItineraries: (ciudadId) => {
        return async (dispatch, getState) => {

            const data = await axios.get('http://localhost:4000/api/itineraries/'+ciudadId)
            dispatch({type: "ID_CITY_ITINERARIES", payload: data.data.respuesta})
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
    
    deleteComment: (itineraryId,idComment)=>{
        return async (dispatch,getstate) => {
        
        try{
        const data = await axios.delete(`http://localhost:4000/api/itineraries/${itineraryId}/${idComment}`)
        console.log(data)
        if (data.data.success){
            dispatch({type:'ID_CITY_ITINERARIES', payload:data.data.response})
            return data
        }  }  
        catch(error){
        
        const data ={errores:{details:[{message:'An error occurred'}]}}
        return data
        
    }}},

    
      
    
}

export default itineraryActions