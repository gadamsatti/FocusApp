import React, { useState } from 'react';
import { Text, View, StyleSheet , Vibration } from 'react-native';
import { ProgressBar }  from 'react-native-paper'
import { useKeepAwake } from 'expo-keep-awake';
import {Timing} from './timing'
import { Countdown } from '../Components/CountDown';
import { RoundedButton } from '../Components/RoundButton';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';



  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

export const Timer = ({ focusSubject , clearSubject , onTimerEnd}) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);


  const end = (reset) => {
       Vibration.vibrate(PATTERN),
       setProgress(1),
       setIsStarted(false),
       reset();
       onTimerEnd(focusSubject);
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes = {minutes}
          isPaused={!isStarted}
          onProgress={(progress) => {setProgress(progress)}}
          onEnd={end}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}> Focus on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      
      <View style = {{ paddingTop : spacing.xl}}>
        <ProgressBar
         progress = {progress}
         color = {colors.progressBar} 
         style = {{ height : spacing.sm}}
         />
      </View>
      <View style = {styles.timingWrapper}>
        <Timing onChangeTime = {setMinutes} />
      </View>


      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
        {isStarted && (
          <RoundedButton
            title="pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        )}
      </View>
      <View style = {styles.clearSubjectWrapper}>
        <RoundedButton size = {50} title = "-" onPress = {clearSubject}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timingWrapper:{
    flex:0.1,
    flexDirection:'row',
    paddingTop:spacing.xxl
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    alignItems: 'center',
    padding:spacing.md,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
  clearSubjectWrapper:{
    flexDirection:'row',
    justifyContent:'center'
  }
});
