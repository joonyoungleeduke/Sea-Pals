import React, { useState, useEffect } from "react";
import Radar from 'react-native-radar';

// Grab locations from Radar API with given URL and params 
export const getLocations = url => {
    const [markerData, setMarker] = useState({marker_data:null, markers: false, closestLoc: null}); 

    useEffect(() => {
        setMarker({data: null, markers: false, closestLoc: null});
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': "ADD YOUR OWN AUTHORIZATION KEY",
            }
        })
        .then((response) => response.json())
        .then(response => {
            var marker_arr = []; 
            var closest = {}; 
            var coords; 
            var name; 
            // Gets all locations nearby 
            for (let i = 0; i < response.places.length; i++) {
                // Gets the three closest locations 
                if (i < 3) {
                    name = response.places[i].name
                    coords = {
                        longitude: response.places[i].location.coordinates[0],
                        latitude: response.places[i].location.coordinates[1], 
                    }
                    closest[i+1] = {'name': name, 'coords': coords}
                }
                marker_arr.push(response.places[i]);
            }
            setMarker({marker_data: marker_arr, markers: true, closestLoc: closest}); 
        })
    }, [url])

    return markerData; 
}