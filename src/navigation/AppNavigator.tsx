import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../components/LoginScreen";
import RegisterScreen from "../components/RegisterScreen";
import Home from '../Screens/Home'
import TermOfUseScreen from "../Screens/TermOfUseScreen";
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} 
          options={{ headerStyle: {
            backgroundColor: '#E1B12C',
          },
          headerShown: false
        }}


          
          />
        <Stack.Screen name="Term" component={TermOfUseScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
