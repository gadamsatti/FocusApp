import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (min) => min * 1000 * 60; //this convert mins to milli seconds

const formatTime = (time) => (time < 10 ? `0${time}` : time); //if we give time with one digit it will add 0 to the time or else it return with two digits


export const Countdown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => //this is fuction recives the 4 props
{
  const interval = React.useRef(null); //this useRef will not change state 

  const [millis, setMillis] = useState(null); 

  const reset = () => {
     setMillis(minutesToMillis(minutes));
  }

  const countDown = () => {
    setMillis((time) => { //here time is the privous set millis
      if (time === 0) {
        clearInterval(interval.current);
        onEnd(reset);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]); //when ever mins changes this effect is renderred 

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000); //this function is called ervery 1000 seconds

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});