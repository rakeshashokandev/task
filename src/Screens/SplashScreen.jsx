import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Color from '../Global/Color';
import Fonts from '../Global/Fonts';

function SplashScreen({navigation}) {
  useEffect (() => {
     setTimeout (() => {
      navigation.navigate('LoginScreen')
     },1000)
  },[]);
  return (
    <SafeAreaView style={styles.container}>
          <Image
            source={require('../Assets/Images/logo.png')}
            style={{ width: '50%',
              height: '50%',}}
            resizeMode='center'
          />
    </SafeAreaView>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Background_Color,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
