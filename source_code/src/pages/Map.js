import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity,  Modal, StatusBar} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapComponent from "../components/MapComponent";
import Colors from "../constants/Colors";


// MAP WILL NOT WORK -- ALL KEYS WERE REMOVED FOR PUBLIC PUBLISHING OF THE CODE 

export default function Map({route}) {
  const navigation = useNavigation();
  const {name, data, 
    percent1,
    percent2,
    percent3,
    percent4,
    levelPercent,
    level,
    type,
    page,
    component,
    personality
  } = route.params;
  const [category, setCategory] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);
  const [atLocation, setAtLocation] = useState(false); 
  const [LocationView, setLocationView] = useState(true); 

// Location Check-in
let currLocDefault = {
  'name': '...', 
  'address': null,
}
const [currLocation, setcurrLocation] = useState(currLocDefault);

// History 
const [HistoryView, setHistoryView] = useState(false);

// Radar (closest)
let closestDefault = {
  '1': {
    'name': 'Pick a category first!',
    'formAddress': null,
  }, 
  '2': {
    'name': null,
    'formAddress': null,
  },
  '3': {
    'name': null, 
    'formAddress': null,
  }
}
const [closestLocation, setclosestLocation] = useState(closestDefault);
const [ClosestView, setClosestView] = useState(false);

// Did this to reset the map view to user location
const [uniqueValue, setValue] = useState(1);

// Extra logic used so that state change refresh does not keep popping up the location modal 
var locationview; 
if (atLocation && LocationView) {
  locationview = true; 
} else {
  locationview = false; 
}

// Extra logic used so closest view does not interfere with where you are 
var closestview; 
if (ClosestView && !locationview) {
  closestview = true; 
} else {
  closestview = false; 
}

      return (
          <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <MapComponent 
                height={710} 
                name = {name}
                category={category} 
                toggle={toggle} 
                type={type} 
                locationFound={setAtLocation.bind(this)}
                currLoc={setcurrLocation.bind(this)}
                setclosestLoc={setclosestLocation.bind(this)}
                />

          {/* 'name' makes it obvious what each component here is */}

            <TouchableOpacity style={styles.info} onPress={()=> {setVisible(true)}}>
              <View style={styles.infoContainer}>
              </View>
              <MaterialCommunityIcons name="information" color={"#ffffff"} size={45} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.closest}>
              <MaterialCommunityIcons name="radar" color={Colors.seaBlue} size={30} onPress={() => {setClosestView(true)}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.navigation} onPress={() => {setValue(uniqueValue + 1)}}>
                <MaterialCommunityIcons name="navigation" color={Colors.seaBlue} size={30} />
            </TouchableOpacity>


            <TouchableOpacity style={styles.history} onPress={() => {setHistoryView(true)}}>
                <MaterialCommunityIcons name="history" color={Colors.seaBlue} size={30} />
            </TouchableOpacity>


                      {/* INFORMATION */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={visible}
            >
              <TouchableWithoutFeedback style={{zIndex: 1}} onPress={() => {setVisible(false)}}>
                <View style={styles.modalOverlay}>
                <TouchableWithoutFeedback style={{zIndex: 10, height: 200, width: 300}} onPress={() => {setVisible(true)}}>
                <View style={styles.modalView}>
                  <Text style={styles.modalTextTitleRadar}>
                  Welcome to the deep sea!
                  </Text>
                  <Text style={styles.modalTextLeft}>
                    Take your Sea Pal with you to
                      beautiful outdoor sights, 
                      entertainment venues, 
                      and delicious eateries.
                  </Text>
                  <Text style={styles.modalTextLeft}>
                    When you're near a registered location, 
                    simply press the location icon to let 
                    your Pal know!
                  </Text>
                  <Text style={styles.modalTextLeft}>
                    This is the fastest way to grow their love for you!
                  </Text>
                </View>
                </TouchableWithoutFeedback>
                </View>
              </TouchableWithoutFeedback> 
            </Modal>

                      {/* CHECKED IN */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={locationview}
            >
              <TouchableWithoutFeedback style={{zIndex: 1}} onPress={() => {setAtLocation(false), setLocationView(false)}}>
                <View style={styles.modalOverlay}>
                <TouchableWithoutFeedback style={{zIndex: 10, height: 200, width: 300}} onPress={() => {setAtLocation(true)}}>
                <View style={styles.modalView}>
                <Text style={styles.modalTextTitleRadar}>Checked-In!</Text>
                <Text style={styles.modalText}>You're at "{currLocation.name}".</Text>
                <Text style={styles.modalText}>Would you like to visit with {name}?</Text>
                <View style={styles.checkBtn}>
                  <TouchableOpacity>
                    <Button onPress={() => {setLocationView(false),navigation.navigate('chatBot')}}
                      title="Yes"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Button onPress={() => setLocationView(false)}
                      title="No"
                    />
                  </TouchableOpacity>
                </View>
                </View>
                </TouchableWithoutFeedback>
                </View>
              </TouchableWithoutFeedback> 
            </Modal>

                      {/* RADAR */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={closestview}
            >
              <TouchableWithoutFeedback style={{zIndex: 1}} onPress={() => {setClosestView(false)}}>
                <View style={styles.modalOverlay}>
                <TouchableWithoutFeedback style={{zIndex: 10, height: 200, width: 300}} onPress={() => {setClosestView(true)}}>
                <View style={styles.modalView}>
                  <Text style={styles.modalTextTitleRadar}>
                    {category}
                    </Text>
                  <Text style={styles.modalText}>{closestLocation[1].name}</Text>
                  <Text style={styles.modalTextDesc}>{closestLocation[1].formAddress}</Text>
                  <Text style={styles.modalText}>{closestLocation[2].name}</Text>
                  <Text style={styles.modalTextDesc}>{closestLocation[2].formAddress}</Text>
                  <Text style={styles.modalText}>{closestLocation[3].name}</Text>
                  <Text style={styles.modalTextDesc}>{closestLocation[3].formAddress}</Text>
                </View>
                </TouchableWithoutFeedback>
                </View>
              </TouchableWithoutFeedback> 
            </Modal>

                      {/* HISTORY */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={HistoryView}
            >
              <TouchableWithoutFeedback style={{zIndex: 1}} onPress={() => {setHistoryView(false)}}>
                <View style={styles.modalOverlay}>
                <TouchableWithoutFeedback style={{zIndex: 10, height: 200, width: 300}} onPress={() => {setHistoryView(true)}}>
                <View style={styles.modalView}>
                  <Text style={styles.modalTextTitleRadar}>
                    PAST WEEK
                  </Text>
                  <Text style={styles.modalText}>
                    Space Needle Tower 07/18/2020
                  </Text>
                  <Text style={styles.modalText}>
                    Pike Place Market 07/19/2020
                  </Text>
                  <Text style={styles.modalText}>
                    Chihuly Gardens 07/20/2020
                  </Text>
                </View>
                </TouchableWithoutFeedback>
                </View>
              </TouchableWithoutFeedback> 
            </Modal>

                        {/* HOME BUTTON */}
            <TouchableOpacity style={[styles.button, styles.home]} onPress={() => {navigation.navigate("Home", {data: data})}}>
              <MaterialCommunityIcons name="home" color={Colors.seaBlue} size={42} />
            </TouchableOpacity>

                        {/* PLACE CATEGORY BUTTONS */}
            <View style={styles.squareRow}>
              <TouchableOpacity style={[styles.square]} onPress={() => {
                if (category == "outdoor-places" && toggle) {
                  setToggle(toggle => !toggle);
                } else if (!toggle) {
                  setToggle(toggle => !toggle);
                  setLocationView(true); 
                } 
                setCategory("outdoor-places");
                }}>
                <MaterialCommunityIcons name="pine-tree" color={Colors.seaBlue} size={42} />

              </TouchableOpacity>
              
              <TouchableOpacity style={[styles.square]} onPress={()=> {
                if (category == "arts-entertainment" && toggle) {
                  setToggle(toggle => !toggle);
                } else if (!toggle) {
                  setToggle(toggle => !toggle);
                  setLocationView(true);
                } 
                setCategory("arts-entertainment");

                }}>
                <MaterialCommunityIcons name="city" color={Colors.seaBlue} size={42} />

              </TouchableOpacity>

              <TouchableOpacity style={[styles.square]} onPress={()=> {
                if (category == "food-beverage" && toggle) {
                  setToggle(toggle => !toggle);
                } else if (!toggle) {
                  setToggle(toggle => !toggle);
                  setLocationView(true);
                } 
                setCategory("food-beverage");
                }}>
                <MaterialCommunityIcons name="silverware-fork-knife" color={Colors.seaBlue} size={42} />

              </TouchableOpacity>
            </View>

                        {/* CREATURE PAGE BTN */}
              <TouchableOpacity style={[styles.button, styles.user]} onPress={() => {navigation.navigate(page, {name: name, level: level, type: type, 
                data: data,
                percent1: percent1,
                percent2: percent2,
                percent3: percent3,
                percent4: percent4,
                page: page,
                component: component,
                personality: personality})}}
              >

                <MaterialCommunityIcons name="account" color={Colors.seaBlue} size={42} />

              </TouchableOpacity>
              

            <View style={styles.bottom}></View>
            
          </View>
      );
  }
  

const styles = StyleSheet.create({
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
    top: "25%",
    width: "60%",
    left: "17.3%",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
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
    backgroundColor: "#F194FF",
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
  modalTextDesc: {
    marginBottom: 15, 
    fontSize: 11, 
    textAlign: 'center', 
    fontFamily: 'euphemia', 
    letterSpacing: 0.5, 
  },
  modalTextTitle: {
    marginBottom: 10, 
    textAlign: 'justify', 
    fontFamily: 'euphemia', 
    textTransform: 'uppercase',
  },
  modalTextTitleRadar: {
    marginBottom: 10, 
    fontSize: 17, 
    textTransform: 'uppercase', 
    textAlign: 'center', 
    textTransform: 'uppercase',
  },
  modalTextLeft: {
    marginBottom: 10, 
    marginRight: 13,
    textAlign: "left", 
    fontFamily: "euphemia",
    letterSpacing: 0.5
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  level: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#ffffff",
    fontFamily: "euphemia",
    fontSize: 17,
    marginRight: 10,
    left: 3,
    top: "-3%",
    zIndex: 10,
  },
  info: {
    position: "absolute",
    top: 18,
    right: 5,
    width: 60,
    height: 60,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  infoContainer: {
    borderRadius: 50, 
    backgroundColor: Colors.seaBlue, 
    width: 30, 
    height: 30,
    position: 'absolute',
  },
  checkBtn: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closest: {
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: "white",
    borderRadius: 50,
    position: "absolute", 
    width: 40, 
    height: 40,
    left: "6%",
    bottom: "15%",
  },
  navigation: {
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: "white",
    borderRadius: 50,
    position: "absolute", 
    width: 40, 
    height: 40,
    right: "6%",
    bottom: "15%",
  },
  history: {
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: "white",
    borderRadius: 50,
    position: "absolute", 
    width: 40, 
    height: 40,
    top: 28, 
    left: 20, 
  },
  squareRow: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent:"space-evenly",
    position: "absolute",
    bottom: 29,
    zIndex: 10,
    width: 210,
  },
  square: {
    width: 55,
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  button: {
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    position: "absolute",
    bottom: 29,
    zIndex: 10,
  },
  home: {
      left: 25,
  },
  bottom:{
    position: "absolute",
    bottom: 0,
    height: 100,
    width: "100%",
    zIndex: 5,
    backgroundColor: Colors.blue,
    color: Colors.blue
  },
  user: {
      right: 25,
  },

})