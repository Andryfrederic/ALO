
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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, Title, Paragraph,Avatar } from 'react-native-paper';
import App from './Login';//Login screen
// Evaluations screens
import Home from './aloscreens/Home'
import Audio from './aloscreens/Audio';
import MyEvo from './aloscreens/MyEvo';
import Video from './aloscreens/Video';
//other screens
import Profile from './others/Profile';
import Settings from './others/Settings';
import HeaderHome from './UI/HeaderHome';
import AudioRecorder from './aloscreens/AudioRecorder';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function List() {
  return (
    <TopTab.Navigator
    screenOptions={({ route }) => ({
      // tabBarIcon: ({ focused, color, size }) => {
      //   let iconName;
      //   if (route.name === 'Audio') {
      //     iconName = focused ? 'home-sharp' : 'home-outline';
      //   } else if (route.name === 'Video') {
      //     iconName = focused ? 'ios-list' : 'ios-list-outline';
      //   }
      //   // You can return any component that you like here!
      //   return <Ionicons name={iconName} size={size} color={color} />;
      // },
      tabBarActiveTintColor: 'Blue',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        // backgroundColor: '#051063',
        borderColor:'#F6F6F9',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        height:heightPercentageToDP('6%')
      }
    })}
    >
      <TopTab.Screen name="Audio" component={Audio} />
      <TopTab.Screen name="Video" component={Video} />
    </TopTab.Navigator>
  );
}
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
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: '#051063',
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
          options={{ 
            headerTitle: (props) => <HeaderHome {...props} /> , 
            headerRight: () => null,
          headerBackTitleVisible:false,
          headerBackVisible: false,
        }}
        />
        <Stack.Screen 
        name='AudioRecorder' 
        component={AudioRecorder}
        options={{ 
          headerTitle: (props) => <HeaderHome {...props} /> , 
          headerRight: () => null,
        headerBackTitleVisible:false,
        headerBackVisible: false,
      }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Demarrage;