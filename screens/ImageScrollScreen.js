import React, { useEffect, useRef, useState } from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';

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

const audios = [
  require('../assets/audio/fas1.mp3'),
  require('../assets/audio/fas2.mp3'),
  require('../assets/audio/fas3.mp3'),
  require('../assets/audio/fas4.mp3'),
  require('../assets/audio/fas5.mp3'),
  require('../assets/audio/fas6.mp3'),
  require('../assets/audio/fas7.mp3'),
  require('../assets/audio/fas8.mp3'),
];

function ImageScrollScreen() {
  const sounds = useRef([]);
  const [isPlaying, setIsPlaying] = useState(Array(images.length).fill(false));
  const [soundLoaded, setSoundLoaded] = useState(Array(images.length).fill(false));

  const loadSound = async (index) => {
    if (soundLoaded[index]) {
      return;
    }
    sounds.current[index] = new Audio.Sound();
    try {
      await sounds.current[index].loadAsync(audios[index]);
      await sounds.current[index].setIsLoopingAsync(true);
      setSoundLoaded((prev) => {
        const newSoundLoaded = [...prev];
        newSoundLoaded[index] = true;
        return newSoundLoaded;
      });
      console.log(`Sound ${index + 1} loaded`);
    } catch (error) {
      console.log(`Error loading sound ${index + 1}:`, error);
    }
  };

  const playPauseSound = async (index) => {
    if (isPlaying[index]) {
      await sounds.current[index].pauseAsync();
      setIsPlaying((prev) => {
        const newIsPlaying = [...prev];
        newIsPlaying[index] = false;
        return newIsPlaying;
      });
      console.log(`Sound ${index + 1} paused`);
    } else {
      if (!soundLoaded[index]) {
        await loadSound(index);
      }
      await sounds.current[index].playAsync();
      setIsPlaying((prev) => {
        const newIsPlaying = [...prev];
        newIsPlaying.fill(false); // Pause all other sounds
        newIsPlaying[index] = true;
        return newIsPlaying;
      });
      console.log(`Sound ${index + 1} played`);
    }
  };

  useEffect(() => {
    return () => {
      sounds.current.forEach((sound) => {
        if (sound) {
          sound.unloadAsync().catch((error) => console.log('Error unloading sound:', error));
        }
      });
    };
  }, []);

  console.log('ImageScrollScreen rendered'); // Verify rendering

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Text>Test for ead 31</Text>
            <Image source={image} style={styles.image} />
            <TouchableOpacity onPress={() => playPauseSound(index)}>
              <FontAwesome
                name={isPlaying[index] ? 'pause' : 'play'}
                size={32}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  icon: {
    marginTop: 10,
  },
});

export default ImageScrollScreen;
