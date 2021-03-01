import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {connect} from 'react-redux'
import Login from "../screens/Login";
import Home from "../screens/Home";
import Cities from "../screens/Cities";
import Itineraries from "../screens/Itineraries";
import Register from "../screens/Register";
import Comments from "../screens/Comments";


const Stack = createStackNavigator();



const StackNavigator = (props) => {

  console.log(props.loggedUser)

var routes = null

if(!props.loggedUser){
  routes= 
  <>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </>
}


  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: false
    }}>
      
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Cities" component={Cities} />
      <Stack.Screen name="Itineraries" component={Itineraries} />
      <Stack.Screen name="Comments" component={Comments} />
      {routes}
    </Stack.Navigator>
  );
}


// const HomeStackNavigator = () => {
//     return (
//       <Stack.Navigator screenOptions={{
//         headerShown: false
//       }}> 
//         <Stack.Screen name="Home" component={Home} />
        
//       </Stack.Navigator>
//     );
//   }


//   const CitiesStackNavigator = () => {
//     return (
//       <Stack.Navigator screenOptions={{
//         headerShown: false
//       }}> 
//         <Stack.Screen name="Cities" component={Cities} />
        
//       </Stack.Navigator>
//     );
//   }

//   const ItinerariesStackNavigator = () => {
//     return (
//       <Stack.Navigator screenOptions={{
//         headerShown: false
//       }}> 
//         <Stack.Screen name="Itineraries" component={Itineraries} />
        
//       </Stack.Navigator>
//     );
//   }
const mapStateToProps = state => {
  return {
      loggedUser: state.auth.loggedUser
  }
} // INFORMACION

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, null)(StackNavigator);


