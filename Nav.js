import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import {connect} from 'react-redux'
import StackNavigator  from "./routes/StackNavigator";

const Nav = (props) => {
  console.log(props)
    return (
        <NavigationContainer >
          
          <StackNavigator />
          
        </NavigationContainer>
    );
  }

  const mapStateToProps = state => {
    return {
        loggedUser: state.auth.loggedUser
    }
  } // INFORMACION

  const mapDispatchToProps = {
    
  }

export default connect(mapStateToProps, null)(Nav);