import React , {useState} from 'react' ; 
import {View , Text ,StyleSheet} from 'react-native'
import {TextInput} from 'react-native-paper'
import {RoundedButton}  from '../Components/RoundButton'
import {spacing} from '../utils/sizes'

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return(
   <View style = {styles.container}>
    <View style = {styles.inputContainer}>
      <TextInput  style = {styles.inputText}
       label = "what would you like to focus on?"
        onChangeText = {setSubject}>
      </TextInput>
      <View  style = {styles.button}>
      <RoundedButton title= "+" size = {50}  onPress = {() => addSubject(subject)} />
      </View>
    </View>
  </View>
  
);
}

const styles = StyleSheet.create( {
  container : {
  },

  inputContainer:{
    flexDirection:'row',
    padding : spacing.lg
  },
    inputText : {
    flex : 1,
    marginRight : spacing.sm
  },
  button:{
   justifyContent:'center'
  }
  

})


