import {View, ScrollView, SafeAreaView} from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES} from '../constants';
import { ScreenHeaderBtn, Welcome} from '../components';


const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
            options={{headerStyle: {backgroundColor: COLORS.lightWhite},
            headerRight: () => (
                <ScreenHeaderBtn iconUrl = {icons.profile} dimension = "100%"/>
            ),
            headerTitle: ""
            }}
            />

            <ScrollView showsVerticalScrollIndicator ={false}>
                <View style= {{flex:1, padding: SIZES.medium}}>
                <Welcome/>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home