import React from 'react'
import {TouchableHighlight,ScrollView,Button,Text, View, Image, ImageBackground,TextInput } from 'react-native';

const Comments = (props) => {
    console.log(props)
    const logoFoto = {uri:'https://cdn.dribbble.com/users/1146228/screenshots/3689910/1800x600.jpg?compress=1&resize=800x600'}
    return (
        <ScrollView>

        <View style={styles.contenedor}>
            <ImageBackground source={logoFoto} style={styles.fondo}>
                <View style={styles.cajaComentarios}>
            
                    {props.route.params.comments.map(Comment => (
                    <View style={styles.cajaPadreComentarios}>
                        <View style={styles.nombreUser}>
                            <Text style={styles.username}>{Comment.userName}</Text>
                        </View>
                        <View style={styles.cajaMensaje}>
                            <Text style={styles.mensaje}>{Comment.comment}</Text>
                        </View>
                    </View>))}
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="
                        Enter your message here!"
                        placeholderTextColor="#9b9b9b"/>
                </View>
            </ImageBackground>   
               
        </View>
        </ScrollView>

    )
}

const styles ={
    username:{
        fontWeight:"bold",
    },

    textArea:{
        fontWeight:"bold",
        height: 40,
        width:"95%",
        paddingLeft:10,
      },
    
      input:{
        
        height:40,
        borderColor: '#ccc',
        borderWidth: 2,
        marginBottom: 5,
        marginTop:20,
        borderRadius:25,
        borderWidth: 1,
        marginLeft:8
        
      },

    cajaPadreComentarios:{
        minHeight: 50,
        maxWidth:180,
        backgroundColor:'violet',
        marginTop:20,
        marginLeft:10,
    },

    nombreUser:{
        paddingLeft:10,
        paddingBottom:10,
        
    },

    mensaje:{
        justifyContent:'center',
        paddingLeft:10,
        
    },
    
    

   
    fondo:{
        width:'100%'
    },
    contenedor:{
        alignItems:'center',
        justifyContent:'center'
    },
}

export default Comments
