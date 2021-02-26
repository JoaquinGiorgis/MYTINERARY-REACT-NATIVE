import React from "react";
import { NavigationContainer } from "@react-navigation/native";


import  DrawerNavigator  from "./routes/DrawerNavigator";
import { StackNavigator } from "./routes/StackNavigator";

 const App = () => {
  return (
    <NavigationContainer >
      
      <StackNavigator />
      
    </NavigationContainer>
  );
}
export default App