// AddUser.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import webAvatar from '../assets/random_person.jpg';

const AddUser = ({ navigation }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = () => {

    if (!firstName || !lastName || !email) {
      // Check if any of the input fields are empty
       alert('Error, please fill in all fields');
      return;
    }
    // Generate a random id for the new user (for simplicity, not recommended in production)
    const id = Math.floor(Math.random() * 1000);

    // Create the new user object
    const newUser = {
      id,
      first_name: firstName,
      last_name: lastName,
      email,
      avatar: webAvatar
    };

    // Dispatch action to add the new user to the Redux store
    dispatch({ type: 'ADD_USER', payload: newUser });

    // Navigate back to the Main screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New User</Text>
      
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Add User" onPress={handleAddUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 20,
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust the image to cover the entire container
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddUser;
