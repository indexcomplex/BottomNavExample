// screens/NotificationsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text>NotificationsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationsScreen;