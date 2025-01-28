import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter, Stack } from "expo-router";
import { FIREBASE_AUTH } from "../firebaseConfig";
import Home from ".";
import { COLORS, SIZES } from "../constants";


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    if (password != confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    try {
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      console.log('sign up success')
      router.push('/')
    } catch (error) {
      Alert.alert('Error', error.message);
    }

  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: true,
                    headerTitle: "Sign Up",
                    headerBackVisible: false,
                }}
            />
    <View style={styles.container}>
      <Text style={styles.title}>
        Sign Up
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      // style={{ borderBottomWidth: 1, marginBottom: 8 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        autoCapitalize="none"
        style = {styles.input}
        // style={{ borderBottomWidth: 1, marginBottom: 16 }}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
        style = {styles.input}
        // style={{ borderBottomWidth: 1, marginBottom: 16 }}
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
    </SafeAreaView>
  );
};

export default Signup;


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