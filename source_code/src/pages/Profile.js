import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
import Turtle from "../components/Turtle";
import Fish from "../components/Fish";
import SkillBar from "../components/SkillBar";
import Seahorse from "../components/Seahorse";
import Treasure from "./Treasure";

// renders animal depending on character
const whichAnimal = (type) => {
    if (type == "Turtle") {
        return <Turtle top="3%" left="2%"/>
    } else if (type == "Seahorse") {
        return <Seahorse />
    } else {
        return <Fish />
    }
}

export default function Profile({route}) {
    const navigation = useNavigation();
    const {name, 
        level,
        type,
        personality} = route.params;
    const [display, setDisplay] = useState(true);
    persLower = personality.toLowerCase(); 
    typeLower = type.toLowerCase();

    // toggle info box
    const handleTextToggle = (persLower, typeLower) => {
        if (display) {
            return (
                <View style={[styles.dataContainer, Dimensions.button]}>
                    <View style={styles.levelContainer}>
                        <SkillBar 
                            contbackground = "#ff4d4d" 
                            barbackground = {Colors.gray} 
                            highlightColor="#ffcccc"
                            width = "80%"
                            percent = "92%" 
                            height={15}
                        />
                        <Text style={styles.textLevel} >
                            Level 49
                        </Text>
                     </View>
                    <Text style={[styles.textdesc, styles.dataRelation]}>
                        As a {persLower} {typeLower}, {name} thrives on seeing the world 
                        and interacting with you. 
                        Your time together has created a special bond.
                    </Text>
                </View>
            );
        } 
        else {
            return (
                <View style={[styles.dataContainer, Dimensions.button]} >
                    <View style={styles.treasure} >  
                        <Treasure / >
                        <Text style={styles.money}>$150</Text>
                    </View>
                    <Text style={[styles.textdesc, styles.dataHelp]}>
                        Your love and dedication raises money to help 
                        save marine creatures like {name} in the real world.
                        Thank you for your effort. 
                    </Text>
                </View>
            );
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>
                    Thank you always for taking care of me! 
                    I'm your pal for life.
                </Text>
            </View>

            {whichAnimal(type)}

            {/* toggled info display */}
            <View style={styles.buttonContainer}>
                <View style={styles.displayRow}>
                    <TouchableOpacity 
                        style={[styles.tab]} 
                        onPress={() => {setDisplay(true)}}
                    >
                        <Text style={[styles.allText, styles.tabText]}>
                                Affection 
                        </Text>
                    </TouchableOpacity>
                    <View style={{width: 3}} /> 
                    <TouchableOpacity  
                        style={[styles.tab]} 
                        onPress={() => {setDisplay(false)}}
                    >
                        <Text style={[styles.allText, styles.tabText]}>
                            Contribution
                        </Text>
                    </TouchableOpacity>
                </View>
                {handleTextToggle(persLower, typeLower)}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.blue,
    },
    treasure: {
        flex: 1,
        top: -10,
        justifyContent: "center",
        alignItems: "center",
    },
    money: {
        textAlign: "left",
        color: Colors.darkGray,
        letterSpacing: 0.3,
        fontSize: 28,
        left: -1.3,
        top: -20,
        fontFamily: "euphemia",
    },
    levelContainer: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        top: -13,
    },
    dataContainer: {
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        top: -105,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        height: 220,
        width: 318,
    },
    dataRelation:{
        top: 10,
        fontSize: 13.21,
        paddingLeft: 18,
        paddingRight: 18,
    },
    dataHelp:{
        fontSize: 14,
        paddingLeft: 18,
        top: -23,
        paddingRight: 18,
    },
    buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 1,
    height: Dimensions.window.width / 2,
    width: Dimensions.window.width / 0.8,
    top: '-20%',
    },
    titleContainer: {
        height: 100, 
        width: 318, 
        textAlign: 'center', 
        top: "26%"
    },
    textTitle: {
        textAlign: 'center',
        color: "#fff", 
        fontFamily: 'euphemia',
        letterSpacing: 0.2,
        fontSize: 24,
    },
    textLevel: {
        textAlign: 'center',
        color: Colors.darkGray,
        fontFamily: 'euphemia',
        letterSpacing: 0.2,
        fontSize: 24,
    },
    textSign: {
        textAlign: "left",
        color: "#fff",
        fontFamily: "euphemia",
        letterSpacing: 0.5,
        top: "-45%",
        right: -60,
        fontSize: 20,
    },
    text: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "euphemia",
    letterSpacing: 0.5,
    top: "-43%",
    fontSize: 20,
    },
    textdesc: {
        textAlign: "left",
        color: Colors.darkGray,
        letterSpacing: 0.3,
        fontFamily: "euphemia",
    },
    allText: {
        textAlign: "center",
        textTransform: "uppercase",
        color: Colors.darkGray,
        fontFamily: "euphemia",
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
    tabText: {
        fontSize: 15,
        padding: 0.5,
    },
}); 