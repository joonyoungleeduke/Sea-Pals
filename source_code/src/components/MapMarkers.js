import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import Colors from "../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {Marker} from "react-native-maps"; 

// Return the map markers if marker data is available 
export const mapMarkers = (marker_data, category) => {

    const handleCategory = () => {
        if (category == "outdoor-places") {
            return <MaterialCommunityIcons name="pine-tree" color={Colors.seaBlue} size={28} />
        } else if (category == "arts-entertainment") {
            return <MaterialCommunityIcons name="city" color={Colors.seaBlue} size={28} />
        } else {
            return <MaterialCommunityIcons name="silverware-fork-knife" color={Colors.seaBlue} size={28} />
        }
    } 
    return marker_data.map((marker) => 
    <Marker
        key={marker.id}
        coordinate={{ latitude: marker.location.coordinates[1], longitude: marker.location.coordinates[0] }}
        title={marker.name}
    >

        <View style={[styles.marker, {transform: [{rotate: "45deg"}]}]}>
                    <View style={{transform: [{rotate: "315deg"}]}}>
                        {handleCategory()}
                    </View>
                </View>
    </Marker>)
}


const styles = StyleSheet.create({
    marker: {
      height: 40,
      width: 40,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 1,
      paddingVertical: 5,
      borderWidth: 2,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: "white",
      borderColor: Colors.seaBlue,
    },
  });
  