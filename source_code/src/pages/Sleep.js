// incomplete screen 

import React from 'react';
import {StyleSheet,View, TouchableOpacity, Text} from 'react-native';
import { useNavigation, CommonActions  } from "@react-navigation/native";

export default function Sleep({route}) {
  const navigation = useNavigation();
  const {name, animalName, data, 
    percent1,
    percent2,
    percent3,
    percent4,
    level,
    type,
    page,
    component,
    personality} = route.params;
  
  // calculate new increased percent 
  const updatePercent = () => {
    var p = percent4;
    var newp = parseInt(p) + 40;
    if (newp > 100) {
        newp = "100%";
    } else {
        newp = newp.toString() + "%";
    }
    return newp;
  }

  return (
    <View style={styles.container}>
        <Text>Nap Time</Text>
        <TouchableOpacity 
        style={styles.backBtn}
        onPress={() => 
          
          navigation.dispatch(
            CommonActions.navigate({
              name: page,
              params: {
                name: animalName, level: level, type: type, 
                data: data,
                percent1: percent1,
                percent2: percent2,
                percent3: percent3,
                percent4: updatePercent(),
                page: page,
                component: component,
                personality: personality
              },
            })
          )
        }>
        </TouchableOpacity>
      </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },   
  backBtn: {
    width: 75, 
    height: 75,
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 100,
  },
});