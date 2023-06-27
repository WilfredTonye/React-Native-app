import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from 'react-native';
import { useFonts } from 'expo-font';
const plat1 = require('../assets/images/nouille-saute-poulet-sesame.jpg')

const SeePlusScreen = ({navigation}) => {
  const [fontLoaded] =useFonts({
    Playball:require('../fonts/Playball-Regular.ttf'),
    Poppins_Regular:require('../fonts/Poppins-Regular.ttf'),
    Poppins_Medium:require('../fonts/Poppins-Medium.ttf'),
    Poppins_SemiBold:require('../fonts/Poppins-SemiBold.ttf'),
    Lato_Light:require('../fonts/Lato-Light.ttf'),
    Lato_Regular:require('../fonts/Lato-Regular.ttf'),
    Lato_Bold:require('../fonts/Lato-Bold.ttf')
  })
  if (!fontLoaded) return null
  return (
    <View style={styles.container}>
          <View style={styles.header}>
        <Ionicons style={styles.icons} name='cart-outline' size={50} color="black"/>
        </View>
        <Text style={styles.title}>MyChoice App</Text>
        <Text style={styles.subtitle}>Nouille saute poulet sesame</Text>
        <Image style={styles.image} source={plat1}/>
        <View>
            <Text style={styles.Subtitle}>Description</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.desc}>This channel aims at giving you react native design tutorials that you don't see nowhere on YouTube. 
At least for free. 
So make sure you stay tuned for there are 
more specialcontents coming soon.</Text>
        </View>
        <View>
          <View style={styles.Prices}>
            <Text style={[styles.price, {fontFamily:"Lato_Light", fontSize:18}]}>Price</Text>
            <Text style={[styles.price, {fontFamily:"Lato_Medium", fontSize:20,  color:'#68130D'}]}>2.500</Text>
          </View>
          <Pressable style={styles.button} onPress={()=> navigation.navigate('Cart')}>
            <Text style={styles.submit}>Add To Cart</Text>
          </Pressable>
        </View>
    </View>
  )
}

export default SeePlusScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:'center',
        justifyContent:'center'
    },
    header:{
        top:-60,
        flexDirection:'row',
        zIndex:1,
        borderBottomWidth:1,
        borderBottomColor:'#000'
      },
      icons:{
        paddingLeft:320
      },
      title:{
        color:"#000",
        left:4,
        top:-100,
        fontSize:30,
        fontFamily:"Playball"
      },
      subtitle:{
        color:"#000",
        fontSize:24,
        top:-70,
        left:2,
        fontFamily:"Poppins_SemiBold"
      },
      image:{
        width:340,
        height:190,
        borderRadius:15,
        bottom:40,
      },
      Subtitle:{
        fontSize:22,
        fontFamily:"Poppins_SemiBold",
        bottom:-10,
        right:100
      },
      description:{
        flexDirection:'row',
        bottom:-10,
      },
      desc:{
        fontFamily:"Lato_Light",
        fontSize:16,
        left:19,
        lineHeight:25,
        paddingRight:50
      },
      Prices:{
        right:80,
        top:70,
      },
      button:{
        backgroundColor:'#68130D',
        width:165,
        height:40,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        left:90,
        top:30
      },
      submit:{
        color:'#fff',
        fontFamily:"Poppins_Medium",
        fontSize:18
      }
})