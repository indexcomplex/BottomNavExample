// screens/ResultScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ResultScreen({ route }) {
  const { chord, number } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chord: {chord}</Text>
      <Text style={styles.title}>Number: {number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ResultScreen;
