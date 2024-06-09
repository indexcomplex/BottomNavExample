import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const accordionTypes = {
  ead: require('../assets/ead/ead.png'),
  fbe: require('../assets/fbe/fbe.png'),
  gcf: require('../assets/gcf/gcf.png'),
};

const selectionImages = {
  '31': require('../assets/31/31.png'),
  '34': require('../assets/34/34.png'),
};

function SearchScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(accordionTypes).map(type => (
        <View key={type} style={styles.accordionTypeContainer}>
          <Image source={accordionTypes[type]} style={styles.image} />
          <Text style={styles.typeText}>{type.toUpperCase()}</Text>
          <TouchableOpacity
            style={styles.selectionButton}
            onPress={() => navigation.navigate('ResultScreen', { type, selection: '31' })}
          >
            <Image source={selectionImages['31']} style={styles.selectionImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selectionButton}
            onPress={() => navigation.navigate('ResultScreen', { type, selection: '34' })}
          >
            <Image source={selectionImages['34']} style={styles.selectionImage} />
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
    backgroundColor: '#fff', // Change background to white
    paddingVertical: 1, //switched from 10
  },
  accordionTypeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 50,
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
    width: 80,
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  selectionImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

export default SearchScreen;
