import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const SignUpScreen = ({navigation}) => {
  const [fontLoaded] =useFonts({
    Poppins_Medium:require('../fonts/Poppins-Medium.ttf'),
    Poppins_Regular:require('../fonts/Poppins-Regular.ttf'),
    Lato_Light:require('../fonts/Lato-Light.ttf'),
    Lato_Regular:require('../fonts/Lato-Regular.ttf'),
    Lato_Bold:require('../fonts/Lato-Bold.ttf')
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create</Text>
        <Text style={styles.title}>Account</Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Full Name' placeholderTextColor="#68130D"/>
        <TextInput style={styles.input} placeholder='Email' placeholderTextColor="#68130D"/>
        <TextInput style={styles.input} placeholder='Phone Number' placeholderTextColor="#68130D"/>
        <TextInput style={styles.input} placeholder='Password' placeholderTextColor="#68130D"secureTextEntry={true} textContentType='newPassword'/>
        <TextInput style={styles.input} placeholder='Confirm Password' placeholderTextColor="#68130D" secureTextEntry={true}/>
      </View>
      <Pressable style={styles.button} onPress={()=> navigation.navigate('Home')}>
        <Text style={styles.submit}>SignUp</Text>
      </Pressable>
      <Pressable style={styles.linkButton} onPress={()=> navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account?</Text>
        <Text style={[styles.link, {fontFamily:"Lato_Bold"}]}>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#68130D',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      backgroundColor:"#fff",
      width:375,
      height:152,
      borderBottomLeftRadius:40,
      bottom:100
    },
    title:{
      color:'#68130D',
      fontSize:25,
      left:20,
      top:50,
      fontFamily:"Poppins_Medium"
    },
    form:{
      top:-80,
      right:2,
    },
    input:{
      backgroundColor:'#fff',
      paddingLeft:20,
      marginBottom:15,
      width:327,
      height:40,
      borderRadius:10,
      fontFamily:"Lato_Light"
    },
    button:{
      backgroundColor:"#fff",
      width:327,
      height:40,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      bottom:40
    },
    submit:{
      color:"#68130D",
      fontSize:20,
      fontFamily:"Poppins_Regular"
    },
    linkButton:{
      flexDirection:'row',
    },
    link:{
      color:'#fff',
      paddingRight:56,
      paddingLeft:30,
      fontFamily:"Lato_Regular"
    }
  });