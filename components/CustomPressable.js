import React, { useRef } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';

const CustomPressable = ({ label, audioFile, buttonSize }) => {
  const playSound = async () => {
    try {
      const { sound: newSound } = await Audio.Sound.createAsync(audioFile);
      await newSound.playAsync();
    } catch (error) {
      console.error(`Error playing sound for ${label}:`, error);
    }
  };

  const stopSound = async () => {
    // You can decide if you still want to have a stop function
  };

  const tapGesture = Gesture.Tap()
    .onTouchesDown(() => {
      playSound();
    })
    .onTouchesUp(() => {
      stopSound();
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
//made sound better removed unloading of sound
