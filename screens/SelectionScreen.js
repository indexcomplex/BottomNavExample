// screens/SelectionScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, useColorScheme } from 'react-native';

const chordImages = {
  ead: require('../assets/ead/ead.png'),
  fbe: require('../assets/fbe/fbe.png'),
  gcf: require('../assets/gcf/gcf.png'),
};

const selectionImages = {
  31: require('../assets/31/31.png'),
  34: require('../assets/34/34.png'),
};

function SelectionScreen({ route, navigation }) {
  const { chord } = route.params;
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, colorScheme === 'dark' && styles.darkContainer]}>
      <Text style={[styles.title, colorScheme === 'dark' && styles.darkTitle]}>Selected: {chord}</Text>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => navigation.navigate('ResultScreen', { chord, number: '31' })}
      >
        <Image
          source={selectionImages[31]}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => navigation.navigate('ResultScreen', { chord, number: '34' })}
      >
        <Image
          source={selectionImages[34]}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Change background color to white
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  darkTitle: {
    color: '#fff',
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
