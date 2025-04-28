
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import AppNavigator from './src/Navigation/AppNavigator'
import { store } from './src/Redux/Store';

export default function App() {
  return (
    <Provider store={store}>
    <AppNavigator/>
    </Provider>
    
  )
}

const styles = StyleSheet.create({})