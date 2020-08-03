import React, { useState } from 'react';
import { registerRootComponent } from 'expo';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Nav from "./Nav";


const _loadResourcesAsync = () => {
    return Font.loadAsync({
      "euphemia": require("./assets/fonts/EuphemiaUCAS.ttf"),
      "light": require("./assets/fonts/IBMPlexMono-Light.ttf"),
      "regular": require("./assets/fonts/IBMPlexMono-Regular.ttf"),
      "thin": require("./assets/fonts/IBMPlexMono-Thin.ttf"),
      "seahorse": require("./assets/icomoon/icomoon.ttf"),
    })
};


export default function App(){
  console.disableYellowBox = true;
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onFinish={() => setDataLoaded(true)}
      />
    );
  } 
  return <Nav />
    
}

registerRootComponent(App);
