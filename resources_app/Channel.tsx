import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet, Text } from 'react-native';
import Slider from '@react-native-community/slider';

const Channel = ({channelID}) => {

  const [imageSource, setImageSource] = useState(require('./mute_off_trans.png'));
  const [muted, setMuted] = useState(false);
  const toggleImage = () => {
      if (imageSource === require('./mute_off_trans.png')) {
        setImageSource(require('./mute_on_trans.png'));
        console.log("mute on");
        setMuted(true);
        console.log(att(0));
      } else {
        setImageSource(require('./mute_off_trans.png'));
        console.log("mute off");
        setMuted(false);
        console.log(att(range));
      }
    };
  
  const [range, setRange] = useState(0);
  const att = (val) =>{
    const x = Math.abs(val-63)
    const binary = x.toString(2).padStart(8, '0');
    return binary;
  };
  const display = (val) => {
    if(val!=0){
      return val-63;
    } else {
      return -92;
    }
  };

  //################################################################################

  return (
    <View style={styles.channel}>

      <View>
        <Text style={styles.text}>CH{channelID}</Text>
      </View>

      <View style={styles.fader}>
        <Slider 
        vertical = {true}
        style = {styles.slider}
        minimumTrackTintColor = '#000000'
        thumbImage = {require('./fader_cap.png')}
        minimumValue = {0}
        maximumValue = {63}
        step = {1}
        onValueChange={
          (value) => {
            if(!muted){
              setRange(value)
              console.log("slider", channelID, "moved")     //edit here
              console.log(att(range),"\n")
            } else {
              setRange(value)
              console.log("slider", channelID, "moved")
              console.log("no value\n")
            }                     
          }
        }
        />
      </View>

      <View>
        <Pressable onPress={toggleImage}>
          <Image source={imageSource} style={styles.imageMute} />
        </Pressable>
      </View>

      <View>
        <Text style={styles.textDB}>{display(range)}dB</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

    imageMute : {  
      width: 25,
      height: 25,
      resizeMode: "stretch", 
    },

    container: {
      flex: 1,
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor:'#1B1212',
    },
  
    channel: {
      flexDirection: 'column',
      flex: 1,
      height: 150,
      width: 80, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    text: {
      color: '#FFE958',
      fontSize: 20,
      fontWeight: 'normal',
    },

    fader: {
      width: 50, 
      height: 300,
      paddingBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    slider: {
      width: 280,   
      height: 100,  //   width and height are reversed!!
      transform: [{rotateZ:'-90deg'}],
      alignItems: 'center',
      justifyContent: 'center',
  
    },
  
    mute_icons: {
      width: 25,
      height: 25,
      resizeMode: "stretch"
    },

    textDB: {
      color: '#FFE958',
      fontSize: 18,
      fontWeight: 'normal',
      paddingTop: 15,
    },
  
  });
export default Channel;
