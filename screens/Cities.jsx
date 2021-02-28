
import React, {useRef, useState, useEffect} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {TouchableHighlight,ScrollView,Button,Text, View, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const fondoCities = { uri: 'https://image.freepik.com/vector-gratis/gradiente-liquido-fondo-pantalla-mobille_79603-461.jpg'}


const Cities =(props) => {
console.log(props)
    const [cities, setCities] = useState([])

    useEffect(()=> {
        fetch('https://mytinerarybackend.herokuapp.com/api/cities')

        .then(res => res.json())
        .then(data => setCities(data.respuesta))
    },[])

return(

    <View style={styles.cajaPadreCities}>
    <ImageBackground source={fondoCities} style={styles.fondoCiudades}>

        <View>
            <Text>Cities</Text>
        </View>

        


        <View style={styles.cajaContenedorCities} >
            <ScrollView >
                {cities.map(city => (
                <TouchableOpacity
                
                onPress={() => props.navigation.navigate("Itineraries",{idCity: city._id, cityPic: city.cityPic, cityName: city.cityName})}>
                <View style={styles.pruebaaa} >
                                        
                      <Image style={styles.fotoCiudad} source={{uri:`${city.cityPic}`}}/>
                      <Text style={styles.nombreCiudad}>{city.cityName}</Text>
                      
                                                  
                  </View>
              </TouchableOpacity>
                ))}
            </ScrollView>   
        </View>
    </ImageBackground>
    </View>
)
}
const styles = {
    fondoCiudades:{
        flex: 1,
        resizeMode: 'cover',
        alignItems:'center',
        width:'100%'
    },

    pruebaaa:{
        
        alignItems:'center'
    
    },


    nombreCiudad:{
        
        
        paddingBottom:20,
        color:'white',
        fontSize: RFValue(20, 580),
    },


    fotoCiudad: {
        width: 350,
        height: 250,
        borderRadius:45,
        borderWidth: 1,
      },

    cajaPadreCities:{
        flex: 1,
        alignItems:'center',
        
    }
}


export default Cities
