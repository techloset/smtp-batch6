import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login({ navigation }) {
    const onPressHandler = ()=>{
        navigation.navigate('Home')
    }
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={onPressHandler}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}