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
import Users from './screens/users'

const Stack = createStackNavigator();
// const Top = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'animales') {
              iconName = focused ? 'pets' : 'snippet-folder';
            } else if (route.name === 'ALimentos') {
              iconName = focused ? 'pets' : 'snippet-folder';
            } else if (route.name === 'Practicas') {
              iconName = focused ? 'pets' : 'snippet-folder';
            } else if (route.name === 'Functions') {
              iconName = focused ? 'pets' : 'snippet-folder';
            }

            return <MaterialIcons name={iconName} size={24} color="black" />
          },
          tabBarActiveTintColod: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}

      >
        <Tab.Screen name="Animales" component={Login} />
        <Tab.Screen name="Alimentos" component={Users} />
        {/*<Tab.Screen name="Practicas" component={AnimationScreen} />
          <Tab.Screen name="Functions" component={InfoScreen} />*/}
      </Tab.Navigator>
      {/* <Stack.Navigator headerMode="none">
        <Stack.Screen name="Listas" component={Login} />
        </Stack.Navigator>*/}
    </NavigationContainer>
  );
}

