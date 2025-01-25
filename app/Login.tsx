import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfig";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
        } catch (error) {
            Alert.alert('Login Error', error.message);
        } finally {
            setLoading(false);
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
                secureTextEntry
            />
            <Button
                title= {loading ? "Loggin in..." : "Login"}
                onPress={handleLogin}
                disabled = {loading}           
            />

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
});

export default Login;

