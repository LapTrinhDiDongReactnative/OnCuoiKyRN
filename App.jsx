import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import A111 from './Dang1/TruyenDuLieu/A111'
import A112 from './Dang1/TruyenDuLieu/A112'
import A211 from './Dang1/DangNhap/A211'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    //  điều hướng các màn hình
    // NavigationContainer Đóng gói toàn bộ ứng dụng
    <NavigationContainer>
      <Stack.Navigator
        // Quản lý các màn hình
        initialRouteName="A211"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Dạng 1 */}
        <Stack.Screen name="A111" component={A111} />
        <Stack.Screen name="A112" component={A112} />

        {/*
        Dạng 2
        */}
        <Stack.Screen name="A211" component={A211} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
