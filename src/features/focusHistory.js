import React from 'react'
import {Text , View ,FlatList , StyleSheet} from 'react-native'
import {colors } from '../utils/colors'
import {fontSizes } from '../utils/sizes'

export const FocusHistory = ({history}) => {


if( history && !history.length) return <Text style = {styles.item}> There is nothing you focused on </Text>

const renderItem = ({item}) => <Text style = {styles.item}> - {item}</Text>

return(
  <View styles = {styles.container}>
    <Text style = {styles.title}> this is were he is focused on :</Text>
    <FlatList
      data={history}
      renderItem={renderItem} 
    />
  </View>
)}

const styles = StyleSheet.create({
   container:{
     flex:1
   },
    title:{
      color:colors.white,
      fontSize:fontSizes.md
    },
    item:{
      color:colors.white
    }

})