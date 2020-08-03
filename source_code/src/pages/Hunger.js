import React, {useState, useRef, useCallback, useMemo} from 'react';
import {PanResponder,
    Animated, StyleSheet, Text, Dimensions, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation, CommonActions } from "@react-navigation/native";
import Colors from "../constants/Colors";
import Turtle from "../components/Turtle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Seahorse from "../components/Seahorse";
import Fish from "../components/Fish";
import FatSkillBar from "../components/FatSkillBar";

// create animated food items
const Shrimp = Animated.createAnimatedComponent(Image);
const Seaweed = Animated.createAnimatedComponent(Image);
const Fishy = Animated.createAnimatedComponent(Image);

export default function Hunger({route}) {
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
  
  const dropZoneValues = useRef(null);
  const pan1 = useRef(new Animated.ValueXY());
  const pan2 = useRef(new Animated.ValueXY());
  const pan3 = useRef(new Animated.ValueXY());
  const [thisPercent, setThisPercent] = useState(percent3);
  
  // renders animal depending on character
  const handleAnimal = () => {
    if (type == "Fish") {
      return <Fish />  
    } else if (type == "Turtle") {
      return (
        <Turtle top="18%" /> 
      );    
    } else {
      return <Seahorse />
    }
  }

  // checks if dropped on animal
  const isDropZone = useCallback((gesture) => {
    const dz = dropZoneValues.current;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }, []);

  // updates percent
  const onMove = useCallback((_, gesture) => {
    if (isDropZone(gesture)) updatePercent();
  }, [isDropZone]);

  const setDropZoneValues = useCallback((event) => {
    dropZoneValues.current = event.nativeEvent.layout;
  });

  // listener for food item movement
  const panResponder1 = useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderMove: Animated.event([null, {
      dx  : pan1.current.x,
      dy  : pan1.current.y
    }], {
      listener: onMove
    }),
    onPanResponderRelease: (e, gesture) => {
        Animated.spring(
          pan1.current,
          {toValue:{x: 0, y: 0}}
        ).start();
    }
  }), []);

  const panResponder2 = useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderMove: Animated.event([null, {
      dx  : pan2.current.x,
      dy  : pan2.current.y
    }], {
      listener: onMove
    }),
    onPanResponderRelease: (e, gesture) => {
        Animated.spring(
          pan2.current,
          {toValue:{x: 0, y: 0}}
        ).start();
    }
  }), []);

  const panResponder3 = useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderMove: Animated.event([null, {
      dx  : pan3.current.x,
      dy  : pan3.current.y
    }], {
      listener: onMove
    }),
    onPanResponderRelease: (e, gesture) => {
        Animated.spring(
          pan3.current,
          {toValue:{x: 0, y: 0}}
        ).start();
    }
  }), []);

  // calculate new percent
  const updatePercent = () => {
    var p = thisPercent;
    var newp = parseInt(p) + 20;
    if (newp > 100) {
        newp = "100%";
    } else {
        newp = newp.toString() + "%";
    }
    setTimeout(()=>{setThisPercent(newp);}, 800);

  }

  return (
    <View style={styles.container} onLayout={setDropZoneValues}>
      <View style={styles.barContainer}>
        <FatSkillBar barbackground="#dedede" contbackground='#70db70' highlightColor="#adebad" height={35} width={260} percent={thisPercent} />
        <Text style={styles.percent}>{thisPercent}</Text>
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
              percent2: percent2,
              percent3: thisPercent,
              percent4: percent4,
              page: page,
              component: component,
              personality: personality
              },
            })
          )}>
        <View style={styles.lvlContainer}>
          <MaterialCommunityIcons name="chevron-left" color={"#fff"} size={35} />
        </View>
      </TouchableOpacity>
      <View style={styles.animal}>
      {handleAnimal()}
      </View>
      <View style={styles.items}>
        <Fishy {...panResponder1.panHandlers} source={require('../assets/fish.png')} style={[pan1.current.getLayout(), styles.fish]}/>
        <Shrimp {...panResponder2.panHandlers} source={require('../assets/shrimp.png')} style={[pan2.current.getLayout(), styles.shrimp]}/>
        <Seaweed {...panResponder3.panHandlers} source={require('../assets/seaweed.png')} style={[pan3.current.getLayout(), styles.seaweed]}/>
      </View> 
    </View>
  );
}
  
let Window = Dimensions.get('window');

const styles = StyleSheet.create({
  items: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: Window.width - 200,
    top: "-40%",
  },
  shrimp: {
    height: 200,
    width: 200,
  },
  seaweed: {
    height: 90,
    width: 90,
  },
  animal: {
    maxHeight: 900,
    top: "4%",
    width: 400,
  },
  fish: {
    height: 70,
    width: 70,
  },
  barContainer: {
    top: 140,
    position: "absolute",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  percent: {
    paddingTop: 3,
    fontFamily: "euphemia",
    fontSize: 26,
    color: "#fff"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blue,
    height: Window.height/2 - 200,
  },
  square: {
    width: 100, 
    height: 100, 
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
    fontFamily: "euphemia",
    letterSpacing: 0.5,
    fontSize: 22,
  },
  compassBtn: {
    width: 75, 
    height: 75,
    top: "20%",
    right: "36%",
    zIndex: 100,
  },
  lvlContainer: {
    width: 50, 
    height: 50,
    borderRadius: 50, 
    margin: 5,
    backgroundColor: "#162247",
    alignItems: "center",
    justifyContent: "center",
  },
});

