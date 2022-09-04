import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";
import Header from "../shared/header";


const RootDrawerNavigator = createDrawerNavigator();

export default function Navigator() {
  return (
   <NavigationContainer>
      <RootDrawerNavigator.Navigator>
        <RootDrawerNavigator.Screen
          name="Home"
          component={HomeStack}
          options={({navigation}) => {
            return {
              headerTitle: () => <Header navigation={navigation} title="GameZone" />,
              // headerBackground: () => <Image source={require('../assets/game_bg.png')}  style={{height:'100%'}}/>,
            }
          }}
        />

        <RootDrawerNavigator.Screen
          name="About"
          component={AboutStack}
          options={({navigation}) => {
            return {
              headerTitle: () => <Header navigation={navigation} title="About GameZone" />,
              // headerBackground: () => <Image source={require('../assets/game_bg.png')}  style={{height:'100%'}}/>,
            }
          }}
        />
      </RootDrawerNavigator.Navigator>
      </NavigationContainer>
  );
}
