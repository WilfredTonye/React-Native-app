import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
    <Stack.Screen name='Login' component={LoginScreen}/>
    <Stack.Screen name='SignUp' component={SignUpScreen}/>
    <Stack.Screen name='Home' component={HomeScreen}/>
  </Stack.Navigator>
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
