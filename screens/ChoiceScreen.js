import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const choices = {
  'Item 1': ['Choice 1A', 'Choice 1B', 'Choice 1C'],
  'Item 2': ['Choice 2A', 'Choice 2B', 'Choice 2C'],
  'Item 3': ['Choice 3A', 'Choice 3B', 'Choice 3C'],
  'Item 4': ['Choice 4A', 'Choice 4B', 'Choice 4C'],
  'Item 5': ['Choice 5A', 'Choice 5B', 'Choice 5C'],
};

function ChoiceScreen({ route, navigation }) {
  const { item } = route.params;

  const handleChoicePress = (choice) => {
    if (choice === 'Choice 1A') {
      navigation.navigate('ImageScrollScreen');
    } else {
      // Handle other choices if needed
      console.log(`${choice} selected`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item} - Choices</Text>
      {choices[item].map((choice, index) => (
        <TouchableOpacity
          key={index}
          style={styles.choiceButton}
          onPress={() => handleChoicePress(choice)}
        >
          <Text style={styles.choiceText}>{choice}</Text>
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
  choiceButton: {
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
  choiceText: {
    fontSize: 18,
  },
});

export default ChoiceScreen;
