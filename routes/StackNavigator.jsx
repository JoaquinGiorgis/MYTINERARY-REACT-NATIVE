import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Cities from "../screens/Cities";
import Itineraries from "../screens/Itineraries";
import Register from "../screens/Register";


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="" screenOptions={{
      headerShown: false
    }}>
      {/* <Stack.Screen name="Login" component={Login} /> */}
     
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Cities" component={Cities} />
      <Stack.Screen name="Itineraries" component={Itineraries} />
      <Stack.Screen name="Register" component={Register} />
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


export { StackNavigator } 