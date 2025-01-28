import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity} from 'react-native';
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
        <View style = {styles.container}>
            <Text style = {styles.title}>
                Login
            </Text>
            <TextInput
                style = {styles.input}
                placeholder= "Email"
                value= {email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style = {styles.input}
                placeholder="Password"
                value= {password}
                onChangeText={setPassword}
                autoCapitalize="none"
                secureTextEntry
            />
            {/* <View style= {styles.button}> */}
            <Button
                title= {"Login"}
                onPress={handleLogin}
                // disabled = {loading}           
            />
            <Text style = {styles.signupText}>
                Don't have an account? {' '}
                <Text 
                    style ={styles.signupLink}
                    onPress = {() => router.push(`/signup`)}>
                    
                    Sign Up
                    
                </Text>
            </Text>
            {/* <Button
                title="Sign Up"
                color="gray"
                onPress={ () => router.push(`/signup`)}
            /> */}
            {/* </View> */}

        </View>
    );
};

// import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f9f9f9',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  forgotPassword: {
    marginTop: 12,
    color: '#007BFF',
    fontSize: 14,
  },
  footer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  footerLink: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
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

