import React from 'react'
import {View , Text,StyleSheet } from 'react-native'
import {RoundedButton} from '../Components/RoundButton'

export const  Timing = ({onChangeTime}) => (
<>
  <View style = {styles.timingButton}>
      <RoundedButton size={75} title = "5" onPress ={()=> {onChangeTime(5)}}/>
  </View>
   <View style = {styles.timingButton}>
      <RoundedButton size={75} title = "10" onPress = {()=> {onChangeTime(10)}}/>
  </View>
   <View style = {styles.timingButton}>
      <RoundedButton size={75} title = "20" onPress = {()=> {onChangeTime(20)}}/>
  </View>
</>

);

const styles = StyleSheet.create({
  timingButton : {
    flex : 1,
    alignItems : 'center'
  }
})