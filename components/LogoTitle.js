import React from 'react';
import { Image, StyleSheet } from 'react-native';

function LogoTitle() {
  return (
    <Image
      source={require('../assets/logo/logo.png')}
      style={styles.logo}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default LogoTitle;
