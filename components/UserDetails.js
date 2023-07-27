// UserDetails.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetails = ({ route }) => {
  const { email, last_name } = route.params.user;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>User Details</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{email}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.info}>{last_name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#333',
  },
  info: {
    fontSize: 16,
    color: '#666',
  },
});

export default UserDetails;
