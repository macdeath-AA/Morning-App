import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn, Welcome } from '../components';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebaseConfig';
import Login from './Login';
// import Signup from './signup';
import { ActivityIndicator } from 'react-native';
import styles from './welcome.style'

const Home = () => {
    const router = useRouter();
    // const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
            if (user) {
                setLoading(false);
                // router.push(`/`)
            } else {
                router.push(`/Login`);
            }
            //    setLoading(false);
        });

        return unsubscribe;
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={COLORS.primary} />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerRight: () => (
                        <ScreenHeaderBtn text="Log Out"
                            dimension="50%"
                            handlePress={() => {
                                signOut(FIREBASE_AUTH)
                                    .then(() => {
                                        router.push(`/Login`);
                                    })
                                    .catch((error) => {
                                        console.error("Logout Error", error);
                                    })
                            }} />
                    ),
                    headerTitle: "Morning App"
                }}
            />

            {/* <View style={{ flex: 1, padding: SIZES.medium }}>
                <Welcome />
                <NewsOption />
            </View> */}

            <View style={styles.container}>
                {/* News Card */}
                <View style={[styles.card, styles.newsCard]}>
                    <TouchableOpacity onPress={() => {
                        router.push(`/newscategories`)
                    }}>
                        <Text style={styles.cardTitle}>News</Text>
                        <Text style={styles.cardContent}>
                            Stay updated with the latest news and current events happening around the world.
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Stocks Card */}
                <View style={[styles.card, styles.stocksCard]}>
                    <Text style={styles.cardTitle}>Stocks</Text>
                    <Text style={styles.cardContent}>
                        Get real-time updates and insights on stock market trends and financial news.
                    </Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Home;