import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { useFonts } from 'expo-font'
const backgroundImage = require('../assets/images/b1.jpg')

const StartScreen = ({navigation}) => {
  const [fontLoaded] =useFonts({
    Playball:require('../fonts/Playball-Regular.ttf'),
    Poppins_Regular:require('../fonts/Poppins-Regular.ttf'),
    Poppins_Medium:require('../fonts/Poppins-Medium.ttf'),
    Poppins_SemiBold:require('../fonts/Poppins-SemiBold.ttf'),
    Poppins_Light:require('../fonts/Poppins-Light.ttf')
  })
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={backgroundImage}>
        <Text style={styles.logo}>MyChoice</Text>
        <Text style={styles.title}>Start a new</Text><Text style={styles.title}>food adventure.</Text>
        <View style={styles.footer}>
            <Text style={styles.text}>Lorem ispum</Text>
            <Pressable style={styles.button} onPress={()=> navigation.navigate('Login')}>
                <Text style={styles.submit}>Sign in</Text>
            </Pressable>
      <Pressable onPress={()=> navigation.navigate('SignUp')}>
            <Text style={styles.link}>Or Create Account</Text>
            </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
      flex:1,
      width:375,
      height:667,
      resizeMode:'cover',
      justifyContent:'center'
    },
    logo:{
      color:'white',
      bottom:150,
      left:9,
      fontSize:25,
      fontFamily:"Playball",
      opacity:0.5
    },
    title:{
      color:"white",
      fontSize:35,
      fontFamily:"Poppins_SemiBold",
      left:40,
    },
    footer:{
      backgroundColor:"white",
      width:375,
      height:164,
      borderTopRightRadius:50,
      top:200,
    },
    text:{
      left:38,
      top:15,
      fontFamily:"Poppins_Light",
      fontSize:15
    },
    button:{
      backgroundColor:"#68130D",
      width:261,
      height:40,
      left:58,
      top:40,
      borderRadius:10,
      alignItems:'center',
      justifyContent: 'center',
    },
    submit:{
      color:"white",
      fontSize:20,
      fontFamily:"Poppins_Regular"
    },
    link:{
      left:155,
      top:60,
      fontFamily:"Poppins_Medium",
      fontSize:15
    },
    icon:{
      width:37,
      height:0,
      left:305,
    }
})