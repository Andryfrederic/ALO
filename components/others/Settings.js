

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
 class Settings extends Component {
    static navigationOptions =
    {
     headerShown: false
    };
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text style={{textAlign: 'center', marginTop: 300}}>Settings    Screen</Text>
            </View>
        );
    }
 }
 
 export default Settings;