import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CommonTextInputt = ({style,textColor, placeholder,onChangeText }) => {
  return (
    <TextInput 
    placeholderTextColor={textColor}
    placeholder={placeholder}
    onChangeText={onChangeText}
    style={style}
    />
  )
}

export default CommonTextInputt

const styles = StyleSheet.create({})