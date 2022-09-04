import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import About from '../screens/about'
import React from "react";
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    // <NavigationContainer
    //   initialRouteName="Home"
    //         screenOptions={{
    //           headerTintColor:"#444",
    //           headerStyle: {
    //             backgroundColor: '#eee',
    //             // height:60
                
    //           }
    //     }}
    // >
        <Stack.Navigator>
        <Stack.Screen
          name="s"
          component={About}
          options={{ headerShown: false }}

        />
      </Stack.Navigator>
    // </NavigationContainer>
  )
}