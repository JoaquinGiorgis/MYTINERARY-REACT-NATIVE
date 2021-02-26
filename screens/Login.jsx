import { StatusBar } from 'expo-status-bar';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import React from 'react';
import { SocialIcon } from 'react-native-elements'
import {Button,TextInput,Image, ImageBackground, StyleSheet, Text, View,  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



const image = { uri: "https://cdn.dribbble.com/users/3562886/screenshots/14628362/media/1a075e4f9b8db622570fcc5eb14a8d42.png?compress=1&resize=1000x750" };
const logo = {uri: "https://i.imgur.com/ODollJl.png"}


const Login =(props) => {

  return(
    <View style={styles.cajaGrande}>
       

       <ImageBackground source={image} style={styles.image}>
    
        
        <Image source={logo} style={styles.stretch} />
        <ScrollView>
          <View style={styles.prueba}>
          
              <View style={styles.cajaRegister}>
              
                <Text style={styles.texto}>LOGIN</Text>
                
                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder="Username"
                  
              />
              <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder='Password'
                  
                  
              />
                <View style={styles.boton}>
                  <Button
                    style={styles.pruebita}
                    title="LOGIN"
                    color="#841584"
                    
                  />
                </View>
               
              </View>
              
          {/* <Button title="Go Home"  onPress={()=> navigation.navigate('Home')}>
         
         </Button> */}

         <Text style={styles.register} onPress={()=> props.navigation.navigate('Register')}>Don't have an account? Click here!</Text>
              
         


          <SocialIcon
            style={styles.social}
            title='Sign In With Facebook'
            button
            type='facebook'
          />
          
        </View>
        </ScrollView>

      </ImageBackground>
     

    </View>
  )
}

const styles = {
  register:{
    color:'white',
    fontSize: RFValue(17, 580),
    paddingTop:10
  },


  social:{
    paddingLeft:25,
    paddingRight:25,
    marginTop:"15%",
  },


  texto:{
    color:'white',
    fontSize: RFValue(24, 580),
    

  },

  boton:{
    width:"40%",
    paddingTop:10,
    

  },

  textArea:{
    height: 40,
    width:"80%",
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
    
  },




  prueba:{
    flex:1,
    width:'100%',
    alignItems:'center',
    paddingTop:'40%'
  },


  cajaRegister:{
    
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    paddingBottom:10,
    width:'100%',
    borderRadius:25,
    borderWidth: 1,
    borderColor: 'rgba(52, 52, 52, 0.8)',
    
    alignItems:'center',
  },

  
  cajaGrande: {
    flex: 1,
    
    justifyContent:'center'
  },
  stretch: {
    marginTop:30,
    width: "100%",
    height: 100,
    resizeMode: 'cover',
    
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems:'center',
  },

  
}

export default Login