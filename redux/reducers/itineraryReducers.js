const initalState = {
    itineraries: [],
    newsItineraries:[]
    
}

const itineraryReducer = (state = initalState, action) => {
    
    
    switch(action.type) {
        case "ID_CITY_ITINERARIES":
            return {
            ...state,
            
            itineraries: action.payload,
            
            newsItineraries: action.payload.map(itinerary => itinerary._id === action.payload._id  ? itinerary=action.payload : itinerary)

        }
        
       
        default:
            return state
    }   
   
}


export default itineraryReducer