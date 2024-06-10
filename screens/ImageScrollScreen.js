import React from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

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
  return (
    <ScrollView 
      horizontal 
      contentContainerStyle={styles.container} 
      showsHorizontalScrollIndicator={false}
    >
      {images.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
      ))}
    </ScrollView>
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
});

export default ImageScrollScreen;
