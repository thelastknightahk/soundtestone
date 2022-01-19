import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import SystemSetting from 'react-native-system-setting';
import Sound from 'react-native-sound';

// Enable playback in silence mode
Sound.setCategory('Playback');

var whoosh = new Sound('alert.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  
});

export default class App extends Component {
  volumeChange = () => {
    SystemSetting.setVolume(1);
    SystemSetting.getVolume().then((volume)=>{
      if(volume === 0 ){
        SystemSetting.setVolume(1);
        SystemSetting.getVolume().then((volume)=>{
          console.log('Current volume is ' + volume);
      });
       
      }
      
  });
  SystemSetting.getVolume().then((volume)=>{
    console.log('Current volume is ' + volume);
});
  // change the volume
  whoosh.play();
  
  }
  
  render() {
    return (
      <View style={{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
      }} >
        <TouchableOpacity onPress={this.volumeChange} >
         <View style={{
           width: 100,
           height:50,
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor:'orange'
         }} >
           <Text>Click </Text>
         </View></TouchableOpacity>
         <TouchableOpacity onPress={() => {
           whoosh.stop();
         }} >
         <View style={{
           width: 100,
           height:50,
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor:'orange',
            marginTop: 10
         }} >
           <Text>Stop </Text>
         </View></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
