import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Stack, useRouter } from 'expo-router';


import styles from './newscard.style'

const CategoryCard = ({ item }) => {
  console.log("item", item)
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          // router.push(`/NewsPage`)
          router.push(`/news-details/${item}`);
          // should route to news page which is the NewsPage component
        }}>
        <View style={styles.articleContainer}>
          <View style={styles.content}>
            <Text>{item}</Text>
          </View>
        </View>

      </TouchableOpacity>
    </View>
  )
}

export default CategoryCard