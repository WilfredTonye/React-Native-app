import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Pressable onPress={()=> navigation.navigate('Home')}>
      <Text>SignUpScreen</Text>
      </Pressable>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });