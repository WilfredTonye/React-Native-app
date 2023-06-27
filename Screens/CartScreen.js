import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const cart1 = require('../assets/images/nouille-saute-poulet-sesame.jpg')
const CartScreen = () => {
  const [fontLoaded] =useFonts({
    Playball:require('../fonts/Playball-Regular.ttf'),
    Poppins_Regular:require('../fonts/Poppins-Regular.ttf'),
    Poppins_Medium:require('../fonts/Poppins-Medium.ttf'),
    Poppins_SemiBold:require('../fonts/Poppins-SemiBold.ttf'),
    Poppins_Light:require('../fonts/Poppins-Light.ttf')
  })
  if (!fontLoaded) return null
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Your Cart</Text>
      <View style={styles.images}>
      <Image style={styles.image} source={cart1}/>
      <Image style={styles.image} source={cart1}/>
      <Image style={styles.image} source={cart1}/>
      </View>
    
        <Text style={styles.title}>Nouille saute poulet sesame</Text>
        <Text style={styles.price}>2.500</Text><Text style={styles.type}>XAF</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:'center',
        justifyContent:'center'
    },
    Title:{
      fontFamily:"Playball",
      fontSize:35,
      right:15,
      bottom:130
    },
    images:{
      flexDirection:'column',
      gap:43,
      right:120,
      bottom:80
    },
    image:{
      width:87,
      height:87,
      borderRadius:15,
    },
    title:{
      flexDirection:'column',
      bottom:420,
      left:40,
      fontFamily:"Poppins_Regular",
      fontSize:17
    },
    price:{
      bottom:390,
      right:50,
      fontSize:20
    },
    type:{
      bottom:415,
      right:12,
      fontSize:10
    }
})