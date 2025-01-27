import { View, ScrollView, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn, Welcome } from '../components';
import NewsOption from '../components/home/news/NewsOption';
import NewsPage from '.';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebaseConfig';
import Login from './Login';
// import Signup from './signup';
import { ActivityIndicator } from 'react-native';


const Home = () => {
    const router = useRouter();
    // const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
           if (user){
            setLoading(false);
            // router.push(`/`)
           } else{
            router.push(`/Login`);
           }
        //    setLoading(false);
        });

        return unsubscribe;
    },[]);

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
                        <ScreenHeaderBtn  text = "LogOut"
                        dimension="50%" 
                        handlePress={async () => {
                            // signOut(FIREBASE_AUTH)
                            // .then(()=> {
                            //     router.push(`/Login`);
                            // })
                            // .catch((error) => {
                            //     console.error("Logout Error", error);
                            // })
                            try {
                                await signOut(FIREBASE_AUTH);
                                router.push(`/Login`);
                            } catch (error){
                                console.error("logout error", error);
                            }
                             
                        }}/>
                    ),
                    headerTitle: "Morning App"
                }}
            />

            <View style={{ flex: 1, padding: SIZES.medium }}>
                <Welcome />
                <NewsOption />
            </View>

        </SafeAreaView>
    )
}

export default Home