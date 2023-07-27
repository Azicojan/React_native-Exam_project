// MainScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import LogoutButton from './LogoutButton';
import UserCard from './UserCard';

const MainScreen = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the API and store it in the Redux store.
    axios
      .get('https://reqres.in/api/users')
      .then((response) => {
        const userData = response.data.data;
        dispatch({ type: 'SET_USERS', payload: userData });
        //console.log(response)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        
      });
  }, [dispatch]);

  useEffect(() => {
    // Filter the users based on the search text
    const filtered = users.filter((user) =>
      user.first_name.toLowerCase().startsWith(searchText.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [users, searchText]);

  const handleCardPress = (user) => {
    // Navigate to UserDetails screen and pass the user object as a parameter
    navigation.navigate('UserDetails', { user });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleCardPress(item)}>
        <UserCard user={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <LogoutButton navigation={navigation} /> 
      <Text style={styles.heading}>User List</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredUsers}
        renderItem={renderItem} // Use the renderItem function
        keyExtractor={(item) => item.id.toString()}
      />
      
      <TouchableOpacity
        style={styles.addButton} // Use the same style as the delete button
        onPress={() => navigation.navigate('AddUser')}
      >
        <Text style={styles.buttonText}>Add User</Text>
      </TouchableOpacity>
      
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
  addButton: {
    backgroundColor: '#648D95', 
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  searchInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default MainScreen;


