import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import OrderPlaced from '../Screens/OrderPlaced';
import ProductScreen from '../Screens/ProductScreen';
import SplashScreen from '../Screens/SplashScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import BottomTabNavigator from './BottomTab';
import LoginScreen from '../Screens/LoginScreen';
import CartScreen from '../Screens/CartScreen';
const  Stack = createStackNavigator();
export default function AuthNaviagtor() {
  return (
    <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown:false}}>
      <Stack.Screen name='SplashScreen' component={SplashScreen} />
      {/* <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} /> */}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name='MainTap' component={BottomTabNavigator} />
      <Stack.Screen name='OrderPlaced' component={OrderPlaced} />
      <Stack.Screen name='ProductScreen' component={ProductScreen} />
      <Stack.Screen name='CartScreen' component={CartScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})