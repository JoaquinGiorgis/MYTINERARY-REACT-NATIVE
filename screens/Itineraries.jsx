import {TouchableHighlight,ScrollView,Button,Text, View, Image, ImageBackground } from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const fondo = {uri:'https://cdn.dribbble.com/users/1146228/screenshots/3689910/1800x600.jpg?compress=1&resize=800x600'}

const logoFoto = {uri:'https://i.imgur.com/ufSXF8G.png'}
const logoAvion ={uri:'https://i.imgur.com/rDYrQsp.png'}
const logoIsla = {uri:'https://i.imgur.com/wZG4JQh.png'}
const logoMaleta = {uri:'https://i.imgur.com/i4HY6Rd.png'}
const oops = {uri:'https://i.imgur.com/2SoUeIQ.png'}

const Itineraries =(props) => {

const [itineraries, setItineraries] = useState([])

const cityId = props.route.params.idCity


useEffect(()=> {
    fetch('https://mytinerarybackend.herokuapp.com/api/itineraries/'+cityId)

    .then(res => res.json())
    .then(data => setItineraries(data.respuesta))
},[])


    return(
        <View style={styles.cajaPadreCities}>
        <ImageBackground style={styles.fondoCiudades} source={fondo}>
            <ScrollView style={styles.dont}>  
                        
                <ImageBackground source={{uri: `${props.route.params.cityPic}`}} style={styles.imagenCiudad}>
                    
            </ImageBackground>
            
            <View style={styles.prueba}>
                        <Text style={styles.tituloCiudad}>Welcome to {props.route.params.cityName}!</Text>
                </View>
            
                <View>
                    <View style={styles.cajaLogos}>
                        <Image source={logoFoto} style={styles.logos}/>
                        <Image source={logoAvion} style={styles.logos}/>
                        <Image source={logoIsla} style={styles.logos}/>
                        <Image source={logoMaleta} style={styles.logos}/>
                        
                    </View>
                    <View style={styles.cajaCategorias}>
                            <Text style={styles.textCategoria}>PLACES</Text>
                            <Text style={styles.textCategoria}>TRAVEL</Text>
                            <Text style={styles.textCategoria}>BEACH</Text>
                            <Text style={styles.textCategoria}>HOTEL</Text>

                    </View>
                </View>

                {(itineraries.length === 0) ?<View><Image source={oops} style={styles.imagenOops}/><Text>Go back all cities</Text></View> : itineraries.map(itinerary => (
                            
                            <View  style={styles.cajaMap}>           
                            
                                <View style={styles.cajaTitulo}>
                                    <Text style={styles.textoTitulo}>{itinerary.title}</Text>
                                </View>
                                    
                                
                                        {itinerary.activities.map(activity => (
                                            <View style={styles.contenedorActividades}>
                                                <View style={styles.textoActividad}>
                                                    <Text style={styles.tipoActividades}>{activity.activityTitle}</Text>
                                                    
                                                </View>
                                                <View style={styles.contenedorFotos}>
                                                    <Image style={styles.fotoActividad} source={{uri: `${activity.activityPic}`}}/>
                                                </View>
                                            </View>
                                        ))}
                                

                                    

                                    <View style={styles.cajaTitulo}>
                                        <Text style={styles.textoInformation}>ABOUT ITINERARY</Text>
                                    </View>
                                    
                                    <View style={styles.textoActividad}>

                                        <Text style={styles.userName}>{itinerary.userName}</Text>
                                        <Image style={styles.fotoUser} source={{uri: `${itinerary.userPic}`}}/>

                                    </View>
                                    
                                
                                    
                                    <View style={styles.cajaInfoUser}>
                                        <Text style={styles.info}>Hours: {itinerary.hours}</Text>
                                        <Text style={styles.info2}>Price: {Array(itinerary.price).fill('$')}</Text>
                                        
                                    </View>
                                    <View style={styles.casa}>
                                        <Text style={styles.footerCard}>WE WILL WAIT FOR YOU!</Text>
                                    </View>
                                            <View style={styles.test}>
                                            </View>
                            </View>
                            
                        
                            ))}
                                
                        
                        
                
                
                </ScrollView>  
            </ImageBackground>       
        </View>
    )
}

const styles ={

    textCategoria:{
        fontWeight: 'bold',
        backgroundColor:'black',
        paddingLeft:10,
        paddingRight:10,
        color:'violet',
        borderColor:'white',
        borderWidth: 1,
        borderRadius:25,
    },

    test:{
        height:200,
        width:200
    },

    imagenOops:{
        height:150,
        width:'100%',
        marginTop:20
        
    },

    casa:{
        
        backgroundColor:'black',
        width:'100%',
        alignItems:'center',
        marginTop:'10%',
        borderColor:'violet',
        borderWidth: 1,
    },
    footerCard:{
        fontSize: RFValue(18, 580),
        color:'white',
    },

    tipoActividades:{
        textTransform:'uppercase',
        fontWeight:'bold',
        color:'white'
    },

    cajaInfoUser:{
        flexDirection:'row',
        justifyContent:'center'
    },

   cajaMap:{
       paddingTop:20,
       width:'100%',
       alignItems:'center',
       paddingBottom:'25%',
      
   },
    cajaHashtags:{
        flexDirection:'row',
       
        
        paddingTop:10
    },

    info2:{
        fontSize: RFValue(18, 580),
        marginLeft:20,
        marginTop:20,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'white',
        backgroundColor:'black',
        paddingLeft:10,
        paddingRight: 10, 
        borderColor:'violet',
        borderRadius:25,
        borderWidth: 1,
    },
    info:{
        fontSize: RFValue(18, 580),
        marginLeft:20,
        marginTop:20,
        fontWeight:'bold',
        textTransform:'uppercase',
        paddingLeft:10,
        paddingRight: 10 ,
        borderColor:'violet',
        borderRadius:25,
        borderWidth: 1,
        color:'white',
        backgroundColor:'black',
    },

   

    userName:{
        fontSize: RFValue(18, 580),
        backgroundColor:'violet',
        textTransform:'uppercase',
        fontWeight:'bold',
        marginTop:15,
        color:'white',
        backgroundColor:'black',
        borderRadius:25,
        borderWidth: 1,
        paddingLeft:10,
        paddingRight: 10 ,
        borderColor:'violet',
        borderRadius:25,
        borderWidth: 1,
        
    },

    textoInformation:{
        fontSize: RFValue(17, 580),
        color:'white',
        fontWeight: 'bold'
    },

    textoTitulo:{
        fontSize: RFValue(18, 580),
        fontWeight: 'bold',
        textTransform:'uppercase',
        alignItems:'center',
        color:'white',
        
        
       
    },

    cajaTitulo:{
        alignItems:'center',
        borderColor:'violet',
        
        borderWidth: 1,
        width:'100%',
        
        backgroundColor:'black',
    },

    textoActividad:{
      
        alignItems:'center'
    },
    
    fotoUser:{
        
        width:200,
        height:200,
        marginTop:15,
        borderRadius:25,
        borderWidth: 1,
    },

   

    cajaCategorias:{
        
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingTop:5,

    }, 

    contenedorActividades:{
        width:'80%',
        marginTop:20,
        marginBottom:20
    },

    fotoActividad:{
        
        height:180,
        marginBottom:10,
        borderRadius:25,
        borderWidth: 1,
        
        
    },
    logos:{
        width:75,
        height:75,
        
    },

    cajaLogos:{
        
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingTop:15,
    },

    prueba:{
        backgroundColor:'violet',
        alignItems:'center'
    },

    tituloCiudad:{
        color:'white',
        textTransform:'uppercase',
        fontSize: RFValue(25, 580),
        fontWeight: 'bold',
    },

    imagenCiudad:{
        width:'100%',
        height:300,
        
    },

    tituloIt:{
        color:'black',
        fontSize: RFValue(25, 580),
        paddingTop:25,
        alignItems:'center',
    },

    cajaPadreCities:{
        flex: 1,
        
    },
    fondoCiudades: {
        flex: 1,
        backgroundColor:'yellow',
        resizeMode: 'cover',
        
       
       
      },
}

export default Itineraries