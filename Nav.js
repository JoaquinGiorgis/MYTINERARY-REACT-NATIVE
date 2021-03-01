import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import authActions from './redux/actions/authActions'
import {connect} from 'react-redux'
import StackNavigator  from "./routes/StackNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const Nav = (props) => {
  console.log(props)

  // if(props.loggedUser){
  //   AsyncStorage.getItem("token")
  //   .then(tokenLS =>{if(tokenLS){
  //     logFromAsyncStorage(tokenLS)
  //     .then(response =>
  //       Alert.alert(`Welcome ${response.name}`))
  //   }})
  // }
  
    return (
        <NavigationContainer >
          
          <StackNavigator />
          
        </NavigationContainer>
    );
  }

  // const mapStateToProps = state => {
  //   return {
  //       loggedUser: state.auth.loggedUser
  //   }
  // } // INFORMACION

  // const mapDispatchToProps = {
  //   logFromAsyncStorage: authActions.logFromAsyncStorage
  // }

export default Nav;