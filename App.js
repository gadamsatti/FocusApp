import  React , {useState} from 'react';
import { Text, View, StyleSheet ,SafeAreaView ,Platform , StatusBar } from 'react-native';
import {TextInput} from 'react-native-paper';
import Constants from 'expo-constants';
import { colors }  from './src/utils/colors';
import  { Focus }  from './src/features/focus';
import { Timer }   from './src/features/timer';
import {FocusHistory} from './src/features/focusHistory';


export default function App() {

const [currentSubject , setCurrentSubject ] = useState(null);
const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style = { styles.container}>
      {
        !currentSubject ? ( 
            <>
            <Focus addSubject = {setCurrentSubject}/> 
            <FocusHistory history = {history}/>
            </>) : 
      (<Timer 
          focusSubject = {currentSubject}
          onTimerEnd = {(subject) => {
            setHistory([...history,subject])
          }}
          clearSubject = {() => setCurrentSubject(null)}
          />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Platform.OS=== 'android' ? StatusBar.currentHeight:0, 
    backgroundColor : colors.darkBlue
  }
});
