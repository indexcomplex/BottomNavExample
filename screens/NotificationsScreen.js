import React, { useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text } from 'react-native';
import CustomPressable from '../components/CustomPressable';

const audioFiles = [
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

const NotificationsScreen = () => {
  const [rotate, setRotate] = useState(new Animated.Value(0));

  const handleInvert = () => {
    Animated.timing(rotate, {
      toValue: rotate._value === 0 ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
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
    flexDirection: 'row',
  },
  invertButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 10,
    top: '50%',
    zIndex: 10,
    transform: [{ rotate: '45deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  invertButtonText: {
    color: '#fff',
    fontSize: 16,
    transform: [{ rotate: '-45deg' }],
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
