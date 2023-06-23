import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
const backgroundImage = require('../assets/images/b1.jpg')

const StartScreen = ({navigation}) => {
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
    },
    title:{
      color:"white",
      fontSize:35,
      fontWeight:'700',
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
      fontWeight:'300'
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
    },
    link:{
      left:155,
      top:60,
      fontWeight:'500'
    },
    icon:{
      width:37,
      height:0,
      left:305,
    }
})