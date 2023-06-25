import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen ({navigation}) {
  const backgroundImage = require('../assets/images/b2.jpg');
  const plat1 = require('../assets/images/nouille-saute-poulet-sesame.jpg')
  const plat2 = require('../assets/images/boeuf-bourguignon02.jpg')
  const plat3 = require('../assets/images/carbonnade-modif-1.jpg')
  const plat4 = require('../assets/images/cassoulet-modif-1.jpg')
  const plat5 = require('../assets/images/foie-gras-modif.jpg')
  const plat6 = require('../assets/images/Gratin_dauphinois.jpg')
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={backgroundImage}>
        <View style={styles.fond}>
        <View style={styles.header}>
        <Ionicons style={styles.icons} name='menu-outline' size={50} color="white"/>
        <Ionicons style={styles.icons} name='cart-outline' size={50} color="white"/>
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
        </View>
        <View>
        <Text style={styles.Subtitle}>Popular Food</Text>
        </View>
        <View style={styles.Food}>
          <View style={styles.foodContainer}>
            <Pressable onPress={()=> navigation.navigate('VoirPlus')}>
          <Image style={styles.foodimage} source={plat1}/>
          </Pressable>
          <Pressable onPress={()=> alert("this food has been choosen")}>
          <Image style={styles.foodimage} source={plat2}/>
          </Pressable>
          <Pressable onPress={()=> alert("this food has been choosen")}>
          <Image style={styles.foodimage} source={plat3}/>
          </Pressable>
          </View>
          <View style={styles.Titles}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleItem}>nouille saute poulet sesame</Text>
              <Text style={styles.titleItem}>Boeuf bourguignon</Text>
              <Text style={styles.titleItem}>carbonnade</Text>
            </View>
          </View>
          </View>
          
          <View style={styles.Block2}>
        <Text style={styles.SubtitleSection2}>Food you might like</Text>
        </View>
        <View style={styles.FoodSection2}>
          <View style={styles.foodContainerSection2}>
          <Pressable onPress={()=> alert("this food has been choosen")}>
          <Image style={styles.foodimage} source={plat4}/>
          </Pressable>
          <Pressable onPress={()=> alert("this food has been choosen")}>
          <Image style={styles.foodimage} source={plat5}/>
          </Pressable>
          <Pressable onPress={()=> alert("this food has been choosen")}>
          <Image style={styles.foodimage} source={plat6}/>
          </Pressable>
          </View>
          <View style={styles.TitlesSection2}>
            <View style={styles.titleContainerSection2}>
              <Text style={styles.titleItemSection2}>Cassoulet</Text>
              <Text style={styles.titleItemSection2}>foie gras</Text>
              <Text style={[styles.titleItemSection2, {paddingRight:85}]}>Gratin_dauphinois</Text>
            </View>
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
      left:20,
      top:70
    },
    Food:{
      flex:1,
      flexDirection:'row'
    },
    foodContainer:{
      flex:1,
      flexDirection:'row',
      gap:31,
      zIndex:1,
    },
    foodimage:{
      width:105,
      height:105,
      borderRadius:20,
      top:90,
      left:10
    },
    Titles:{
      flex:1,
      flexDirection:'row'
    },
    titleContainer:{
      flex:1,
      flexDirection:'row',
      gap:-30,
      justifyContent:'space-between'
    },
    titleItem:{
      color:"#fff",
       right:220,
       top:205,
       paddingLeft:40,
       fontSize:16,
       fontWeight:'600',
       alignItems:'center'
    },
    SubtitleSection2:{
      color:'#fff',
      fontWeight:'700',
      left:20,
      top:30
    },
    FoodSection2:{
      flex:1,
      flexDirection:'row',
      bottom:35
    },
    foodContainerSection2:{
      flex:1,
      flexDirection:'row',
      gap:31,
      zIndex:1
    },
    foodimageSection2:{
      width:105,
      height:105,
      borderRadius:20,
      top:90,
      left:10
    },
    TitlesSection2:{
      flex:1,
      flexDirection:'row'
    },
    titleContainerSection2:{
      flex:1,
      flexDirection:'row',
      gap:27,
    },
    titleItemSection2:{
      color:"#fff",
       right:210,
       top:205,
       paddingLeft:40,
       fontSize:16,
       fontWeight:'600',
       alignItems:'center'
    }
  
  });