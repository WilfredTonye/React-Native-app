import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Pressable onPress={()=> navigation.navigate('Home')}>
      <Text>LoginScreen</Text>
      </Pressable>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });