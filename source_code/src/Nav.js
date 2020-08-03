import * as React from "react";
import { StatusBar} from "react-native";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Colors from "./constants/Colors";
import { CardStyleInterpolators } from '@react-navigation/stack';

// screens
import Map from "./pages/Map";
import Home from "./pages/Home"
import TurtlePage from "./pages/TurtlePage";
import FishPage from "./pages/FishPage";
import SeahorsePage from "./pages/SeahorsePage";
import NewCreature from "./pages/NewCreature";
import NewUser from "./pages/NewUser";
import Profile from "./pages/Profile";
import Treasure from "./pages/Treasure";
import Login from "./pages/Login";
import Exercise from "./pages/Exercise";
import Hunger from "./pages/Hunger";
import Sleep from "./pages/Sleep";
import Happiness from "./pages/Happiness";
import MainGame from "./swim/MainGame";
import chatBot from "./pages/chatBot";

const Stack = createStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
            shadowColor: 'transparent'
          },
          headerTintColor: Colors.seaBlue,
          headerTitleStyle: { fontSize: 30, fontFamily: "regular", paddingBottom: 5, textTransform: "uppercase"},
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={
            { title: "Login",
            headerLeft: null,
            headerBackTitleVisible: false 
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={
            { title: "Home",
            headerLeft: null,
            headerBackTitleVisible: false 
          }}
        />
        <Stack.Screen
          name="TurtlePage"
          component={TurtlePage}
          options={({ route }) => ({ 
            title: route.params.name
          })}
        />
        <Stack.Screen
          name="FishPage"
          component={FishPage}
          options={({ route }) => ({ 
            title: route.params.name
          })}
        />
        <Stack.Screen
          name="SeahorsePage"
          component={SeahorsePage}
          options={({ route }) => ({ 
            title: route.params.name
          })}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={({ route }) => ({ 
            title: route.params.name + "'s World",
            headerLeft: null,
            headerBackTitleVisible: false ,
            headerStyle: {
              shadowColor: 'transparent',
              backgroundColor: Colors.blue,
            },
            headerTintColor: "white",
          })}
        />
        <Stack.Screen
          name="NewCreature"
          component={NewCreature}
          options={{ 
            title: "New Creature",
            gestureDirection: "vertical",
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
            headerLeft: null,
            headerStyle: {
              shadowColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ 
            title: "Profile",
            headerStyle: {
              shadowColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="chatBot"
          component={chatBot}
          options={{ 
            title: "Chat",
            headerStyle: {
              shadowColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="NewUser"
          component={NewUser}
          options={({ route }) => ({ 
            title: route.params.name,
            headerLeft: null,
            headerBackTitleVisible: false
          })}
        />
        <Stack.Screen
          name="Treasure"
          component={Treasure}
          options={{
            title: "Treasure"
          }}
        />
        <Stack.Screen
          name="Exercise"
          component={Exercise}
          options={({ route }) => ({ 
            title: route.params.name,
            headerLeft: null,
            headerBackTitleVisible: false
          })}
        />
        <Stack.Screen
          name="Hunger"
          component={Hunger}
          options={({ route }) => ({ 
            title: route.params.name, 
            headerLeft: null,
            headerBackTitleVisible: false
          })}
        />
        <Stack.Screen
          name="Happiness"
          component={Happiness}
          options={({ route }) => ({ 
            title: route.params.name, 
            headerLeft: null,
            headerBackTitleVisible: false
          })}
        />
        <Stack.Screen
          name="Sleep"
          component={Sleep}
          options={({ route }) => ({ 
            title: route.params.name, 
            headerLeft: null,
            headerBackTitleVisible: false
          })}
        />
        <Stack.Screen
          name="MainGame"
          component={MainGame}
          options={{
            headerShown: false,
            headerLeft: null,
            headerBackTitleVisible: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
