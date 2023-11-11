// Fake API dạng này : https://654efe92358230d8f0ccf0fb.mockapi.io/Login/filter
// Gọi Api về hiển thị dạng ListView hoặc GridView. (Dạng 2)
// (Dạng 3)  Filter ô TextInput dạng chữ.
// Còn filter Type dạng nút bấm.

// (Dạng 4) Thêm Xóa sửa mảng.

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dang2_3_4 = (props) => {
  const { navigation, route } = props
  const { navigate, goBack } = navigation

  const [data, setData] = useState([]) // Dữ liệu từ Fake API

  const getData = async () => {
    await axios
      .get('https://654efe92358230d8f0ccf0fb.mockapi.io/Login/filter')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getData()
    }, 2000)

    return () => clearInterval(interval)
  }, [data])

  const [searchText, setSearchText] = useState('')

  const deleteNote = async (id) => {
    try {
      await axios.delete(
        `https://654efe92358230d8f0ccf0fb.mockapi.io/Login/filter/${id}`
      )
      getData()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#feffea',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{}}>
        <TextInput
          onChangeText={(text) => {
            setSearchText(text)
          }}
          style={{
            width: 400,
            height: 60,
            borderWidth: 1,
            backgroundColor: '#fff',
            borderRadius: 3,
            paddingLeft: 13,
          }}
          placeholder="Nhập tên Note"
          placeholderTextColor="#111"
        />
      </View>

      <View
        style={{
          marginTop: 20,
          height: 50,
          width: 400,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: '#d317aa',
          }}
        ></View>
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: '#51ef7e',
          }}
        ></View>
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: '#caef51',
          }}
        ></View>
      </View>

      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 60,
          width: 360,
        }}
      >
        <TouchableOpacity
          style={{
            height: 60,
            width: 60,
            backgroundColor: '#a7b7e2',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSearchText('work')
          }}
        >
          <Text>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSearchText('learn')
          }}
          style={{
            height: 60,
            width: 60,
            backgroundColor: '#a7b7e2',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Learn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSearchText('play')
          }}
          style={{
            height: 60,
            width: 60,
            backgroundColor: '#a7b7e2',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Play</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => {
            return (
              // item.id<10?
              <View
                style={{
                  marginTop: 20,
                  width: 300,
                  backgroundColor: '#fff',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#111',
                    }}
                  >
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#567f67',
                    }}
                  >
                    {item.description}
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    height: 60,
                    width: 60,
                    color: 'red',
                  }}
                  onPress={() => {
                    deleteNote(item.id)
                  }}
                >
                  <Text>Xóa</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigate('Man2', {
                      type: 'Sửa',
                      id: item.id,
                    })
                  }}
                  style={{
                    height: 60,
                    width: 60,
                    color: 'yellow',
                  }}
                >
                  <Text>sửa</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        <TouchableOpacity
          style={{
            marginTop: 30,
            marginBottom: 30,
            width: 300,
            height: 45,
            backgroundColor: '#ff8eb9',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigate('Man2', {
              type: 'Thêm',
              id: -1,
            })
          }}
        >
          <Text>Thêm</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Dang2_3_4

const styles = StyleSheet.create({})
