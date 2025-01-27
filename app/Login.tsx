import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { useRouter } from "expo-router";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        // setLoading(true);
        try {
            signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
            // Alert.alert('Success', 'You are logged in!');
            router.push(`/`);
        } catch (error) {
            Alert.alert('Login Error', error.message);
        } 
    };

    return (
        <View style = {Loginstyles.container}>
            <Text>
                Login
            </Text>
            <TextInput
                style = {Loginstyles.input}
                placeholder= "Email"
                value= {email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style = {Loginstyles.input}
                placeholder="Password"
                value= {password}
                onChangeText={setPassword}
                autoCapitalize="none"
                secureTextEntry
            />
            <View style= {Loginstyles.buttonContainer}>
            <Button
                title= {"Login"}
                onPress={handleLogin}
                // disabled = {loading}           
            />
            <Text style = {Loginstyles.signupText}>
                Don't have an account? {' '}
                <Text 
                    style ={Loginstyles.signupLink}
                    onPress = {() => router.push(`/signup`)}>
                    
                    Sign Up
                    
                </Text>
            </Text>
            {/* <Button
                title="Sign Up"
                color="gray"
                onPress={ () => router.push(`/signup`)}
            /> */}
            </View>

        </View>
    );
};

const Loginstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 16,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    signupText: {
        textAlign: "center",
        marginTop: 20,
    },
    signupLink: {
        color: 'blue',
        fontWeight: 'bold'
    }

});

export default Login;

