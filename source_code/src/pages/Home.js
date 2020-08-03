import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Dimensions from "../constants/Dimensions";
import Colors from "../constants/Colors";
import Fish from "../components/Fish";
import Turtle from "../components/Turtle";
import Seahorse from "../components/Seahorse";

export default function Home(){
  const navigation = useNavigation();
  const [display, setDisplay] = useState(true);
  const [characters, setCharacters] = useState(
    ["Jacky", "Dory", "Mindy"]);

  // data set of characters info
  const [data, setData] = useState([
    {
      name: characters[0],
      percent1: "77%",
      percent2: "20%",
      percent3: "54%",
      percent4: "88%",
      level: 49,
      type: "Turtle",
      page: "TurtlePage",
      component: <Turtle top="-4%"/>,
      personality: "Social",
    },
    {
      name: characters[1],
      level: 10,
      percent1: "12%",
      percent2: "34%",
      percent3: "76%",
      percent4: "44%",
      type: "Fish",
      page: "FishPage",
      component: <Fish />,
      personality: "Kind",
    },
    {
      name: characters[2],
      percent1: "65%",
      percent2: "8%",
      percent3: "32%",
      percent4: "58%",
      level: 11,
      type: "Seahorse",
      page: "SeahorsePage",
      component: <Seahorse space="6%"/>,
      personality: "Athletic",
    }
  ]);

  const list = () => {
    return data.map((index) => {
      return (
        // each character button 
        <View style={styles.buttonView}>
          <TouchableOpacity
          style={[styles.button, Dimensions.button]}
          onPress={() => navigation.navigate(index.page, {name: index.name, level: index.level, type: index.type, 
            data: data,
            percent1: index.percent1,
            percent2: index.percent2,
            percent3: index.percent3,
            percent4: index.percent4,
            page: index.page,
            component: index.component,
            personality: index.personality,
          })}>
            <View style={styles.buttonContainer}>
              <View style={index.type == "Seahorse" ? styles.seahorse : styles.icon}>
                {index.component}
              </View>
              <Text style={[styles.allText, styles.text]}>
                {index.name}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  };
  
  const handleTextToggle = () => {
    if (display) {
      return (
        <View style={[styles.dailyFact, Dimensions.button]}>
          <Text style={[styles.allText, styles.factInfo]}>
          About 1,000 meters below the surface, at the lowest layer in the ocean,
          lie creatures great and small, living and breathing like us all.
          </Text>
        </View>
      );
    } 
    else {
      return (
        <View style={[styles.dailyFact, Dimensions.button]}>
          <Text style={[styles.allText, styles.factDonations]}>
            Your Sea Pal is real.
            The closer you grow, the more we will donate to save and preserve the deep sea. 
          </Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>

      {/* info panel toggle */}
      <View style={styles.displayRow}>
        <TouchableOpacity 
          style={[styles.tab]} 
          onPress={() => {setDisplay(true)}}
        >
          <Text style={[styles.allText, styles.tabText]}>
            Your Deep Sea
          </Text>
        </TouchableOpacity>
        <View style={{width: 3}} /> 
        <TouchableOpacity  
          style={[styles.tab]} 
          onPress={() => 
          {setDisplay(false)}}
        >
          <Text style={[styles.allText, styles.tabText]}>
            Your Help
          </Text>
        </TouchableOpacity>
      </View>
      {handleTextToggle()} 


      {/* existing sea pals display */}
      <View style={styles.buttonView}>
        {list()}
      </View>
      
      {/* make new creature */}
      <TouchableOpacity
          style={[styles.addButton, Dimensions.button]}
          onPress={() => navigation.navigate("NewCreature", {data: data})}
      >
        <Text style={[styles.allText, styles.addText]}>
          NEW CREATURE
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.seaBlue,
  },
  buttonView: {
    top: -15,
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    maxHeight: Dimensions.window.height/2.3,
  },
  button: {
    backgroundColor: "#ffffff",
    padding: 2,
  },
  icon: {
    paddingRight: 25,
    paddingLeft: 15,
    height: 160,
    width: 120,
    top: 21,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginVertical: 5,
    height: Dimensions.window.width / 5,
    width: Dimensions.window.width / 1.3,
  },
  allText: {
    textAlign: "center",
    textTransform: "uppercase",
    color: Colors.darkGray,
    fontFamily: "euphemia",
  },
  text: {
    top: -4,
    left: 10,
    letterSpacing: 0.5,
    fontSize: 24,
  },
  seahorse: {
    left: -25,
    height: 130,
    width: 120,
    top: 20,
  },
  dailyFact: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    top: -83,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 100,
    width: 318,
  },
  factInfo:{
    fontSize: 13,
    paddingLeft: 18,
    paddingRight: 18,
  },
  factDonations:{
    fontSize: 13,
    paddingLeft: 18,
    paddingRight: 18,
  },
  tabText: {
    fontSize: 15,
    padding: 0.5,
  },
  addButton: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    bottom: -60,
    height: Dimensions.window.width / 7.6,
    width: Dimensions.window.width / 1.3,
  },
  addText: {
    letterSpacing: 0.5,
    fontSize: 22
  },
  displayRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    top: "-20%",
  },
  tab: {
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#ffffff",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    width: 157.5,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    backgroundColor: Colors.lightBlue,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderColor: "#fff"
  },
});