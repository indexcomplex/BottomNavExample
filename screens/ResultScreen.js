//chord picker
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const items = {
  ead: ['E', 'A', 'D', 'B', 'G'],
  fbe: ['F', 'Bb', 'EB', 'C', 'Lab'],
  gcf: ['G', 'C', 'F', 'D', 'Sib'],
};

function ResultScreen({ route }) {
  const { type, selection } = route.params;
  const navigation = useNavigation(); // Initialize useNavigation

  const handleChoicePress = (choice) => {
    navigation.navigate('ChoiceScreen', { type, choice });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type} - {selection} - Results</Text>
      {items[type].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.itemButton}
          onPress={() => handleChoicePress(item)} // Handle choice press
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
