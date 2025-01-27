import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import { FIREBASE_AUTH } from "../firebaseConfig";
import Home from ".";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('') ;
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handleSignup = async () => {
        if (password!= confirmPassword){
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }
        try {
            await createUserWithEmailAndPassword(FIREBASE_AUTH, email,password);
            console.log('sign up success')
            router.push('/')
        } catch (error){
            Alert.alert('Error', error.message);
        }
        
    };
    
    return (
      <View>
        <Text>Sign Up</Text>
      
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{ borderBottomWidth: 1, marginBottom: 8 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        autoCapitalize="none"
        style={{ borderBottomWidth: 1, marginBottom: 16 }}
      />
      <TextInput
      placeholder="Confirm Password"
      value={confirmPassword}
      onChangeText={setConfirmPassword}
      secureTextEntry
      autoCapitalize="none"
      style={{ borderBottomWidth: 1, marginBottom: 16 }}
      />
      <Button title="Sign Up" onPress={handleSignup} />
      </View>
    );
};

export default Signup;