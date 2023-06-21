import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen ({navigation}) {
  return (
    <View style={styles.container}>
    <Pressable onPress={()=> navigation.navigate('SignUp')}>
      <Text>HomeScreen</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });