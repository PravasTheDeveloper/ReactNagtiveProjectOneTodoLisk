import React, { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import Task from "./components/Task";

function App() {

  const [task, settask] = useState()
  const [taskItems, settaskItems] = useState([])
  

  const handlePress = () => {
    settaskItems([...taskItems , task])
    settask(null);
    Keyboard.dismiss()
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          Today's Tasks
        </Text>
        <View style={styles.items}>
          {
            taskItems.map((data , index) => {
              return (<Task key={index} text={data} />)
              
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput placeholder="Write a Task" style={styles.input} value={task} onChangeText={(e) => {settask(e)}} />
        <TouchableOpacity onPress={() => {handlePress()}}>
          <View style={styles.addWrapper}>
            <Text style={styles.addtext}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED"
  },
  tasksWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "black"
  },
  items: {
    marginTop: 20
  },
  writeTaskWrapper: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 30,
    justifyContent: "space-between",
    alignItems: "center",
    height: 50
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    paddingHorizontal: 20,
    borderRadius: 50
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor:"white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  addtext: {
    fontSize:30
  }
})

export default App; 