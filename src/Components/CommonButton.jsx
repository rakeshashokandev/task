import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function CommonButton  ({ title, onPress, style, textStyle, disabled })  {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
  },
});

export default CommonButton;
