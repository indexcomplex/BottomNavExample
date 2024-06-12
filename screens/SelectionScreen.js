// not in use OG Idea
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const accordionTypes = {
  ead: require('../assets/ead/ead.png'),
  fbe: require('../assets/fbe/fbe.png'),
  gcf: require('../assets/gcf/gcf.png'),
};

function SelectionScreen({ navigation }) {
  const handlePress = (type) => {
    navigation.navigate('ChoiceScreen', { item: type });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(accordionTypes).map(type => (
        <View key={type} style={styles.accordionTypeContainer}>
          <Image source={accordionTypes[type]} style={styles.image} />
          <Text style={styles.typeText}>{type.toUpperCase()}</Text>
          <TouchableOpacity
            style={styles.selectionButton}
            onPress={() => handlePress(type)}
          >
            <Text style={styles.buttonText}>Select {type.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
  },
  accordionTypeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  typeText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectionButton: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    width: 150,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectionScreen;
