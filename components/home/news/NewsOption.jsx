import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Stack, useRouter } from 'expo-router';


import styles from './newsoption.style'

const NewsOption = () => {
  const router = useRouter();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          router.push(`/newscategories`)
          // should route to news page which is the NewsPage component
        }}>
        <Text>News from NY Times!! (click)</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NewsOption