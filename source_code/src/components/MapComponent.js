import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity  } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import Radar from 'react-native-radar';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { getLocations } from "./getLocations";
import { mapMarkers } from "./MapMarkers";
import geolocation from '@react-native-community/geolocation'; 
import { tsConstructorType } from "@babel/types";
import Icon from '../assets/icomoon/iconConfig';

// Custom Map Styling 
var MapStyle = 
[
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 13
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#144b53"
            },
            {
                "lightness": 14
            },
            {
                "weight": 1.4
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#08304b"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0c4152"
            },
            {
                "lightness": 5
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b434f"
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b3d51"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "color": "#146474"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#021019"
            }
        ]
    }
]

const latitudeDelta = 0.015; 
const longitudeDelta = 0.0121;

// Request first time if no permission
Radar.requestPermissions(true); 

export default function MapComponent({name, category, toggle, type, locationFound, currLoc, setclosestLoc}) {
    // Hard-Coded Test Coords for Checking if Place Check-in Works 
        // Uncomment in 'isUserThere', 'handleClass', 'MapView' (under return()) to get switch it from working dynamically to static

    // Test coords for demo (needed because neither of us went out during coronavirus quarantine)
    const test_user_coords = {
        latitude:  47.6063082,
        longitude: -122.332823,
    }
    const test_marker_coords = `${test_user_coords.latitude},${test_user_coords.longitude}`

    // Initial Lat/Long & Marker Coordinates 
    const [loaded, setLoaded] = useState(false); 
    const [region, setRegion] = useState(null);
    const [coords, setCoords] = useState(null);
    const [marker_coords, setMarkerCoords] = useState(null); 
    const getInitialPosition = () => {
      Radar.ipGeocode().then((result) => {
        let region_start = {
          latitude: result.address.latitude,
          longitude: result.address.longitude, 
          latitudeDelta: latitudeDelta, 
          longitudeDelta: longitudeDelta,
        }
        let coords_start = {
          latitude: result.address.latitude, 
          longitude: result.address.longitude, 
        }
        setRegion(region_start); 
        setCoords(coords_start); 
        setMarkerCoords(`${coords_start.latitude},${coords_start.longitude}`)
        setLoaded(true); 
      });
    }

    // Tracks if user is at place 
    const isUserThere = (marker_data) => {
        for (let i = 0; i < marker_data.length; i++) {
            let temp_long = marker_data[0].location.coordinates[0];
            let temp_lat = marker_data[0].location.coordinates[1];
            // let long_diff = Math.abs(temp_long - coords.longitude)
            // let lat_diff = Math.abs(temp_lat - coords.latitude)
            let long_diff = Math.abs(temp_long - test_user_coords.longitude)
            let lat_diff = Math.abs(temp_lat - test_user_coords.latitude)
            if (long_diff <= 0.0001 && lat_diff <= 0.0001) {
                locationFound(true); 
                let temp_coords = {
                    latitude: marker_data[0].location.coordinates[1],
                    longitude: marker_data[1].location.coordinates[0]
                }
                // Use reverse geocoding to get the name and address of the location the user is at 
                Radar.reverseGeocode(temp_coords)
                .then((result) => {
                    let addresses = result.addresses[0]
                    let formAddress = addresses.formattedAddress 
                    let currLocation = {
                        'name':marker_data[0].name, 
                        'address':formAddress,
                    }
                    currLoc(currLocation)
                })
            } 
        }
    }

    // Retrieves nearby locations and closest 3 based on params 
    const handleCase = () => {
        if (!toggle || category == null) {
            // return getLocations(`https://api.radar.io/v1/search/places?radius=3000&near=${marker_coords}`);
            return getLocations(`https://api.radar.io/v1/search/places?radius=3000&near=${test_marker_coords}`);
        } else {
            // return getLocations(`https://api.radar.io/v1/search/places?radius=3000&near=${marker_coords}&categories=${category}`);
            return getLocations(`https://api.radar.io/v1/search/places?radius=3000&near=${test_marker_coords}&categories=${category}`);
        }
    }
    const {marker_data, markers, closestLoc} = handleCase();

    // There is data (aka user has selected a category)
    if (markers) {
        // Check if user is there
        isUserThere(marker_data)

        // Use reverse geocoding for each of the 3 closest locations to display name and address instead of long/lat -- the repeated .then() to wait for promises is likely not a great solution 
        let first_coords = closestLoc[1].coords
        Radar.reverseGeocode(first_coords)
        .then((result) => {
            let addresses = result.addresses[0]
            let formAddress = addresses.formattedAddress 
            closestLoc[1]['formAddress'] = formAddress
        })
        .then(() => {
            let second_coords = closestLoc[2].coords
            Radar.reverseGeocode(second_coords)
            .then((result) => {
                let addresses = result.addresses[0]
                let formAddress = addresses.formattedAddress 
                closestLoc[2]['formAddress'] = formAddress
            })
            .then(() => {
                let third_coords = closestLoc[3].coords
                Radar.reverseGeocode(third_coords)
                .then((result) => {
                    let addresses = result.addresses[0]
                    let formAddress = addresses.formattedAddress 
                    closestLoc[3]['formAddress'] = formAddress
                    setclosestLoc(closestLoc) 
                })
            })
        })
    }

    // Set the marker icon 
    const handleName = () => {
        if (type == "Fish") {
            return <MaterialCommunityIcons name="fish" color={Colors.seaBlue} size={33} />  
        } else if (type == "Turtle") {
            return <MaterialCommunityIcons name="turtle" color={Colors.seaBlue} size={33} />      
        } else {
            return <Icon name="seahorse" color={Colors.seaBlue} size={32}/>
        }
    }

    // Track changing user position -- if user starts moving, updates the map and locations 
    geolocation.watchPosition(() => {
      Radar.ipGeocode().then((result) => {
        var new_region = {
          latitude: result.address.latitude, 
          longitude: result.address.longitude, 
          latitudeDelta: latitudeDelta, 
          longitudeDelta: longitudeDelta, 
        }
        var new_coords = {
          latitude: result.address.latitude, 
          longitude: result.address.longitude, 
        }
        setRegion(new_region);
        setCoords(new_coords); 
      });
    });

    // Waits for map to load 
    if (loaded) {
      return (
        <SafeAreaView style={[styles.container, { height: 750 }]}>
            {/* Get google maps view with styling */}
          <MapView
            provider={PROVIDER_GOOGLE}
            customMapStyle={MapStyle}
            style={styles.map}
            showsUserLocation={true}
            region={region}
          >
            {/* <Marker
              coordinate={coords}
              title={name}
              pinColor="#000"
            > */}
            <Marker
              coordinate={test_user_coords}
              title={name}
              pinColor="#000"
            >
                <View style={[styles.marker, {transform: [{rotate: "45deg"}]}]}>
                    <View style={{transform: [{rotate: "315deg"}]}}>
                        {handleName()}
                    </View>
                </View>
            </Marker>
            {/* Set the markers here with MapMarkers component if 'markers' data is available */}
            {markers ? mapMarkers(marker_data, category) : null}
          </MapView>
        </SafeAreaView>
      );
    } else {
      getInitialPosition(); 
      return (
        <SafeAreaView style={[styles.container, { height: 750 }]}>
            <View style={styles.loading}>
          <Text style={styles.loadingText}>Loading...</Text>
            </View>
        </SafeAreaView>
      );
    }
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  marker: {
    height: 45,
    width: 45,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 1,
    paddingVertical: 5,
    borderWidth: 2,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: Colors.paleBlue,
    borderColor: Colors.seaBlue,
  },
  loading: {
      backgroundColor: Colors.seaBlue,
      justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  loadingText: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#ffffff",
    fontFamily: "euphemia",
    fontSize: 30,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
