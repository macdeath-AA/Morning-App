import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native'
import { Stack, useRouter } from 'expo-router';


import styles from '../components/home/news/newsoption.style'
import { FlatList } from 'react-native';
import NewsCard from '../components/common/cards/news/NewsCard';
import useFetch from '../hook/useFetch'

import { COLORS, SIZES } from "../constants";
import CategoryCard from '../components/common/cards/news/CategoryCard';


const NewsCategories = () => {
    const router = useRouter();

    // const { data, isLoading, error } = useFetch('home') 
    // ideally call for api's other than home

    const isLoading = false
    const error = false

    // console.log("news data");
    // console.log(data);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: true,
                    headerBackVisible: true,
                    headerTitle: "News Cateogories"
                }}
            />

            <View>
                {/* <Text>News Categories</Text> */}

                <View style={styles.cardsContainer}>
                    {isLoading ? (
                        <ActivityIndicator size='large' color={COLORS.primary} />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : (
                        <FlatList
                            data={['home', 'arts', 'automobiles', 'business', 'fashion', 'food', 'health', 'movies', 'politics', 'science', 'sports', 'technology', 'world']}
                            renderItem={({ item }) => (
                                <CategoryCard
                                    item={item.charAt(0).toUpperCase() + item.slice(1)}
                                />
                            )}
                        // keyExtractor={(item) => item.title}
                        // contentContainerStyle={{ columnGap: SIZES.medium }}
                        // horizontal
                        />
                    )}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NewsCategories