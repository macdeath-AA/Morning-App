import React from 'react'
import { View, Text } from 'react-native'

import styles from './newscard.style'

const NewsCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>NewsCard - {item}</Text>
    </View>
  )
}

export default NewsCard