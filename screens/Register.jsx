import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import React, {useRef, useState, useEffect} from 'react';
import { SocialIcon } from 'react-native-elements'
import axios from 'axios'
import SelectPicker from 'react-native-form-select-picker';
import {Button,TextInput,Image, ImageBackground, StyleSheet, Text, View, Alert } from 'react-native';
import authActions from '../redux/actions/authActions'
import {connect} from 'react-redux'
import { ScrollView } from "react-native-gesture-handler";



const image = { uri: "https://cdn.dribbble.com/users/3562886/screenshots/14628362/media/1a075e4f9b8db622570fcc5eb14a8d42.png?compress=1&resize=1000x750" };
const logo = {uri: "https://i.imgur.com/ODollJl.png"}


const Register =(props) => {

  const [countries, setCountries] = useState([]);

  const [login, setLogin] = useState([])
  const [newValue, setNewValue] = useState({})
  const[errores, setErrores] = useState([])

  const inputLogin = (name, value) => {
    setNewValue({
          ...newValue,
          [name]: value
      })
  }


  const enviarInfo = async e => {
    e.preventDefault()
    
   
    if(newValue.username === '' || newValue.password === '') {
        Alert.alert('completar')

        return false
    }
   
    setErrores([])
    const respuesta = await props.newClient(newValue)
    
    if(respuesta && !respuesta.successs){
       setErrores(respuesta.errores)

      errores.map(error => Alert.alert(error))
       
       
    } else {
      
      Alert.alert('Hi '+`${newValue.username}! ` + 'welcome to MyTinerary! 🌎🌞')


      
      props.navigation.navigate("Home")

      
    }
}



  const fetchCountries = async () => {
    const api = await fetch ('https://restcountries.eu/rest/v2/all');
    const responseCountries = await api.json();
    setCountries(responseCountries)
  }

  useEffect(() => {
    fetchCountries();
  },[])
 

  return(

    <View style={styles.cajaGrande}>
      <ScrollView>
       <ImageBackground source={image} style={styles.image}>
        
          <Image source={logo} style={styles.stretch} />
        
      
        <View style={styles.prueba}>
          <View style={styles.cajaRegister}>
            <Text style={styles.texto}>REGISTER</Text>
            
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Name"
              placeholderTextColor="#9b9b9b"
              onChangeText={(value) => inputLogin("name", value)}
              
          />
          <TextInput
              style={[styles.input, styles.textArea]}
              placeholder='LastName'
              placeholderTextColor="#9b9b9b"
            onChangeText={(value) => inputLogin("lastname", value)}

          />

          <TextInput
              style={[styles.input, styles.textArea]}
              placeholder='Username'
              placeholderTextColor="#9b9b9b"
            onChangeText={(value) => inputLogin("username", value)}

          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder='Password'
            placeholderTextColor="#9b9b9b"
            onChangeText={(value) => inputLogin("password", value)}

                />

          <TextInput
              style={[styles.input, styles.textArea]}
              placeholder='Mail'
              placeholderTextColor="#9b9b9b"
            onChangeText={(value) => inputLogin("mail", value)}

          />
          <TextInput
              style={[styles.input, styles.textArea]}
              placeholder='UserPic'
              placeholderTextColor="#9b9b9b"
            onChangeText={(value) => inputLogin("urlpic", value)}

          />
          <View style={[styles.input, styles.textArea]}>
            <SelectPicker default='Choose a country' label ='country' placeholder='Country' placeholderStyle={{color:'#9b9b9b'}} onValueChange={(value) => inputLogin("country", value)}  >
              {countries.map((country, index) =>{
                return(
                  <SelectPicker.Item label ={country.name} value={country.name} key={country.name} >{country.name} </SelectPicker.Item>
                )
              })}
            </SelectPicker>
          </View>

            <View style={styles.boton}>
              <Button
                style={styles.pruebita}
                title="Register"
                color="#841584"
                onPress=
                {enviarInfo}
                
                
              />
              
            </View>
            
          </View>
          {/* <Button title="Go Home"  onPress={()=> navigation.navigate('Home')}>
         
         </Button> */}
          <SocialIcon
            style={styles.social}
            title='Register With Facebook'
            button
            type='facebook'
          />
        </View>
        
      </ImageBackground>
      </ScrollView>
    </View>
  )
}

const styles = {
  social:{
    paddingLeft:25,
    paddingRight:25,
    marginTop:"8%",
  },


  texto:{
    color:'white',
    fontSize: RFValue(24, 580),

  },

  boton:{
    
    width:"40%",
    marginTop:5
    

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
    
    paddingTop:'5%'
  },


  cajaRegister:{
    paddingBottom:10,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width:'75%',
    borderRadius:25,
    borderWidth: 1,
    borderColor: 'rgba(52, 52, 52, 0.8)',
    
    alignItems:'center',
  },

  
  cajaGrande: {
    flex: 1,
    
    
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

const mapStateToProps = state => {
  return {
      loggedUser: state.auth.loggedUser
  }
} // INFORMACION

const mapDispatchToProps = { 
  newClient: authActions.newClient
  
} // FUNCIONES

export default connect(mapStateToProps, mapDispatchToProps)(Register);