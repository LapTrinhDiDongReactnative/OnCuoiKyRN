// Dạng này là Fake 1 cái Api (gồm list các tài khoản: name và password)
// Lúc đăng nhập thì check xem có tài khoản trong FakeApi ko, có thì Chuyển màn hình!

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'

const A211 = (props) => {
  // Lấy navigate và route từ props
  const { navigation, route } = props
  const { navigate, goBack } = navigation
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffe2fd',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 20,
        }}
      >
        Đăng nhập
      </Text>
      <TextInput
        onChangeText={(text) => {}}
        style={{
          width: 300,
          height: 50,
          borderWidth: 1,
          backgroundColor: '#fff',
          borderRadius: 3,
          paddingLeft: 13,
        }}
        placeholder="UserName ..."
        placeholderTextColor="#111"
      />
      <TextInput
        onChangeText={(text) => {}}
        style={{
          width: 300,
          height: 50,
          borderWidth: 1,
          backgroundColor: '#fff',
          borderRadius: 3,
          paddingLeft: 13,
        }}
        placeholder="Password ..."
        placeholderTextColor="#111"
      />
      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={() => {
          navigate('A212')
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  )
}

export default A211

const styles = StyleSheet.create({})
