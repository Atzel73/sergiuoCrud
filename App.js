import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Login from './screens/login';
import Users from './screens/users';

const Stack = createStackNavigator();
const Top = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Login') {
              iconName = focused ? 'pets' : 'snippet-folder';
            } else if (route.name === 'Users') {
              iconName = focused ? 'pets' : 'snippet-folder';
            }

            // Return the MaterialIcons component with the appropriate icon name, size, and color
            return <MaterialIcons name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Users" component={Users} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
