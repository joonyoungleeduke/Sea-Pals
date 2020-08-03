// incomplete screen

import React from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View, NativeModules} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
import Fish from "../components/Fish";

export default function FishPage({route}){
  const navigation = useNavigation();
  const {name, data, 
    percent,
    level,
    type,
    page,
    component,
    personality} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Fish top="13%"/>
      <Text style={styles.level}>Level {level}</Text>
      <TouchableOpacity
        style={[styles.button, Dimensions.button]}
        onPress={() => navigation.navigate("Map", {name: name, level: level, type: type, 
          data: data,
          percent: percent,
          page: page,
          component: component,
          personality: personality})}>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>
            Play
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightPurple,
  },
  button: {
    backgroundColor: "#ffffff",
    bottom: 80,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 2,
    height: Dimensions.window.width / 7,
    width: Dimensions.window.width / 1.3,
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
    color: Colors.darkGray,
    fontFamily: "euphemia",
    letterSpacing: 0.5,
    fontSize: 24,
  },
  level: {
    textAlign: "center",
    top: "-40%",
    textTransform: "uppercase",
    color: "#ffffff",
    fontFamily: "euphemia",
    letterSpacing: 0.5,
    fontSize: 30,
  },
});