import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import React from "react";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerTintColor: "#444",
      headerStyle: {
        backgroundColor: '#eee',
        // height:60
                  
      }
    }}
    >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          // options={{
          //   title: 'Review Details',
          // }}
          // options={{ headerShown: false }}

        />
      </Stack.Navigator>
    // </NavigationContainer>
  )
}