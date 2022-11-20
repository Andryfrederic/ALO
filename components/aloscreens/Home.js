

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
   Modal,
   Image,
   TouchableOpacity,
   AsyncStorage, 
 } from 'react-native';
 import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

class Home extends Component {
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
                 <View>
                        <Card 
                        
                        >
                            <Card.Content>
                                <View style={styles.header}>
                                    <TouchableOpacity  style={styles.btneye}
                                    onPress={()=>alert("drawer navigation")}>
                                        <Ionicons name={'menu-outline'} size={28} color={'#051063'}/>
                                    </TouchableOpacity>
                                    <Text style={styles.headerText}> ALO Evaluation</Text>
                                    <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Login')}>
                                        <Avatar.Icon size={24} icon="people" />
                                    </TouchableOpacity>
                                    
                                </View>
                            </Card.Content>
                        </Card>
                 </View>
                <View style={styles.container}>
                   
                    
                    <View>
                        <Text style={styles.title1}>
                            Theme
                        </Text>
                    </View>
                    <View>
                    <Card style={styles.themeContainer}>
                        <Card.Content>
                        </Card.Content>
                    </Card>
                    </View>
                    <View>
                        <Text style={styles.title1}>Native Language</Text>
                        <Text style={styles.title1}>Target Language</Text>
                    </View>
                
                </View>
            </View>
       
        );
    }
}

export default Home;
const styles=StyleSheet.create({
    container:{
        padding:25
    },
    header:{
            alignItems:'stretch',
            justifyContent:'space-between',
            flexDirection:'row'
    },
    headerText:{
        fontSize:24,
        color:'#051063'
    },
    themeContainer:{
        height:hp('40%')
    },
    title1: {
        fontSize:16,
        color:'#F72D96',
        fontWeight:'bold',
        marginTop:hp('2%'),
        marginBottom:hp('2%')
        }
})