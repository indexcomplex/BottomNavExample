// screens/SelectionScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

function SelectionScreen({ route, navigation }) {
  const { chord } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selected: {chord}</Text>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => navigation.navigate('ResultScreen', { chord, number: '31' })}
      >
       
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => navigation.navigate('ResultScreen', { chord, number: '34' })}
      >
       
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  imageButton: {
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
});

export default SelectionScreen;
