import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import IcomoonConfig from "../assets/icomoon/selection.json";
import MyIcon from "../assets/icomoon/iconConfig";
import Dimensions from "../constants/Dimensions";

export default function LongButton({
  text,
  onPress,
  color = "#000000",
  name,
  textSize,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, Dimensions.button]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <View style={styles.icon}>
          <MyIcon
            name={name}
            color={color}
            size={50}
            config={IcomoonConfig}
          />
        </View>
        <Text style={[styles.text, { fontSize: textSize }]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffffff",
    padding: 2,
  },
  icon: {
    paddingRight: 30,
    paddingLeft: 15,
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginVertical: 5,
    height: Dimensions.window.width / 5,
    width: Dimensions.window.width / 1.3,
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
    color: Colors.darkGray,
    fontFamily: "euphemia",
    letterSpacing: 0.5,
  },
});
