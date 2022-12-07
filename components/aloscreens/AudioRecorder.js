import React, { useState, useEffect } from 'react';
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
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import Icon from 'react-native-vector-icons/Ionicons';
 import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
 import AudioRecord from 'react-native-audio-record';
 import Permissions from 'react-native-permissions';
 function AudioRecorder({ route, navigation }){
    const [myspeech , setMyspeech] = useState(false)
    const [audioFile , SetAudioFile] = useState('')
    const [recording , setRecording] = useState(false)
    const [loaded , setLoaded] = useState(false)
    const [size , setSize] = useState('')
    const [path , setPath] = useState('')
    useEffect(()=>{
        this.checkPermission();
    })
    const options = {
        sampleRate: 44100,
        channels: 1,
        bitsPerSample: 16,
        audioSource: 1,
        wavFile: 'test.wav'
      };
      AudioRecord.init(options);
      AudioRecord.on('data', data => {
      });
    checkPermission = async () => {
        const p = await Permissions.check('android.permission.RECORD_AUDIO');
        console.log('permission check', p);
        if (p === 'authorized') return;
        return this.requestPermission();
      };
    
      requestPermission = async () => {
        const p = await Permissions.request('android.permission.RECORD_AUDIO');
        console.log('permission request', p);
      };
      start = () => {
            console.log('start record');
            setLoaded(false);
            SetAudioFile('');
            setRecording(true);
            AudioRecord.start();
      };
    
      stop = async () => {
        // if (!recording) return;
        console.log('stop record');
        let audioFiles = await AudioRecord.stop();
        console.log('audioFile', 'file://'+audioFiles);
        SetAudioFile(audioFiles);
        setRecording(false);
        setPath(audioFiles);
        alert(path);
      };

        return (
            <View style={styles.container}>
                <View style={styles.rowstyle}>
                    <Text>
                        FR
                    </Text>
                    <Text>
                        Max time: 05:00
                    </Text>
                </View>
                <View style={styles.mic_container}>
                    {!recording? 
                        (<TouchableOpacity
                        onPress={()=>this.start()}
                        >
                        <Icon name="mic" color={'blue'} size={50} />
                        </TouchableOpacity>):
                        (<TouchableOpacity
                            onPress={()=>this.stop()}
                            >
                            <Icon name="mic-off" color={'red'} size={50} />
                            </TouchableOpacity>)
                    }
                    <Text style={styles.time}>00:00</Text>
                </View>
               { !myspeech ? (
                <View>
                <Text style={styles.title1}>Speech:</Text>
                <Card>
                    <Card.Content>
                        <ScrollView style={styles.speech_container}>
                            <Text>test</Text>
                        </ScrollView>
                    </Card.Content>
                </Card>
                <View style={styles.row_button}>
                    <Button
                        mode="contained" 
                        buttonColor='red'
                        onPress={() => alert('Cancel')}
                    >
                        Cancel
                    </Button>
                    <Button
                        mode="contained" 
                        buttonColor='#051063'
                        onPress={() => alert('ok')}
                    >
                        Submit
                    </Button>
                </View>
            </View>
            ):null}
            </View>
        );
}

export default AudioRecorder;
const styles=StyleSheet.create({
    container:{
        padding:10,
        // justifyContent:'center',
        // alignItems:'center'
    },
    rowstyle:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    row_button:{
        marginTop:hp('2%'),
        flexDirection:'row',
        justifyContent:'space-around'
    },
    mic_container:{
        height:hp('30%'),
        width:wp('90%'),
        // backgroundColor:'red',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    time:{
        fontSize:24,
        fontWeight:'bold'
    },
    title1: {
        fontSize:16,
        color:'#F72D96',
        fontWeight:'bold',
        marginTop:hp('2%'),
        marginBottom:hp('2%')
        },
    speech_container:{
        height:hp('35%')
    }
})