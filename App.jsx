import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Man2 from './Man2'
import Man1 from './Man1'
import Man3 from './Man3'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    //  điều hướng các màn hình
    // NavigationContainer Đóng gói toàn bộ ứng dụng
    <NavigationContainer>
      <Stack.Navigator
        // Quản lý các màn hình
        initialRouteName="Man2"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Man1" component={Man1} />
        {/*Stack.Screen các thành phần của màn hình  */}
        <Stack.Screen name="Man2" component={Man2} />
        <Stack.Screen name="Man3" component={Man3} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
