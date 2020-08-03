import React from "react";
import { View, StyleSheet} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// SQUARE version of 'level' container 
export default function SkillSquare({
  fillColor = "#639CD9",
  backColor = "#162247",
  width,
  percent,
  height,
  icon,
}) {
  return (
      <View style={[styles.container, {width: width, height: height}]}>
          <View style={[styles.percentContainer, {backgroundColor: backColor}]}>
            <View style={[styles.percent, {height: percent, backgroundColor: fillColor}]} />
            <MaterialCommunityIcons name={icon} color="white" size={60} style={styles.icon}/>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  percentContainer: {
    width: "95%",
    height: "95%", 
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: 'flex-end', 
    flexDirection: 'column',
  },
  percent: {
    width: "100%",
    borderRadius: 10,
    zIndex: 1, 
  },
  icon: {
    zIndex: 5,
    position: "absolute",
    left: 5,
    bottom: 2
  }
});
