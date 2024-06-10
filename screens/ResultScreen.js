import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const items = {
  ead: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  fbe: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  gcf: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
};

function ResultScreen({ route, navigation }) {
  const { type, selection } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type} - {selection} - Results</Text>
      {items[type].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.itemButton}
          onPress={() => navigation.navigate('ChoiceScreen', { item })}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemButton: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    width: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
  },
});

export default ResultScreen;
