// components/CustomPressable.js
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { GestureDetector, GestureHandlerRootView, Gesture } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';

const CustomPressable = ({ label, audioFile }) => {
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(audioFile);
    try {
      await sound.playAsync();
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  const tapGesture = Gesture.Tap()
    .onBegin(() => {
      playSound();
    });

  return (
    <GestureDetector gesture={tapGesture}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 5,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default CustomPressable;
