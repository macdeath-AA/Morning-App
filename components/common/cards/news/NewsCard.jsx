import React from 'react'
import { View, Text, TouchableOpacity, Linking, Image } from 'react-native'

import styles from './newscard.style'

const NewsCard = ({ item }) => {
  console.log("item", item)
  // console.log("item", item.multimedia[0].url)
  const thumbnailUrl =
    item.multimedia && Array.isArray(item.multimedia) && item.multimedia[0]
      ? item.multimedia[0].url
      : null;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Linking.openURL(item.url)}
      >
        <View style={styles.articleContainer}>
          <View style={styles.content}>
            <Text>{item.title}</Text>
          </View>
          {thumbnailUrl && (
            <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
          )}
        </View>

      </TouchableOpacity>

    </View>
  )
}

export default NewsCard