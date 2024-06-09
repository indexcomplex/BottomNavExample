import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

function CustomHeader({ title }) {
  const navigation = useNavigation();
  const route = useRoute();
  const canGoBack = navigation.canGoBack();
  const isInitialScreen = route.name === 'SearchScreen'; // Check if it's the initial screen

  return (
    <View style={styles.headerContainer}>
      {canGoBack && !isInitialScreen && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    height: 56, // Standard header height
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
