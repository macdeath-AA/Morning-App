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
import useFacts from '../hook/useFacts';
import useFactsWorking from '../hook/useFactsWorking';


const Home = () => {
    const router = useRouter();
    const {test} = useFacts();
    const {fact} = useFactsWorking();
    

    // const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // const {facts} = useFacts();
    console.log(test)
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
                        <ScreenHeaderBtn  text = "Log Out"
                        dimension="50%" 
                        handlePress={async () => {
    
                            try {
                                await signOut(FIREBASE_AUTH);
                                router.push(`/Login`);
                            } catch (error){
                                console.error("logout error", error);
                            }
                             
                        }}/>
                    ),
                    headerTitle: "Morning App",
                    headerBackVisible: false
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
                    <Text style={styles.cardTitle}>Useless Facts Daily</Text>
                    <Text style={styles.cardContent}>
                        {fact || "Loading fact..."}

                        {/* console.log("test test") */}
                        {/* {error ? "Failed to load fact." : facts?.message || "No fact available for today."} */}
                    </Text>
                    
                </View>
                
            </View>

        </SafeAreaView>
    )
}

export default Home;