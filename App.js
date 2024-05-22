import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Login from './screens/login';
import Users from './screens/users';
import Sumas from './screens/sumas';

const Stack = createBottomTabNavigator();

function SumasScreen() {
  return(
    <top.Navigator>
      <Top.Screen name = "Sumas" component={Sumas} />
    </top.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Sumas') {
              iconName = focused ? 'pets' : 'snippet-folder';
            } 

            return <MaterialIcons name={iconName} size={24} color="black" />
          },
          tabBarActiveTintColod: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        
        >
          <Tab.Screen name="Sumas" component={Sumas} />
          {/*<Tab.Screen name="Practicas" component={AnimationScreen} />
          <Tab.Screen name="Functions" component={InfoScreen} />*/}
      </Tab.Navigator>
      {/* <Stack.Navigator headerMode="none">
        <Stack.Screen name="Listas" component={Login} />
        </Stack.Navigator>*/}
    </NavigationContainer>
  );
}

