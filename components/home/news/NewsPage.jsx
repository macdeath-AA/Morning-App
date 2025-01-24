import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Stack, useRouter } from 'expo-router';


import styles from './newsoption.style'
import { FlatList } from 'react-native';
import NewsCard from '../../common/cards/news/NewsCard';

const NewsPage = () => {
    const router = useRouter();
    return (
        <View>
            <Text>News Page</Text>
            <View style={styles.cardsContainer}>
                <FlatList
                    data={[1, 2, 3, 4, 5,6]}
                    renderItem={({ item }) => (
                        <NewsCard
                            item={item}
                        />
                    )}
                />
            </View>
        </View>

    )
}

export default NewsPage