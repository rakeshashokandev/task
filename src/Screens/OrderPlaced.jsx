import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Color from '../Global/Color';
import LottieView from 'lottie-react-native';
import Fonts from '../Global/Fonts';
import CommonButton from '../Components/CommonButton';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
export default function OrderPlaced() {
  const navigation = useNavigation();
  const handleHome = () => {
    navigation.replace('MainTap');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <LottieView
          source={require('../Assets/animation/success-animation.json')}
          autoPlay
          loop
          style={{flex: 1}}
        />
      </View>
      <View
        style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <Text style={{fontFamily: Fonts.Font_Bold, fontSize: 24}}>
          Your order has been placed!!!
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Font_Medium,
            fontSize: 17,
            marginVertical: 10,
          }}>
          Your items has been placcd and is on
        </Text>
        <Text style={{fontFamily: Fonts.Font_Medium, fontSize: 17}}>
          it’s way to being processed
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <CommonButton
          style={{
            backgroundColor: Color.Primary_color,
            width: width * 0.9,
            height: height * 0.060,
            borderRadius: 10,
          }}
          title={'Back to Home'}
          textStyle={{fontFamily: Fonts.Font_Bold, color: Color.White}}
          onPress={handleHome}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Background_Color,
  },
});
