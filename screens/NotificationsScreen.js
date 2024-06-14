import React, { useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text } from 'react-native';
import CustomPressable from '../components/CustomPressable';

const audioFilesFKey = [
  require('../assets/audio/F_Key/f1.mp3'),
  require('../assets/audio/F_Key/f2.mp3'),
  require('../assets/audio/F_Key/f3.mp3'),
  require('../assets/audio/F_Key/f4.mp3'),
  require('../assets/audio/F_Key/f5.mp3'),
  require('../assets/audio/F_Key/f6.mp3'),
  require('../assets/audio/F_Key/f7.mp3'),
  require('../assets/audio/F_Key/f8.mp3'),
  require('../assets/audio/F_Key/f9.mp3'),
  require('../assets/audio/F_Key/f10.mp3'),
  require('../assets/audio/F_Key/f11.mp3'),
  require('../assets/audio/F_Key/f12.mp3'),
  require('../assets/audio/F_Key/f13.mp3'),
  require('../assets/audio/F_Key/f14.mp3'),
  require('../assets/audio/F_Key/f15.mp3'),
  require('../assets/audio/F_Key/f16.mp3'),
  require('../assets/audio/F_Key/f17.mp3'),
  require('../assets/audio/F_Key/f18.mp3'),
  require('../assets/audio/F_Key/f19.mp3'),
  require('../assets/audio/F_Key/f20.mp3'),
  require('../assets/audio/F_Key/f21.mp3'),
  require('../assets/audio/F_Key/f22.mp3'),
  require('../assets/audio/F_Key/f23.mp3'),
  require('../assets/audio/F_Key/f24.mp3'),
  require('../assets/audio/F_Key/f25.mp3'),
  require('../assets/audio/F_Key/f26.mp3'),
  require('../assets/audio/F_Key/f27.mp3'),
  require('../assets/audio/F_Key/f28.mp3'),
  require('../assets/audio/F_Key/f29.mp3'),
  require('../assets/audio/F_Key/f30.mp3'),
  require('../assets/audio/F_Key/f31.mp3'),
  require('../assets/audio/F_Key/f32.mp3'),
  require('../assets/audio/F_Key/f33.mp3'),
  require('../assets/audio/F_Key/f34.mp3'),
];

const audioFilesGKey = [
  require('../assets/audio/G_Key/g1.mp3'),
  require('../assets/audio/G_Key/g2.mp3'),
  require('../assets/audio/G_Key/g3.mp3'),
  require('../assets/audio/G_Key/g4.mp3'),
  require('../assets/audio/G_Key/g5.mp3'),
  require('../assets/audio/G_Key/g6.mp3'),
  require('../assets/audio/G_Key/g7.mp3'),
  require('../assets/audio/G_Key/g8.mp3'),
  require('../assets/audio/G_Key/g9.mp3'),
  require('../assets/audio/G_Key/g10.mp3'),
  require('../assets/audio/G_Key/g11.mp3'),
  require('../assets/audio/G_Key/g12.mp3'),
  require('../assets/audio/G_Key/g13.mp3'),
  require('../assets/audio/G_Key/g14.mp3'),
  require('../assets/audio/G_Key/g15.mp3'),
  require('../assets/audio/G_Key/g16.mp3'),
  require('../assets/audio/G_Key/g17.mp3'),
  require('../assets/audio/G_Key/g18.mp3'),
  require('../assets/audio/G_Key/g19.mp3'),
  require('../assets/audio/G_Key/g20.mp3'),
  require('../assets/audio/G_Key/g21.mp3'),
  require('../assets/audio/G_Key/g22.mp3'),
  require('../assets/audio/G_Key/g23.mp3'),
  require('../assets/audio/G_Key/g24.mp3'),
  require('../assets/audio/G_Key/g25.mp3'),
  require('../assets/audio/G_Key/g26.mp3'),
  require('../assets/audio/G_Key/g27.mp3'),
  require('../assets/audio/G_Key/g28.mp3'),
  require('../assets/audio/G_Key/g29.mp3'),
  require('../assets/audio/G_Key/g30.mp3'),
  require('../assets/audio/G_Key/g31.mp3'),
  require('../assets/audio/G_Key/g32.mp3'),
  require('../assets/audio/G_Key/g33.mp3'),
  require('../assets/audio/G_Key/g34.mp3'),
];

const NotificationsScreen = () => {
  const [rotate, setRotate] = useState(new Animated.Value(0));
  const [audioFiles, setAudioFiles] = useState(audioFilesFKey);
  const [selectedKey, setSelectedKey] = useState('FKey');

  const handleInvert = () => {
    Animated.timing(rotate, {
      toValue: rotate._value === 0 ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleSwitchToFKey = () => {
    setAudioFiles(audioFilesFKey);
    setSelectedKey('FKey');
  };

  const handleSwitchToGKey = () => {
    setAudioFiles(audioFilesGKey);
    setSelectedKey('GKey');
  };

  const renderButtons = (start, end) => {
    const buttons = [];
    for (let i = start; i <= end; i++) {
      buttons.push(<CustomPressable key={i} label={`B${i}`} audioFile={audioFiles[i - 1]} />);
    }
    return buttons;
  };

  const rotateInterpolation = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'], // Full 180 degrees inversion
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[
            styles.switchButton,
            selectedKey === 'FKey' && styles.switchButtonSelected,
          ]}
          onPress={handleSwitchToFKey}
        >
          <Text style={styles.switchButtonText}>FBbEb</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.switchButton,
            selectedKey === 'GKey' && styles.switchButtonSelected,
          ]}
          onPress={handleSwitchToGKey}
        >
          <Text style={styles.switchButtonText}>GCF</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.invertButton} onPress={handleInvert}>
        <Text style={styles.invertButtonText}>Invert</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.container, { transform: [{ rotate: rotateInterpolation }] }]}>
        <View style={styles.column}>
          {renderButtons(1, 11)}
        </View>
        <View style={styles.column}>
          {renderButtons(12, 23)}
        </View>
        <View style={styles.column}>
          {renderButtons(24, 34)}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  switchContainer: {
    flexDirection: 'column',
    position: 'absolute',
    top: '20%',
    left: 5,
    zIndex: 10,
  },
  switchButton: {
    backgroundColor: '#FF5733',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    transform: [{ rotate: '45deg' }], // Apply 45-degree tilt to the switches
  },
  switchButtonSelected: {
    backgroundColor: '#FF3333',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 10,
  },
  invertButton: {
    backgroundColor: '#007BFF',
    padding: 8,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 5,
    bottom: '10%',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  invertButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  switchButtonText: {
    color: '#fff',
    fontSize: 10,
    transform: [{ rotate: '-45deg' }], // Rotate text to align correctly
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

export default NotificationsScreen;
