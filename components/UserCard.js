// UserCard.js
/*
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = (userId) => {
    // Dispatch action to remove the user from the Redux store based on their id
    dispatch({ type: 'DELETE_USER', payload: userId });
  };

  return (
    <View style={styles.card}>
      <Text>{user.first_name}</Text>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Button title="Delete" onPress={() => handleDeleteUser(user.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  
});

export default UserCard;*/
// UserCard.js

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Dispatch the delete action using the user's id
    dispatch({ type: 'DELETE_USER', payload: user.id });
  };

  return (
    <View style={styles.card}>
      <View style={styles.userInfo}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.first_name}</Text>
      </View>
      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#648D95', 
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginLeft: 5
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserCard;
