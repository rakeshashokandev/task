import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Color from '../Global/Color';
import Fonts from '../Global/Fonts';
import CommonTextInputt from '../Components/CommonTextInputt';
import CommonButton from '../Components/CommonButton';

// Get screen width and height
const { width, height } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../Assets/Images/logo.png')}
          resizeMode="center"
          style={styles.logo}
        />
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Login</Text>
        <Text style={styles.loginSubTitle}>Enter Your Email and Password</Text>

        <Text style={styles.label}>Email</Text>
        <CommonTextInputt
          placeholder={'demo@gmail.com'}
          style={styles.textInput}
        />

        <Text style={styles.label}>Password</Text>
        <CommonTextInputt
          placeholder={'Demo@123#'}
          style={styles.textInput}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CommonButton
          style={styles.button}
          title={'LOGIN'}
          textStyle={styles.buttonText}
          onPress={() => navigation.replace('MainTap')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.25,
    height: height * 0.25,
  },
  loginContainer: {
    flex: 2,
    justifyContent: 'center',
    padding: 25,
  },
  loginTitle: {
    fontFamily: Fonts.Font_Bold,
    fontSize: 30,
  },
  loginSubTitle: {
    fontFamily: Fonts.Font_Regular,
    fontSize: 18,
    paddingVertical: 15,
    color: Color.Text_Color,
  },
  label: {
    paddingVertical: height * 0.01,
    fontFamily: Fonts.Font_Medium,
    fontSize: 15,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: Color.Primary_color,
    fontFamily: Fonts.Font_Regular,
    fontSize: 18,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    width: width * 0.85,
    height: height * 0.05,
    backgroundColor: Color.Primary_color,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Color.White,
    fontFamily: Fonts.Font_Bold,
    fontSize: 20,
  },
});
