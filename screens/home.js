import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback,FlatList,TouchableOpacity ,Modal, Keyboard} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {

  const [Mopen, setMOpen] = useState(false);
  
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((cur) => {
      return [review, ...cur]
    });
    setMOpen(false);
  }

 
  return (
    <View style={globalStyles.container}>

      <Modal visible={Mopen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <MaterialIcons
              name="close"
              size={24}
              style={{...styles.ModelToggle,...styles.ModelClose}}
              onPress={() => setMOpen(false)}
            />

            <ReviewForm addReview={addReview} />
          </View>
       </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        style={styles.ModelToggle}
          size={24}
          onPress={()=>setMOpen(true)}
        />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigation.navigate("ReviewDetails",item)}>
            <Card>
              <Text style={globalStyles.title}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        ) }
      />
    </View>
  )
}


const styles = StyleSheet.create({
  ModelToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf:"center"
  },
  ModelClose: {
    marginTop: 20,
    marginBottom: 0
  },
  content: {
    flex: 1,
    
  }
})