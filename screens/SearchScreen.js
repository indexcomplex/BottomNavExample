// screens/SearchScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, useColorScheme, Appearance } from 'react-native';

const imagePaths = {
  ead: require('../assets/ead/ead.png'),
  fbe: require('../assets/fbe/fbe.png'),
  gcf: require('../assets/gcf/gcf.png'),
};

function SearchScreen({ navigation }) {
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, colorScheme === 'dark' && styles.darkContainer]}>
      <Text style={[styles.title, colorScheme === 'dark' && styles.darkTitle]}>Select a Chord</Text>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => navigation.navigate('SelectionScreen', { chord: 'EAD' })}
      >
        <Image
          source={imagePaths.ead}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => navigation.navigate('SelectionScreen', { chord: 'FBE' })}
      >
        <Image
          source={imagePaths.fbe}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => navigation.navigate('SelectionScreen', { chord: 'GCF' })}
      >
        <Image
          source={imagePaths.gcf}
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

export default SearchScreen;
