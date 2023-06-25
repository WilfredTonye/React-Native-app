import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from 'react-native';
import { useFonts } from 'expo-font';
const plat1 = require('../assets/images/nouille-saute-poulet-sesame.jpg')

const SeePlusScreen = () => {
  const [fontLoaded] =useFonts({
    Playball:require('../fonts/Playball-Regular.ttf'),
    Poppins_Regular:require('../fonts/Poppins-Regular.ttf'),
    Poppins_Medium:require('../fonts/Poppins-Medium.ttf'),
    Poppins_SemiBold:require('../fonts/Poppins-SemiBold.ttf'),
    Poppins_Bold:require('../fonts/Poppins-Bold.ttf'),
    Poppins_Light:require('../fonts/Poppins-Light.ttf')
  })
  return (
    <View style={styles.container}>
          <View style={styles.header}>
        <Ionicons style={styles.icons} name='menu-outline' size={50} color="black"/>
        <Ionicons style={styles.icons} name='cart-outline' size={50} color="black"/>
        </View>
        <Text style={styles.title}>MyChoice App</Text>
        <Text style={styles.subtitle}>Nouille saute poulet sesame</Text>
        <Image style={styles.image} source={plat1}/>
        <View>
            <Text style={styles.Subtitle}>Size</Text>
        </View>
        <View style={styles.quantity}>
            <View style={styles.size}>
                <Pressable style={styles.activeButton}>
                <Text style={styles.activeSizeItem}>S</Text>
                </Pressable>
                <Pressable style={styles.Button}>
                <Text style={styles.sizeItem}>M</Text>
                </Pressable>
                <Pressable style={styles.Button}>
                <Text style={styles.sizeItem}>L</Text>
                </Pressable>
            </View>
        </View>

        <View>
            <Text style={styles.Subtitle2}>Quantity</Text>
        </View>
        <View style={styles.quality2}>
            <View style={styles.icon}>
                <Pressable>
                <FontAwesome name='minus-circle' size={20} style={styles.activeIconItem2}/>
                </Pressable>
                <Pressable>
                <Text style={styles.sizeItem2}>1</Text>
                </Pressable>
                <Pressable>
                <FontAwesome name='plus-circle' size={20} style={styles.activeIconItem2}/>
                </Pressable>
            </View>
        </View>
        <Pressable style={styles.button}>
            <Text style={styles.submit}>confirm</Text>
        </Pressable>
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
        top:-100,
        flexDirection:'row',
        zIndex:1,
        borderBottomWidth:1,
        borderBottomColor:'#000'
      },
      icons:{
        paddingRight:140,
        paddingLeft:135
      },
      title:{
        color:"#000",
        left:4,
        top:-140,
        fontSize:30,
        fontFamily:"Playball"
      },
      subtitle:{
        color:"#000",
        fontSize:24,
        top:-120,
        left:2,
        fontFamily:"Poppins_SemiBold"
      },
      image:{
        width:340,
        height:190,
        borderRadius:15,
        bottom:100
      },
      Subtitle:{
        fontSize:22,
        fontFamily:"Poppins_SemiBold",
        bottom:90
      },
      quantity:{
        flexDirection:'row',
        bottom:70
      },
      size:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
      },
      activeButton:{
        backgroundColor:'#68130D',
        width:38,
        height:38,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
      },
      activeSizeItem:{
        color:'#fff',
        fontFamily:"Poppins_SemiBold",
      },
      Button:{
        backgroundColor:"#fff",
        width:38,
        height:38,
        borderColor:'#68130D',
        borderWidth:2,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
      },
      sizeItem:{
        color:'#68130D',
        fontFamily:"Poppins_SemiBold",
      },
      Subtitle2:{
        fontSize:22,
        bottom:30,
        fontFamily:"Poppins_SemiBold",
      },
      quality2:{
        flexDirection:'row',
        bottom:10
      },
      icon:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        gap:-120
      },
      activeIconItem2:{
        color:"#68130D"
      },
      sizeItem2:{
        fontSize:22,
        fontFamily:"Poppins_SemiBold",
      },
      button:{
        backgroundColor:"#68130D",
        width:261,
        height:40,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        top:50
      },
      submit:{
        color:'#fff',
        fontSize:20,
        fontFamily:"Poppins_Medium",
      }
})