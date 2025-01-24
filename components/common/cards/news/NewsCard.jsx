import React from 'react'
import { View, Text } from 'react-native'

import styles from './newscard.style'

const NewsCard = ({item}) => {
  console.log("item", item)
  return (
    <View style={styles.container}>
      <Text>NewsCard - {item.title}</Text>
      <Text>NewsCard - {item.url}</Text>
    </View>
  )
}

export default NewsCard