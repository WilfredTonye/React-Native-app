import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../Components/Logo'
import LoginForm from '../Components/LoginForm'

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Logo/>
        <LoginForm/>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });