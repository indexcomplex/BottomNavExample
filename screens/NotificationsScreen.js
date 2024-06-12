// NotificationsScreen.js
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SoundButton from '../components/SoundButton';

const NotificationsScreen = () => {
  const renderButtons = (start, end) => {
    const buttons = [];
    for (let i = start; i <= end; i++) {
      buttons.push(<SoundButton key={i} label={`B${i}`} />);
    }
    return buttons;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.column}>
        {renderButtons(1, 10)}
      </View>
      <View style={styles.column}>
        {renderButtons(11, 21)}
      </View>
      <View style={styles.column}>
        {renderButtons(22, 31)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

export default NotificationsScreen;
