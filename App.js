//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StartScreen from './Screens/StartScreen';
import LoginScreen from './Screens/LoginScreen'
import SignUpScreen from './Screens/SignUpScreen'
import HomeScreen from './Screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function StackNavigation() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Start' component={StartScreen} options={{ headerShown:false, headerStyle:{backgroundColor:"#68130D",},headerTintColor:"#fff"}}/>
      <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown:false,headerStyle:{backgroundColor:"#fff",},headerTintColor:"#68130D"}}/>
      <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false,headerStyle:{backgroundColor:"#fff",},headerTintColor:"#68130D"}}/>
      <Stack.Screen name='Home' component={TabsNavigation} options={{headerShown:false,headerStyle:{backgroundColor:"#fff",},headerTintColor:"#68130D"}}/>
    </Stack.Navigator>
  );
}

function TabsNavigation() {
  return (
    <Tabs.Navigator>
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
