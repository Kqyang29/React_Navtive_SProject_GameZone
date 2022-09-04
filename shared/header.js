import React from "react";
import { StyleSheet, View, Text,Image, ImageBackground } from "react-native";


export default function Header({navigation,title}) {

  const pressHandler = () => {
    navigation.openDrawer()
  }

  return (
    <ImageBackground source={require("../assets/game_bg.png")} style={styles.header}>
      {/* <MaterialIcons name="menu" size={28} onPress={pressHandler } style={ styles.icon} /> */}
      <View style={styles.headertitle}>
        <Image source={require("../assets/heart_logo.png")} style={styles.headerImage} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontWeight: "bold",
    fontSize:20,
    color: "#333",
    letterSpacing:1,
  },
  // icon: {
  //   position: "absolute",
  //   left:16,
  // }
  headertitle: {
    flexDirection:"row",
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal:10,
  },
 
});