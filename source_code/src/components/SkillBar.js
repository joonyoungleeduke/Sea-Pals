import React from "react";
import { View, StyleSheet} from "react-native";

// BAR version of level container 
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
    var newp = p * 0.93;
    newp = newp.toString() + "%";
    return newp;
  }

  return (
    <View style={[styles.container, {width: width, height: height, backgroundColor: barbackground,}]}>
        <View style={[styles.highlight, {width: updatePercent(), marginLeft: 7, backgroundColor: highlightColor,}]} />
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
    borderRadius: 10,
  },
  all: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  highlight: {
    height: "30%",
    top: 4,
    position: "absolute",
    opacity: 0.5,
    zIndex: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }
});
