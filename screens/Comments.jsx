import React from 'react'
import {TouchableHighlight,ScrollView,Button,Text, View, Image, ImageBackground,TextInput } from 'react-native';

const Comments = (props) => {
    console.log(props)
    return (
        <ScrollView>
        <View style={styles.contenedor}>
            
                <View style={styles.cajaComentarios}>
            
                    {props.route.params.comments.map(Comment => (
                    <View style={styles.cajaPadreComentarios}>
                        <View style={styles.nombreUser}>
                            <Text>{Comment.userName}</Text>
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
                
               
        </View>
        </ScrollView>

    )
}

const styles ={
    textArea:{
     
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
        backgroundColor:'yellow',
        marginTop:20,
    },

    nombreUser:{
        paddingLeft:10,
        paddingBottom:10
    },

    mensaje:{
        justifyContent:'center',
        paddingLeft:10
    },
    
    

    cajaComentarios:{
        backgroundColor:'grey',
        width:"100%",
        paddingLeft:5,
        justifyContent:'center'
        
    },

    contenedor:{
        alignItems:'center',
        justifyContent:'center'
    },
}

export default Comments
