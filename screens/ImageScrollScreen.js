import React, { useEffect, useRef, useState } from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const images = [
  require('../assets/images/image1.png'),
  require('../assets/images/image2.png'),
  require('../assets/images/image3.png'),
  require('../assets/images/image4.png'),
  require('../assets/images/image5.png'),
  require('../assets/images/image6.png'),
  require('../assets/images/image7.png'),
  require('../assets/images/image8.png'),
];

function ImageScrollScreen() {
  const sound = useRef(new Audio.Sound());
  const loopSound = useRef(new Audio.Sound());
  const [isLoopEnabled, setIsLoopEnabled] = useState(false);
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

  const toggleLoop = async () => {
    console.log(`Toggling loop: ${!isLoopEnabled}`);
    setIsLoopEnabled(!isLoopEnabled);

    if (!isLoopEnabled) {
      console.log('Attempting to play loop sound');
      try {
        await loopSound.current.unloadAsync();
        console.log('Loop sound unloaded');
        await loopSound.current.loadAsync(require('../assets/audio/fas2.mp3'));
        console.log('Loop sound loaded');
        await loopSound.current.setIsLoopingAsync(true);
        await loopSound.current.playAsync();
        console.log('Loop sound played');
      } catch (error) {
        console.log('Error loading or playing loop sound:', error);
      }
    } else {
      await loopSound.current.unloadAsync();
      console.log('Loop sound stopped');
    }
  };

  useEffect(() => {
    return () => {
      sound.current.unloadAsync().catch(error => console.log('Error unloading sound:', error));
      loopSound.current.unloadAsync().catch(error => console.log('Error unloading loop sound:', error));
    };
  }, []);

  console.log('ImageScrollScreen rendered');  // Verify rendering

  return (
    <View style={{ flex: 1 }}>
      <ScrollView 
        horizontal 
        contentContainerStyle={styles.container} 
        showsHorizontalScrollIndicator={false}
      >
        {images.map((image, index) => (
          <TouchableOpacity key={index} style={styles.imageContainer} onPress={playSound}>
            <Text>Test for ead 31</Text>
            <Image source={image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={toggleLoop} style={styles.loopButton}>
          <Text style={styles.loopText}>{isLoopEnabled ? 'Loop On' : 'Loop Off'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange items in a row
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20, // Space between images
  },
  image: {
    width: screenWidth * 0.9, // 90% of screen width
    height: screenHeight * 0.5, // 50% of screen height
    resizeMode: 'contain',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  loopButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  loopText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ImageScrollScreen;
