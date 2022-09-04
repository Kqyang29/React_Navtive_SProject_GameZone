import React, { useState } from "react";
import { StyleSheet, View, Text, Button,FlatList,TouchableOpacity} from "react-native";
import { globalStyles } from "../styles/global";

export default function FlatButton({text,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor:"#f01d71"
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign:"center"
  },
})