import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Stack, useRouter } from 'expo-router';


import styles from './newsoption.style'
import { FlatList } from 'react-native';
import NewsCard from '../../common/cards/news/NewsCard';
import useFetch from '../../../hook/useFetch'

import { COLORS, SIZES } from "../../../constants";


const NewsPage = () => {
    const router = useRouter();

    const { data, isLoading, error } = useFetch('home')

    // console.log("news data");
    // console.log(data);

    return (
        <View>
            <Text>News Page</Text>
            
            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <NewsCard
                                item={item}
                            />
                        )}
                        keyExtractor={(item) => item.title}
                        // contentContainerStyle={{ columnGap: SIZES.medium }}
                        // horizontal
                    />
                )}
            </View>

            {/* <View style={styles.cardsContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <NewsCard
                            item={item}
                        />
                    )}
                />
            </View> */}
        </View>

    )
}

export default NewsPage