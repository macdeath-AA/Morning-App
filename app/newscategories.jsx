import React from 'react'
import { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, SafeAreaView, Modal, ScrollView } from 'react-native'
import { Stack, useRouter } from 'expo-router';


import styles from '../components/home/news/newsoption.style'
import { FlatList } from 'react-native';
import useFetch from '../hook/useFetch'

import { COLORS, SIZES } from "../constants";
import CategoryCard from '../components/common/cards/news/CategoryCard';
import FloatingButton from '../components/common/floatingbutton/FloatingButton';
import CheckBox from 'react-native-check-box';

import { collection, addDoc } from "firebase/firestore";
// import { FIRESTORE_DB } from "..firebaseConfig"; // Adjust the path to your firebase.js file
import { FIRESTORE_DB } from '../firebaseConfig';


const NewsCategories = () => {
    const router = useRouter();
    const allCategories = ['home', 'arts', 'automobiles', 'business', 'fashion', 'food', 'health', 'movies', 'politics', 'science', 'sports', 'technology', 'world']
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]); // Track selected items

    const handleToggle = (item) => {
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.includes(item)
                ? prevSelectedItems.filter((i) => i !== item) // Unselect if already selected
                : [...prevSelectedItems, item] // Add item to selected list
        );
    };

    const handleFloatingButtonPress = () => {
        setModalVisible(true); // Show modal when button is pressed
    };

    const handleCloseModal = () => {
        setModalVisible(false); // Close modal
    };

    const handleConfirmSelection = () => {
        alert('Selected items: ' + selectedItems.join(', ')); // Handle selected items
        handleCloseModal(); // Close modal after confirming selection
    };


    const addData = async () => {
        try {
          const docRef = await addDoc(collection(FIRESTORE_DB, "users"), {
            name: "John Doe",
            age: 25,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };

    const isLoading = false
    const error = false

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: true,
                    headerBackVisible: true,
                    headerTitle: "News Cateogories"
                }}
            />

            <View>
                <View style={styles.cardsContainer}>
                    {isLoading ? (
                        <ActivityIndicator size='large' color={COLORS.primary} />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : selectedItems.length > 0 ? (
                        <FlatList
                            data={selectedItems}
                            renderItem={({ item }) => (
                                <CategoryCard
                                    item={item.charAt(0).toUpperCase() + item.slice(1)}
                                />
                            )}
                        // keyExtractor={(item) => item.title}
                        // contentContainerStyle={{ columnGap: SIZES.medium }}
                        // horizontal
                        />
                    ) : (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>No categories selected. Click on the '+' icon to add your interests!</Text>
                        </View>
                    )}
                </View>
            </View>
            <FloatingButton onPress={handleFloatingButtonPress} />

            <TouchableOpacity onPress={addData}>
                    <View>
                    <Text>Firestore test</Text>
                    </View>
                    
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Select Options</Text>

                        {/* Multi-select checkboxes */}
                        <ScrollView style={styles.scrollView}>
                            {allCategories.map((item, index) => (
                                <View style={styles.checkboxContainer} key={index}>
                                    <CheckBox
                                        isChecked={selectedItems.includes(item)} // Set checkbox state based on selectedItems
                                        onClick={() => handleToggle(item)} // Handle checkbox click
                                        checkBoxColor="#007AFF"
                                    />
                                    <Text style={styles.checkboxLabel}>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
                                </View>
                            ))}
                        </ScrollView>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={handleConfirmSelection} style={styles.confirmButton}>
                                <Text style={styles.confirmButtonText}>Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleCloseModal} style={styles.cancelButton}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}


export default NewsCategories