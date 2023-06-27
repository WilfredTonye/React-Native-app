import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

const profile = require('../assets/images/WilfredTonye.jpg')
const SearchScreen = () => {
  const [fontLoaded] =useFonts({
    Playball:require('../fonts/Playball-Regular.ttf'),
    Poppins_Regular:require('../fonts/Poppins-Regular.ttf'),
    Poppins_Medium:require('../fonts/Poppins-Medium.ttf'),
    Poppins_SemiBold:require('../fonts/Poppins-SemiBold.ttf'),
    Poppins_Bold:require('../fonts/Poppins-Bold.ttf'),
    Poppins_Light:require('../fonts/Poppins-Light.ttf')
  })
  if (!fontLoaded) return null
  return (
    <View style={styles.container}>
      <View style={styles.Title}>
      <Text style={styles.span1}>S</Text>
      <Text style={styles.span2}>earch</Text>
      </View>
      <Image style={styles.profile} source={profile}/>
      <View style={styles.searchContainer}>
        <Ionicons style={styles.icon} name='search' size={15} color="white"/>
        <TextInput style={styles.search} placeholder='Search' placeholderTextColor="#fff"/>
      </View>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#68130D",
        alignItems:'center',
        justifyContent:'center'
    },
    Title:{
      flexDirection:'row',
      bottom:200,
      right:100
    },
    span1:{
      color:"#fff",
      fontFamily:"Poppins_SemiBold",
      fontSize:40,
      bottom:7
    },
    span2:{
      color:"#fff",
      fontFamily:"Poppins_SemiBold",
      fontSize:34,
    },
    profile:{
      width:48,
      height:48,
      borderRadius:50,
      bottom:260,
      left:150
    },
    searchContainer:{
      backgroundColor:"#966969",
      width:313,
      height:32,
      borderRadius:10,
      flexDirection:'row',
      bottom:250,
      gap:15
    },
    icon:{
      top:7,
      left:7
    },
    search:{
      fontFamily:"Poppins_Light",
      fontSize:18
    }
})