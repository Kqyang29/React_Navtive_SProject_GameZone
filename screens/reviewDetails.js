import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles,images } from "../styles/global";
import Card from "../shared/card";


export default function ReviewDetails({navigation,route}) {

  // const pressHandler = () => {
    
  //   navigation.goBack("Home");

  // }
  const { title,body,rating} = route.params;
  // console.log(title)

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>{title}</Text>
        <Text style={globalStyles.title}>{body}</Text>
        {/* <Text style={globalStyles.title}>{rating}</Text> */}
        <View style={styles.rate}>
          <Text style={globalStyles.title}>GameZone Rating: </Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop:20,
    
  }
 
});