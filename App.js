//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartScreen from './Screens/StartScreen';
import LoginScreen from './Screens/LoginScreen'
import SignUpScreen from './Screens/SignUpScreen'
import HomeScreen from './Screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import SeePlusScreen from './Screens/SeePlusScreen';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function StackNavigation() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Start' component={StartScreen} options={{ headerShown:false, headerStyle:{backgroundColor:"#68130D",},headerTintColor:"#fff"}}/>
      <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown:false,headerStyle:{backgroundColor:"#fff",},headerTintColor:"#68130D"}}/>
      <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false,headerStyle:{backgroundColor:"#fff",},headerTintColor:"#68130D"}}/>
      <Stack.Screen name='Home' component={TabsNavigation} options={{headerShown:false,headerStyle:{backgroundColor:"#fff",},headerTintColor:"#68130D"}}/>
      <Stack.Screen name='VoirPlus' component={SeePlusScreen} options={{headerShown:false,headerStyle:{backgroundColor:"#fff",},headerTintColor:"#68130D"}}/>
    </Stack.Navigator>
  );
}

function TabsNavigation() {
  return (
    <Tabs.Navigator
    screenOptions={({route}) => ({
      tabBarIcon:({focused, size, colour}) => {
        let iconName;
        if (route.name === "Home") {
          iconName = focused ? "ios-home": "ios-home-outline"
        }else if (route.name === "Home") {
          iconName = focused ? "ios-search": "ios-search-outline"
        }else if (route.name === "Home") {
          iconName = focused ? "ios-heart": "ios-heart-outline"
        }else if (route.name === "Home") {
          iconName = focused ? "ios-person": "ios-person-outline"
        }
        return <Ionicons name={iconName} size={size} color={colour}/>
      }
    })}
    >
      <Tabs.Screen name='Home' component={HomeScreen} options={{headerShown:false,headerStyle:{backgroundColor:"#fff",},headerTintColor:"#68130D"}}/>
    </Tabs.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
