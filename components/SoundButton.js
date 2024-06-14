import React, { useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const SoundButton = ({ label, audioFile }) => {
  const sound = useRef(new Audio.Sound());

  const playSound = async () => {
    console.log(`Attempting to play sound for ${label}`);
    try {
      await sound.current.unloadAsync(); // Ensure it's unloaded before loading a new sound
      console.log(`Sound for ${label} unloaded`);
      await sound.current.loadAsync(audioFile);
      console.log(`Sound for ${label} loaded`);
      await sound.current.playAsync();
      console.log(`Sound for ${label} played`);
      sound.current.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.current.unloadAsync();
          console.log(`Sound for ${label} finished and unloaded`);
        }
      });
    } catch (error) {
      console.log(`Error loading or playing sound for ${label}:`, error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPressIn={playSound} onPressOut={playSound}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 1, // Reduced margin to bring buttons closer together
    borderRadius: 25, // Make the button circular
    width: 50, // Width of the button
    height: 50, // Height of the button
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 10, // Adjust text size to fit within smaller button
    textAlign: 'center',
  },
});

export default SoundButton;
