import React from 'react';
import {StyleSheet,View, TouchableOpacity} from 'react-native';
import { useNavigation, CommonActions  } from "@react-navigation/native";
import Colors from "../constants/Colors";
import MainGame from "../swim/MainGame";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Exercise({route}) {
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
    var p = percent2;
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
      <View style={styles.game}>
        {/*  render game */}
        <MainGame />
      </View>
      
        <TouchableOpacity 
        style={styles.compassBtn}
        onPress={() => 
          
          navigation.dispatch(
            CommonActions.navigate({
              name: page,
              params: {
                name: animalName, level: level, type: type, 
                data: data,
                percent1: percent1,
                percent2: updatePercent(),
                percent3: percent3,
                percent4: percent4,
                page: page,
                component: component,
                personality: personality
              },
            })
          )
        }>
          <View style={styles.lvlContainer}>
            <MaterialCommunityIcons name="chevron-left" color={Colors.seaBlue} size={35} />
          </View>
        </TouchableOpacity>
      </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  game: {
    height: "100%",
    width: "100%",
    top: "-4%"
  },
  compassBtn: {
    width: 75, 
    height: 75,
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 100,
  },
lvlContainer: {
    width: 50, 
    height: 50,
    borderRadius: 50, 
    margin: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});