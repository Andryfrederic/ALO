import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Buffer } from 'buffer';
import Permissions from 'react-native-permissions';
import Sound from 'react-native-sound';
import AudioRecord from 'react-native-audio-record';

function AudioRecorder({ route, navigation }){ 
    const [searchQuery, setSearchQuery] = useState('');
    const [audioFile, setAudioFile] = useState('');
    const [recording, setRecording] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [paused, setPaused] = useState(true);
    const options = {
        sampleRate: 16000,
        channels: 1,
        bitsPerSample: 16,
        wavFile: 'test.wav'
      }
       useEffect(() => {
       this.checkPermission();
        AudioRecord.on('data', data => {
            const chunk = Buffer.from(data, 'base64');
            console.log('chunk size', chunk.byteLength);
            // do something with audio chunk
          });
    })
    checkPermission = async () => {
        const p = await Permissions.check('microphone');
        console.log('permission check', p);
        if (p === 'authorized') return;
        return this.requestPermission();
      }
    
      requestPermission = async () => {
        const p = await Permissions.request('microphone');
        console.log('permission request', p);
      }
      start = () => {
        AudioRecord.init(options);
        console.log('start record');
        setAudioFile('');
        setRecording(true);
        setLoaded(false);
        AudioRecord.start();
      }
    
      stop = async () => {
        if (!recording) return;
        console.log('stop record');
        let audioFile = await AudioRecord.stop();
        console.log('audioFile', audioFile);
        setAudioFile(audioFile);
        setRecording(false);
      }

    // async function stop (){
    //     console.log('stop record')
    //     let audio = await AudioRecord.stop()
    //     console.log('audioFile', 'file://'+audio)
    //     // SetAudioFile('audioFiles')
    //     setRecording(false)
    //     SetAudioFile(audio)
    //     setPath('file://'+audio)
    //     setRecorded(true)
    //     };
    
      load = () => {
        return new Promise((resolve, reject) => {
          if (!audioFile) {
            return reject('file path is empty');
          }
    
          this.sound = new Sound(audioFile, '', error => {
            if (error) {
              console.log('failed to load the file', error);
              return reject(error);
            }
            setLoaded(true);
            return resolve();
          });
        });
      }
    
      play = async () => {
        if (!loaded) {
          try {
            await this.load();
          } catch (error) {
            console.log(error);
          }
        }
    
        setPaused(false);
        Sound.setCategory('Playback');
    
        this.sound.play(success => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
         setPaused(true);
          // this.sound.release();
        });
      }
    
      pause = () => {
        this.sound.pause();
        setPaused(true);
      }

      return (
        <View style={styles.container}>
            <View style={styles.row}>
            <Button onPress={this.start} title="Record" disabled={recording} />
            <Button onPress={this.stop} title="Stop" disabled={!recording} />
            {paused ? (
                <Button onPress={this.play} title="Play" disabled={!audioFile} />
            ) : (
                <Button onPress={this.pause} title="Pause" disabled={!audioFile} />
            )}
            </View>
        </View>
      );
  }
  export default AudioRecorder;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});