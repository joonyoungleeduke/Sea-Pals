import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView,  TextInput, Keyboard,
  KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Colors from "../constants/Colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Dimensions from "../constants/Dimensions";
import Seahorse from "../components/Seahorse";
import Fish from "../components/Fish";
import Turtle from "../components/Turtle";
import DropDownPicker from 'react-native-dropdown-picker';

// new creature options 
const ENTRIES1 = [
  {
    title: "Royal Blue Tang Fish",
    animal: "fish",
    page: "FishPage",
    component: <Fish />
  },
  {
    title: "Kemp's Ridley Sea Turtle",
  animal: "turtle",
    page: "TurtlePage",
    component: <Turtle left="6.5%"/>
  },
  {
    title: "Lined Seahorse",
    animal: "seahorse",
    page: "SeahorsePage",
    component: <Seahorse space="5%"/>
  },
];

export default function NewCreature({route}) {
  const {data} = route.params;
  const navigation = useNavigation();
  const [offSet, setOffSet] = useState(0);
  const [entries, setEntries] = useState([]);
  const [animalData, setAnimalData] = useState({
    animal: "seahorse",
    page: "SeahorsePage",
    component: <Seahorse space="5%"/>
  })
  const [name, setName] = useState("");
  const [personality, setPersonality] = useState(null);
  
  // set carousel entries
  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  // render carousel item
  const renderItem = () => {
    return ENTRIES1.map((item) => {
      return (
        <View style={styles.item}>
          <View style={(item.title == "Lined Seahorse") ? styles.sea : styles.size}>
            {item.component}
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )
    });
  };

  // handle character selection based on carousel
  const handleType = () => {
    if (offSet == 786) {
      return "Seahorse";
    } else if (offSet == 0){
      return "Fish";
    } else {
      return "Turtle";
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} on>
      <TouchableOpacity style={styles.down} onPress={() => navigation.pop()}>
        <MaterialCommunityIcons name="chevron-down" color={Colors.gray} size={35} />
      </TouchableOpacity>
      
      {/* character carousel */}
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        onScroll={event => { 
          setOffSet(event.nativeEvent.contentOffset.x);
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}>
          {renderItem()}
      </ScrollView>

      {/* right left arrows */}    
      <TouchableOpacity style={styles.right}>
        <MaterialCommunityIcons name="chevron-right" color={Colors.gray} size={35} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.left}>
        <MaterialCommunityIcons name="chevron-left" color={Colors.gray} size={35} />
      </TouchableOpacity>

      {/* name input*/}
      <TextInput
        placeholder="Name"
        style={styles.textInput}
        placeholderTextColor={Colors.darkGray}
        autoCorrect={false}
        value={name}
        onChangeText={(val) => {
          setName(val);
        }}
      />

      {/* personality picker */}
      <DropDownPicker
        items={[
          {label: 'Foodie', value: 'Foodie'},
          {label: 'Lazy', value: 'Lazy'},
          {label: 'Joyful', value: 'Joyful'},
          {label: 'Sporty', value: 'Sporty'},
        ]}
        defaultValue={personality}
        placeholder = "Personality"
        placeholderStyle={styles.dropDownText}
        containerStyle={styles.picker}
        style={{backgroundColor: '#ffffff'}}
        selectedLabelStyle={{
          color: Colors.darkGray,
        }}
        labelStyle={styles.dropDownText}
        dropDownStyle={{backgroundColor: '#ffffff'}}
        onChangeItem={item => setPersonality(item.value)}
      />

      {/* add new character button */}
      <TouchableOpacity
        style={[styles.addButton, Dimensions.button]}
        onPress={() => {
          Keyboard.dismiss();
          navigation.navigate("NewUser", {name: name, data: data, 
            percent: "0%",
            level: 1,
            type: handleType(),
            page: animalData.page,
            component: animalData.component,
            personality: personality})
          }}
        >
        <Text style={styles.addText}>ADD</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightBlue,
  },
  item: {
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
  }, 
  title: {
    fontFamily: "regular",
    top: "-44%",
    fontSize: 20,
  },
  size: {
    height: 600,
    width: 400,
    top: "-8%"
  },
  sea: {
    height: 500,
    width: 400,
    top: "-2%",
    marginBottom: 90,
  },
  picker1: {
    height: Dimensions.window.height / 20,
    width: Dimensions.window.width / 1.7,
    top: "-20%",
    zIndex: 100,
  },
  picker: {
    height: Dimensions.window.height / 20,
    width: Dimensions.window.width / 1.7,
    top: "-19%",
    zIndex: 2,
  },
  textInput: {
    fontFamily: "light",
    backgroundColor: "#ffffff",
    height: Dimensions.window.height / 22,
    width: Dimensions.window.width / 1.7,
    borderRadius: 25,
    paddingLeft: 18,
    borderWidth: 0.5,
    paddingVertical: 5,
    top: "-23%",
    borderColor: Colors.lightGray,
    fontSize: 17,
  },
  dropDownText: {
    fontFamily: "light",
    color: Colors.darkGray,
    fontSize: 16,
  },
  dropDownText1: {
    fontFamily: "light",
    color: Colors.darkGray,
    fontSize: 16,
    zIndex: 100,
  },
  addButton: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    top: "-10%",
    height: Dimensions.window.height / 16,
    width: Dimensions.window.width / 1.4,
  },
  addText: {
    textAlign: "center",
    textTransform: "uppercase",
    color: Colors.darkGray,
    fontFamily: "euphemia",
    letterSpacing: 0.5,
    fontSize: 22
  },
  down: {
    position: "absolute",
    left: 20,
    top: 20,
    height: 30,
    width: 30,
  },
  right: {
    position: "absolute",
    right: 25,
    top: 200,
  },
  left: {
    position: "absolute",
    left: 25,
    top: 200,
  }
});