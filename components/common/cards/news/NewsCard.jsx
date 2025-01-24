import React from 'react'
import { View, Text, TouchableOpacity, Linking, Image} from 'react-native'

import styles from './newscard.style'

const NewsCard = ({ item }) => {
  console.log("item", item)
  console.log("item", item.multimedia[0].url)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Linking.openURL(item.url)}
      >
        <View style={styles.articleContainer}>
          <View style={styles.content}>
            <Text>{item.title}</Text>
            
          </View>
          {/* <Image source={{uri:'${item.multimedia[0].url}'}}
            style={styles.thumbnail}/> */}
            <Image source={{uri:item.multimedia[0].url}}
            style={styles.thumbnail}/>
        </View>

      </TouchableOpacity>

    </View>
  )
}

export default NewsCard