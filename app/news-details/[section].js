import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';


import styles from '../../components/home/news/newsoption.style';
import { FlatList } from 'react-native';
import NewsCard from '../../components/common/cards/news/NewsCard';
import useFetch from '../../hook/useFetch'

import { COLORS, SIZES } from "../../constants";
// import { useSearchParams } from 'expo-router/build/hooks';


const NewsPage = () => {
    const router = useRouter();
    const params = useLocalSearchParams()
    console.log(params.section)

    const { data, isLoading, error } = useFetch(params.section)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: true,
                    headerBackVisible: true,
                    // headerLeft: () => (
                    //     <ScreenHeaderBtn
                    //         iconUrl={icons.left}
                    //         dimension='60%'
                    //         handlePress={() => router.back()}
                    //     />
                    // ),
                    // headerRight: () => (
                    //     <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
                    // ),
                    headerTitle: params.section.charAt(0).toUpperCase() + params.section.slice(1)
                }}
            />

            <View>
                {/* <Text>News Page</Text> */}

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
            </View>
        </SafeAreaView>

    )
}

export default NewsPage