import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font' 
import { Ionicons } from '@expo/vector-icons'
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPasword] = useState('')

  const handleLogin = () => {
  }

  const [fontLoaded] =useFonts({
    Poppins_Medium:require('../fonts/Poppins-Medium.ttf'),
    Poppins_Regular:require('../fonts/Poppins-Regular.ttf'),
    Lato_Light:require('../fonts/Lato-Light.ttf'),
    Lato_Regular:require('../fonts/Lato-Regular.ttf'),
    Lato_Bold:require('../fonts/Lato-Bold.ttf')
  })
  if (!fontLoaded) return null
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Pressable onPress={()=> navigation.navigate('SignUp')}>
        <Ionicons style={styles.icon} name='ios-arrow-back' size={40} color="#68130D"/>
        </Pressable>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>Back!</Text>
      </View>
      <KeyboardAvoidingView>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={text=> setEmail(text)} placeholderTextColor="#68130D"/>
        <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={text=> setPasword(text)} placeholderTextColor="#68130D"secureTextEntry={true} textContentType='newPassword'/>
        <Ionicons style={styles.passwordView} name='eye' size={30} color="#68130D"/>
      </View>
      <Pressable style={styles.button} onPress={()=> navigation.navigate('Home')}>
        <Text style={styles.submit}>Sign In</Text>
      </Pressable>
      </KeyboardAvoidingView>
    </View>
    
  )
}

export default LoginScreen

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
      bottom:140
    },
    icon:{
      top:10,
      left:10
    },
    title:{
      color:'#68130D',
      fontSize:25,
      fontFamily:"Poppins_Medium",
      left:20,
      top:30,
    },
    form:{
      top:-40,
      right:2,
    },
    input:{
      backgroundColor:'#fff',
      paddingLeft:20,
      marginBottom:50,
      width:327,
      height:40,
      borderRadius:10,
      fontFamily:"Lato_Light"
    },
    passwordView:{
      bottom:85,
      left:266
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
      paddingLeft:208,
      bottom:25,
      fontFamily:"Lato_Regular"
    }
  });