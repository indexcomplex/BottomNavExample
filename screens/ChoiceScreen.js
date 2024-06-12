import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const choices = {
  'ead': ['Choice 1A', 'Choice 1B', 'Choice 1C'],
  'fbe': ['Choice 2A', 'Choice 2B', 'Choice 2C'],
  'gcf': ['Choice 3A', 'Choice 3B', 'Choice 3C'],
};

function ChoiceScreen({ route, navigation }) {
  const { type, choice } = route.params; // Receive type and choice

  const handleChoicePress = (choice) => {
    if (choice === 'Choice 1A') {
      navigation.navigate('ImageScrollScreen');
    } else {
      console.log(`${choice} selected`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type} - {choice} - Choices</Text>
      {choices[type].map((choice, index) => (
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
