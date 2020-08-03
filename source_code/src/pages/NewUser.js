import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View, Modal, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
import Turtle from "../components/Turtle";
import Fish from "../components/Fish";
import Seahorse from "../components/Seahorse";
import SkillSquare from "../components/SkillSquare";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// renders animal depending on character
const whichAnimal = (type) => {
  if (type == "Turtle") {
    return <Turtle />
  } else if (type == "Seahorse") {
    return <Seahorse />
  } else {
    return <Fish top="5%"/>
  }
}

export default function NewUser({route}) {
  const navigation = useNavigation();
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const {name, data, 
    percent1, 
    percent2,
    percent3,
    percent4,
    level,
    type,
    page,
    component,
    personality} = route.params;
  
    return (
    <SafeAreaView style={styles.container1}>
      {/* profile button */}
      <View style={styles.lvlContainer}>
        <MaterialCommunityIcons name="fish" color="white" size={60}/>
      </View>

      {/* map button */}
      <TouchableOpacity 
        style={styles.compassBtn}
        onPress={() => navigation.navigate("Map", {
          name: name, 
          level: level, 
          type: type, 
          data: data,
          percent1: percent1,
          percent2: percent2,
          percent3: percent3,
          percent4: percent4,
          page: page,
          component: component,
          personality: personality
        })}
      >
        <View style={styles.lvlContainer}>
          <MaterialCommunityIcons name="compass-outline" color="white" size={60}/>
        </View>
      </TouchableOpacity>

      {/* creature display */}
      {whichAnimal(type)}
      <Text style={styles.age}>1 Day Old</Text>

      {/* skills section */}
      <View style={styles.largebtnContainer}>

        {/* happiness button and modal */}
        <TouchableOpacity onPress={()=> {setVisible1(true)}}>
          <SkillSquare width={75} height={75} percent={percent1} icon="emoticon">
          </SkillSquare> 
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={visible1}
        >
        <TouchableWithoutFeedback style={{zIndex: 1}} onPress={() => {setVisible1(false)}}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback style={{zIndex: 10, height: 200, width: 300}} onPress={() => {setVisible1(true)}}>
              <View style={styles.modalView}>
                <Text style={[styles.modalText, {fontSize: 22}]}>Happiness</Text>
                <Text style={styles.modalText}>{name} needs frequent attention to remain happy!</Text>
                <TouchableOpacity
                  style={styles.goButton}
                  onPress={() => {
                    setVisible1(false);
                    navigation.navigate("Happiness", {
                      data: data, 
                      name: "Love Me", 
                      animalName: name, 
                      percent1: percent1,
                      percent2: percent2,
                      percent3: percent3,
                      percent4: percent4,
                      level: level,
                      type: type,
                      page: page,
                      component: component,
                      personality: personality})
                  }}
                >
                  <Text style={styles.text}>
                    PLAY
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback> 
      </Modal>

      {/* exercise button and modal */}
      <TouchableOpacity onPress={()=> {setVisible2(true)}}>
        <SkillSquare width={75} height={75} percent={percent2} icon="waves">
        </SkillSquare> 
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible2}
      >
        <TouchableWithoutFeedback style={{zIndex: 1}} onPress={() => {setVisible2(false)}}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback style={{zIndex: 10, height: 200, width: 300}} onPress={() => {setVisible2(true)}}>
              <View style={styles.modalView}>
                <Text style={[styles.modalText, {fontSize: 22}]}>Exercise</Text>
                <Text style={styles.modalText}>Exercise helps {name} stay in shape!</Text>
                <TouchableOpacity
                  style={styles.goButton}
                  onPress={() => {
                    setVisible2(false);
                    navigation.navigate("Exercise", {
                      data: data, 
                      animalName: name, 
                      name: "Play Time",
                      level: level,
                      percent1: percent1,
                      percent2: percent2,
                      percent3: percent3,
                      percent4: percent4,
                      type: type,
                      page: page,
                      component: component,
                      personality: personality
                    })
                  }}
                >
                  <Text style={styles.text}>
                    PLAY
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback> 
      </Modal>


      {/* hunger button and modal */}
      <TouchableOpacity onPress={()=> {setVisible3(true)}}>
        <SkillSquare width={75} height={75} percent={percent3} icon="food-fork-drink">
        </SkillSquare> 
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible3}
      >
        <TouchableWithoutFeedback style={{zIndex: 1}} onPress={() => {setVisible3(false)}}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback style={{zIndex: 10, height: 200, width: 300}} onPress={() => {setVisible3(true)}}>
              <View style={styles.modalView}>
                <Text style={[styles.modalText, {fontSize: 22}]}>Hunger</Text>
                <Text style={styles.modalText}>{name} needs food too!</Text>
                <TouchableOpacity
                  style={styles.goButton}
                  onPress={() => {
                    setVisible3(false);
                    navigation.navigate("Hunger", {
                      data: data, 
                      name: "Nom Nom", 
                      animalName: name, 
                      percent1: percent1,
                      percent2: percent2,
                      percent3: percent3,
                      percent4: percent4,
                      level: level,
                      type: type,
                      page: page,
                      component: component,
                      personality: personality
                    })
                  }}
                >
                  <Text style={styles.text}>
                    PLAY
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback> 
      </Modal>


      {/* sleep button and modal */}
      <TouchableOpacity onPress={()=> {setVisible4(true)}}>
        <SkillSquare width={75} height={75} percent={percent4} icon="brightness-3">
        </SkillSquare> 
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible4}
      >
        <TouchableWithoutFeedback style={{zIndex: 1}} onPress={() => {setVisible4(false)}}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback style={{zIndex: 10, height: 200, width: 300}} onPress={() => {setVisible4(true)}}>
              <View style={styles.modalView}>
                <Text style={[styles.modalText, {fontSize: 22}]}>Sleep</Text>
                <Text style={styles.modalText}>Plenty of sleep keeps {name} in a good mood!</Text>
                <TouchableOpacity
                  style={styles.goButton}
                  onPress={() => {
                    setVisible4(false);
                    navigation.navigate("Sleep", {
                      data: data, 
                      name: "Sleepy Time", 
                      animalName: name, 
                      percent1: percent1,
                      percent2: percent2,
                      percent3: percent3,
                      percent4: percent4,
                      level: level,
                      type: type,
                      page: page,
                      component: component,
                      personality: personality
                    })
                  }}
                >
                  <Text style={styles.text}>
                    PLAY
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback> 
      </Modal>
    </View>
  </SafeAreaView>
  );
}
  
  const styles = StyleSheet.create({
  compassBtn: {
    width: 75, 
    height: 75,
    top: "11%",
    left: "38%",
    zIndex: 100,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightPurple,
  },
  age: {
    textAlign: "center",
    top: "-30%",
  textTransform: "uppercase",
  color: "#ffffff",
  fontFamily: "euphemia",
  letterSpacing: 0.5,
  fontSize: 30,
  },
  square: {
    width: 100, 
    height: 100, 
  },
largebtnContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: Dimensions.window.width / 4,
  width: Dimensions.window.width / 1.2,
  bottom: "40%",
},
lvlSuperContainer: {
  alignItems: "center",
  justifyContent: "center",
  width: 75, 
  height: 75,
  borderRadius: 50, 
  backgroundColor: "white",
  top: "22%",
  right: "35%"
},
lvlContainer: {
  width: 75, 
  height: 75,
  borderRadius: 50, 
  backgroundColor: "#412543",
  alignItems: "center",
  justifyContent: "center",
  top: "23%",
  right: "32%"
},
lvlText: {
  color: "white",
  textTransform: "uppercase", 
  fontFamily: "euphemia",
  fontSize: 35,
},
buttonC: {
  alignItems: "center",
  justifyContent: "center",
  height: Dimensions.window.width / 10,
  width: Dimensions.window.width / 1.3,
  top: "-25%",
},
goButton: {
  height: 40,
  width: 120,
  borderRadius: 20,
  textAlign: "center",
  justifyContent: "center",
  backgroundColor: Colors.seaBlue,
},
text: {
  textAlign: "center",
  textTransform: "uppercase",
  color: "#fff",
  fontFamily: "euphemia",
  letterSpacing: 0.5,
  fontSize: 22,
},
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      height: 100,
      width: 100,
    },
    modalView: {
      margin: 15,
      top: "40%",
      width: "70%",
      left: "12.3%",
      justifyContent: "center",
      backgroundColor: "white",
      borderRadius: 25,
      padding: 18,
      alignItems: "center",
      shadowColor: "#fff",
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowOpacity: 0.4,
      shadowRadius: 2,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#412543",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontFamily: "euphemia",
      textAlign: "center",
      letterSpacing: 0.5
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontFamily: "euphemia",
      letterSpacing: 0.5
    },

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
  color: "#000000",
  fontFamily: "euphemia",
  letterSpacing: 0.5,
  top: "-30%",
  fontSize: 24,
},
});