import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View>
      <View style={styles.logocontainer}>
            <View style={styles.circle}>
            </View>
        </View>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    logocontainer:{
        backgroundColor:'#fff',
        width:60,
        height:60,
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        bottom:40,
        alignItems:'center',
        justifyContent:'center'
    },
    circle:{
        backgroundColor:"#000",
        width:29,
        height:29,
        borderRadius:50
    }
})