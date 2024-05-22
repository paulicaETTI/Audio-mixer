import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Channel from './Channel';
import RNExitApp from 'react-native-exit-app';

const exitHandler = () => {
  Alert.alert(
    'Exit App',
    'Are you sure you want to exit the app?',
    [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () => RNExitApp.exitApp(),
      },
    ],
    { cancelable: false }
  );
};

const AppError = () => {

  return (
    <View style={styles.body}>
      <View style={{flex : 1, alignItems : "center", justifyContent : 'center'}}>
        <View style={{ justifyContent : 'center', alignItems: 'center', paddingBottom : 15}}>
          <Text style={{fontSize: 30, color: '#FFE958'}}>Device not connected</Text>
          <Text style={{fontSize: 15, color: '#FFE958'}} onPress={exitHandler}>Please connect to the mixer via Bleutooth!</Text>
        </View>
        <View style={{ justifyContent : 'center', alignItems: 'center', paddingTop : 15}}>
          <Text style={{fontSize: 20, color: '#FFE958'}} onPress={exitHandler}>EXIT</Text>
        </View>
      </View>
    </View>
  )
};

const AppOk = () => {

  return (
    <View style={styles.body}>
      <View style={styles.title}>
        <Text style={styles.text1}>AUDIO MIXER CONTROL</Text>
      </View>
      <View style={styles.container}>
        <Channel channelID={1}/>
        <Channel channelID={2}/>
        <Channel channelID={3}/>
        <Channel channelID={4}/>
        <Channel channelID={5}/>
      </View>
      <View style={styles.exit}>
        <Text style={styles.text2} onPress={exitHandler}>EXIT</Text>
      </View>
    </View>
  )
};

const App = () => {
  return (
    2 === 2 ? (
      <AppOk />
    ) : (
      <AppError />
    )
  );
};

//###################################   STYLES   ###########################################

const styles = StyleSheet.create({

  body:{
    backgroundColor: '#1B1212',
    flex: 1,
  },

  title: {
    flex: 4,
    justifyContent: 'center', 
    alignItems: 'center',
  },

  text1: {
    fontSize: 30,
    color: '#FFE958'
  },

  container: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:'#1B1212',
  },

  exit: {
    flex: 4,
    justifyContent: 'center', 
    alignItems: 'center',
  },

  text2: {
    fontSize: 20,
    color: '#FFE958'
  },

});

export default App;