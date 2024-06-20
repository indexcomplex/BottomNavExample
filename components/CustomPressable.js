// CustomPressable.js
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { GestureDetector, GestureHandlerRootView, Gesture } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';

const CustomPressable = ({ label, audioFile, buttonSize }) => {
  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(audioFile);
      console.log(`Sound for ${label} created`);
      await sound.playAsync();
      console.log(`Sound for ${label} played`);
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
          console.log(`Sound for ${label} finished and unloaded`);
        }
      });
    } catch (error) {
      console.error(`Error playing sound for ${label}:`, error);
    }
  };

  const tapGesture = Gesture.Tap().onEnd(() => {
    playSound();
  });

  return (
    <GestureDetector gesture={tapGesture}>
      <View style={[styles.button, { width: buttonSize, height: buttonSize, borderRadius: buttonSize / 2 }]}>
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 4,
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
