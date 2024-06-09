// screens/SearchScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Chord</Text>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => navigation.navigate('SelectionScreen', { chord: 'EAD' })}
      >
        <Image
          source={require('../assets/ead/ead.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => navigation.navigate('SelectionScreen', { chord: 'FBbEb' })}
      >
        <Image
          source={require('../assets/fbe/fbe.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => navigation.navigate('SelectionScreen', { chord: 'GCG' })}
      >
        <Image
          source={require('../assets/gcf/gcf.png')}
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

export default SearchScreen;
