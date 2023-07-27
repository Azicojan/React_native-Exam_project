import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

const LogoutButton = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the action to reset the login status
    dispatch({ type: 'LOGOUT' });

    // Navigate to the Login screen
    navigation.navigate('Login');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
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
});

export default LogoutButton;

