import React from "react";
import { View, StyleSheet} from "react-native";

export default function SkillBar({
  contbackground, 
  barbackground,
  highlightColor,
  width,
  percent,
  height,
}) {

  // update percent filled dynamically
  const updatePercent = () => {
    var p = parseInt(percent);
    var newp = p * 0.84;
    newp = newp.toString() + "%";
    return newp;
  }

  return (
    <View style={[styles.container, {width: width, height: height, backgroundColor: barbackground,}]}>
      <View style={[styles.highlight, {width: updatePercent(), marginLeft: 10, backgroundColor: highlightColor,}]} />
      <View style={[styles.all, {width: percent, backgroundColor: contbackground,}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 40,
  },
  all: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    height: "100%",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  highlight: {
    height: "35%",
    top: 5,
    position: "absolute",
    opacity: 0.5,
    zIndex: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  }
});
