
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,

   Text,
   TextInput,
   Picker,
   Alert,
   Button,
   Modal,
   Image,
   TouchableOpacity,
   AsyncStorage, 
 } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import App from './Login';//Login screen
// Evaluations screens
import Home from './aloscreens/Home'
import List from './aloscreens/List';
import MyEvo from './aloscreens/MyEvo';
//other screens
import Profile from './others/Profile';
import Settings from './others/Settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

 function HomeEvaluation() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home-sharp' : 'home-outline';
        } else if (route.name === 'List') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }else if (route.name === 'My Evolution'){
          iconName = focused ? 'analytics-sharp' : 'analytics-outline';
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#051063',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: '#ECE1F5',
        borderColor:'black',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderLeftWidth: 0.2,
        borderRightWidth: 0.2,
      }
    })}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="List" 
        component={List}  
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="My Evolution" 
        component={MyEvo}  
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
function Demarrage() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={App}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeEvaluation"
          component={HomeEvaluation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Demarrage;