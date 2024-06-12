// SoundButton.js
import React, { useRef, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const SoundButton = ({ label }) => {
  const sound = useRef(new Audio.Sound());
  const [isSoundLoading, setIsSoundLoading] = useState(false);

  const playSound = async () => {
    if (isSoundLoading) {
      console.log('Sound is already loading');
      return;
    }

    setIsSoundLoading(true);
    console.log('Attempting to play sound');
    try {
      await sound.current.unloadAsync();
      console.log('Sound unloaded');
      await sound.current.loadAsync(require('../assets/audio/fas1.mp3'));
      console.log('Sound loaded');
      await sound.current.playAsync();
      console.log('Sound played');
    } catch (error) {
      console.log('Error loading or playing sound:', error);
    } finally {
      setIsSoundLoading(false);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={playSound}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 5,
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
