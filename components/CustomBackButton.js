import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

function CustomBackButton() {
  const navigation = useNavigation();

  if (!navigation.canGoBack()) {
    return null; // Do not render the button if there's no screen to go back to
  }

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <Icon name="arrow-back" size={24} color="#000" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
  },
});

export default CustomBackButton;
