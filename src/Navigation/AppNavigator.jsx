import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTab';
import OrderPlaced from '../Screens/OrderPlaced';
import AuthNaviagtor from './AuthNaviagtor';

const RootStack = createStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
        <RootStack.Navigator>
            <RootStack.Screen name='Auth' component={AuthNaviagtor}  options={{headerShown:false }}/>
        </RootStack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})