import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen ({navigation}) {
  const backgroundImage = require('../assets/images/b2.jpg')
  const plat1 = require('../assets/images/Plats/Aiguillettes de canard.jpg')
  const plat2 = require('../assets/images/Plats/Boulettes de porc braisées en sauce.jpg')
  const plat3 = require('../assets/images/Plats/Canard Laqué de Pékin.jpg')
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={backgroundImage}>
        <View style={styles.fond}>
        <View style={styles.header}>
        <Ionicons style={styles.icons} name='menu' size={50} color="white"/>
        <Ionicons style={styles.icons} name='cart' size={50} color="white"/>
        </View>
        <Text style={styles.title}>MyChoice</Text>
        <Text style={styles.subtitle}>What would you like to eat?</Text>
        <View style={styles.categories}>
          <View style={styles.items}>
            <Pressable style={styles.activeButton}>
            <Text style={styles.activeinfo}>All</Text>
            </Pressable>
            <Pressable style={styles.button}>
            <Text style={styles.info}>Pizza</Text>
            </Pressable>
            <Pressable style={styles.button}>
            <Text style={styles.info}>Burger</Text>
            </Pressable>
            <Pressable style={styles.button}>
            <Text style={styles.info}>Tacos</Text>
            </Pressable>
          </View>
          <Text style={styles.Subtitle}>Popular Food</Text>
        </View>
        <View style={styles.Food}>
          <View style={styles.foodContainer}>
          <Image style={styles.foodImage} source={plat1}/>
          <Image style={styles.foodImage} source={plat2}/>
          </View>
        </View>
        </View>
      </ImageBackground>
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
    image:{
      width:375,
      height:667,
      resizeMode:'cover',
    },
    fond:{
      backgroundColor:'#000',
      width:375,
      height:667,
      opacity:0.75,
    },
    header:{
      top:56,
      flexDirection:'row',
      zIndex:1,
      borderBottomWidth:1,
      borderBottomColor:'#fff'
    },
    icons:{
      paddingRight:270,
    },
    title:{
      color:"#fff",
      left:130,
      top:8,
      fontSize:30
    },
    subtitle:{
      color:"#fff",
      fontSize:24,
      top:23,
      left:23
    },
    categories:{
      flexDirection:'row',
    },
    items:{
      flex:1,
      flexDirection:'row',
      gap:40
    },
    activeButton:{
      backgroundColor:'#68130D',
      width:41,
      height:41,
      borderRadius:15,
      top:50,
      alignItems:'center',
      justifyContent:'center',
    },
    activeinfo:{
      color:'#fff'
    },
    button:{
      backgroundColor:'#fff',
      width:71,
      height:41,
      borderRadius:15,
      alignItems:'center',
      justifyContent:'center',
      top:50,
      zIndex:1
    },
    info:{
      color:'#68130D',
    },
    Subtitle:{
      color:'#fff',
      fontWeight:'700',
      right:275,
      top:110
    },
    Food:{
      flex:1,
      flexDirection:'row'
    },
    foodContainer:{
      flex:1,
      flexDirection:'row',
      gap:31
    },
    foodImage:{
      width:105,
      height:105,
      borderRadius:20,
      bottom:20,
      zIndex:1
    }
  });